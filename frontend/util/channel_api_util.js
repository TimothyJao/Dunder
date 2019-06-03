export const createChannel = (channel) => (
    $.ajax({
        method: "POST",
        url: "api/channels",
        data: { channel }
    })
)

export const fetchDMs = (id) => {
    return(
        $.ajax({
            method: "GET",
            url: `api/dms/${id}`
        })
    )
}

export const fetchUser = (username) => {
    return(
        $.ajax({
            method: "GET",
            url: `api/user/${id}`,
            data: {username}
        })
    )
}

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

