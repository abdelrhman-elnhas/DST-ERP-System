export const getDashboardStats = async () => {
    const res = await fetch(
        "https://lightcoral-kingfisher-539840.hostingersite.com/api/dashboard/stats"
    )

    if (!res.ok) {
        throw new Error("Failed to fetch dashboard stats")
    }

    return res.json()
}
