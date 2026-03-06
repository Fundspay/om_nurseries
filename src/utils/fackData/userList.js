const list = [
    {
        id: 1,
        user_img: "",
        user_name: "OM-PLT-00124",
        user_email: "Unit A",
        user_status: "Block B2",
        proposal: "Watered",
        date: "10:32 AM",
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
        user_name: "OM-PLT-00411",
        user_email: "Unit B",
        user_status: "Block C1",
        proposal: "Fertilized",
        date: "10:41 AM",
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
        user_name: "OM-PLT-00652",
        user_email: "Unit C",
        user_status: "Block D3",
        proposal: "Sale Zone",
        date: "10:53 AM",
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
        user_name: "OM-PLT-00911",
        user_email: "Unit D",
        user_status: "Block A4",
        proposal: "Health Check",
        date: "11:12 AM",
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
        user_name: "11:40",
        user_email: "",
        user_status: "Suresh",
        proposal: "Inventory Inspection",
        date: "Block E1",
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
