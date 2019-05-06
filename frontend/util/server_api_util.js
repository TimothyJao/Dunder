export const createServer = (server) => (
    $.ajax({
        method: "POST",
        url: "api/servers",
        data: {server}
    })
)

export const fetchServer = (server) => (
    $.ajax({
        method: "GET",
        url: `api/server/${server}`,
        data: {id}
    })
)

export const fetchServers = () => (
    $.ajax({
        method: "GET",
        url: "api/servers"
    })
)

export const createUserServer = (userServer) => (
    $.ajax({
        method: "POST",
        url: "api/user",
        data: { userServer }
    })
)