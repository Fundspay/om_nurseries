const list = [
    {
        id: 1,
        user_img: "",
        user_name: "Aman Sharma",
        user_email: "amansharma@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "2 min ago",
        is_message_read: false,
        color: "success"
    },

    {
        id: 2,
        user_img: "",
        user_name: "Sanjay Kumar",
        user_email: "sanjaykumar@gmail.com",
        user_status: "In Progress",
        proposal: "New",
        date: "11/06/2023 10:53",
        is_active: {
            position: "inactive",
            color: "#ea4d4d"
        },
        active_time: "5 min ago",
        is_message_read: false,
        color: "primary"
    },
    {
        id: 3,
        user_img: "",
        user_name: "Akash Kumar",
        user_email: "akashkumar@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "7 min ago",
        is_message_read: true,
        color: "success"
    },
    {
        id: 4,
        user_img: "",
        user_name: "Sanjana Patil",
        user_email: "sanjanapatil@gmail.com",
        user_status: "Not Interested",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "9 min ago",
        is_message_read: true,
        color: "warning"
    },
    {
        id: 5,
        user_img: "",
        user_name: "Himanshu Gupta",
        user_email: "himanshugupta@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        is_active: {
            position: "block",
            color: "#91a1b6"
        },
        active_time: "10 min ago",
        is_message_read: true,
        color: "success"
    },
    {
        id: 6,
        user_img: "",
        user_name: "Bryan Waters",
        user_email: "nneth.une@gmail.com",
        user_status: "Not Interested",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "9 min ago",
        is_message_read: true,
        color: "warning"
    },
    {
        id: 7,
        user_img: "",
        user_name: "Valentine Maton",
        user_email: "alenine.aton@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "10 min ago",
        is_message_read: true,
        color: "success"
    },
    {
        id: 8,
        user_img: "",
        user_name: "Kenneth Hune",
        user_email: "nneth.une@gmail.com",
        user_status: "Not Interested",
        proposal: "Returning",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "9 min ago",
        is_message_read: true,
        color: "warning"
    },
    {
        id: 9,
        user_img: "",
        user_name: "Ursula Sanders",
        user_email: "alenine.aton@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "17 min ago",
        is_message_read: true,
        color: "success"
    },
    {
        id: 10,
        user_img: "",
        user_name: "Timothy Boyd",
        user_email: "alenine.aton@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 18:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "16 min ago",
        is_message_read: true,
        color: "success"
    },
    {
        id: 11,
        user_img: "",
        user_name: "Edward Andrade",
        user_email: "alenine.aton@gmail.com",
        user_status: "Completed",
        proposal: "Sent",
        date: "11/06/2023 10:53",
        is_active: {
            position: "active",
            color: "#17c666"
        },
        active_time: "20 min ago",
        is_message_read: true,
        color: "success"
    },
]

export const userList = (startItem = 0, endItem = list.length) => {
    return list.slice(startItem, endItem)
}