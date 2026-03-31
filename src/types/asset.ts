export interface Asset {
    id: string;
    status: string;
    asset_category_id: number;
    category: {
        id: number;
        name: string;
    }
    created_at: string;
    name: string;
    purchase_date: string;
    serial_number: string;
    updated_at: string;
}

export interface AssetPagination {
    current_page: number;
    data: Asset[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    per_page: number;
    to: number;
    total: number;
}

export interface AssetResponse {
    status: boolean;
    message: string;
    data: AssetPagination;
}


export interface AssetCheckoutRequest {
    id: number;
    user_id: number;
    expected_return: string;
}

