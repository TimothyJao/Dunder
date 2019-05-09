export const fetchUsersServers = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/user_servers"
        })
    )
}

export const createUserServer = (userServer) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/user_servers",
            data: { userServer }
        })
    )
}

export const deleteUserServer = (id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/user_servers/${id}`
        })
    )
}

