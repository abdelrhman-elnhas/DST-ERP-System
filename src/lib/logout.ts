export async function logout() {
    const token = localStorage.getItem("token");

    try {
        await fetch(
            "https://lightcoral-kingfisher-539840.hostingersite.com/api/logout",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );
    } catch (err) {
        console.error("Logout error:", err);
    } finally {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        document.cookie = "token=; path=/; max-age=0";

        window.location.href = "/auth/signin";
    }
}