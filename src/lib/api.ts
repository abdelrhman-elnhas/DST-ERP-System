
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


function getTokenFromCookie(): string | null {
    if (typeof document === "undefined") return null; // server side guard
    const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="));
    return match ? match.split("=")[1] : null;
}

export async function apiFetch(endpoint: string, options?: RequestInit) {
    const token = getTokenFromCookie();

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options?.headers,
        },
    });

    if (res.status === 401) {
        document.cookie = "token=; path=/; max-age=0";
        window.location.href = "/auth/signin";
        return;
    }

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "Something went wrong");
    }

    return res.json();
}