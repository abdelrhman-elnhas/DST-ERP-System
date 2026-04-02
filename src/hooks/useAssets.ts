import { apiFetch } from "@/lib/api"
import { AssetCheckoutRequest, AssetResponse } from "@/types/asset"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const assetQueryKeys = {
    all: ["assets"] as const,
    list: (page: number) => ["assets", "list", page] as const,
    checkout: () => ["assets", "checkout"] as const,
    returns: (id: number) => ["assets", id] as const,
}

export function useAssets(page: number) {
    return useQuery<AssetResponse>({
        queryKey: assetQueryKeys.list(page),
        queryFn: () => apiFetch(`assets?page=${page}`),
    })
}

export function useAssetCheckout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: assetQueryKeys.checkout(),
        mutationFn: ({ id, user_id, expected_return }: AssetCheckoutRequest) => apiFetch(`assets/${id}/checkout`, {
            method: "POST",
            body: JSON.stringify({ user_id, expected_return }),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: assetQueryKeys.all });
        }

    })

}

export function useAssetReturn(id: number) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: assetQueryKeys.returns(id),
        mutationFn: () => apiFetch(`assets/${id}/return`, {
            method: "POST",
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: assetQueryKeys.all });
        }

    })
}