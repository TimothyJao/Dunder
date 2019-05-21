export const fetchMessages = (parent_id) => (
    $.ajax({
        method: "GET",
        url: "/api/messages",
        data: {parent_id}
    })
)