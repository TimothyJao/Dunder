export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "api/user",
        data: {user}
    })
)

export const login = (user) => (
    $.ajax({
        method: "POST",
        url: "api/session",
        data: {user}
    })
)

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "api/session"
    })
)

export const findUsers = (search) => (
    $.ajax({
        method: "GET",
        url: "api/users",
        data: {search}
    })
)