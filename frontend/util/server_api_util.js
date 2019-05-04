export const createServer = (server) => (
    $.ajax({
        method: "POST",
        url: "api/servers",
        data: {server}
    })
)

export const fetchServer = (id) => (
    $.ajax({
        method: "GET",
        url: `api/servers/${id}`,
        data: {id}
    })
)

export const fetchServers = () => (
    $.ajax({
        method: "GET",
        url: "api/servers"
    })
)