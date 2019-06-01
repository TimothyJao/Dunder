export const createChannel = (channel) => (
    $.ajax({
        method: "POST",
        url: "api/channels",
        data: { channel }
    })
)

export const fetchChannel = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `api/channels/${id}`
        })
    )
}


export const fetchChannels = (server_id) => (
    $.ajax({
        method: "GET",
        url: "api/channels",
        data: {server_id}
    })
)

export const deleteChannel = (id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/channels/${id}`
        })
    )
}

