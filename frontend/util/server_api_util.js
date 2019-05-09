export const createServer = (server) => (
    $.ajax({
        method: "POST",
        url: "api/servers",
        data: {server}
    })
)

export const fetchServer = (id) => {
    return(
        $.ajax({
            method: "GET",
            url: `api/servers/${id}`
        })
    )
}
   

export const fetchServers = () => (
    $.ajax({
        method: "GET",
        url: "api/servers"
    })
)

export const deleteServer = (id) => {
    return(
        $.ajax({
            method: "DELETE",
            url: `/api/servers/${id}`
        })
    )
}

