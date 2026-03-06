import axios from 'axios';

const API_URL = 'https://eduroom.in/api/v1/status/listall';
const MAX_ITEMS_TO_DISPLAY = 5;

// Keep your original hardcoded data
export const crmStatisticsData = [
    {
        id: 1,
        title: "Total Acreage Mapped",
        total_number: "120",
        completed_number: "85",
        progress: "70%",
        progress_info: "35 Acres Pending",
        icon: "feather-map-pin"
    },
    {
        id: 2,
        title: "Sellable Plants",
        total_number: "450K",
        completed_number: "320K",
        progress: "71%",
        progress_info: "130K in Growth",
        icon: "feather-layers"
    },
    {
        id: 3,
        title: "Daily Tasks Completed",
        total_number: "150",
        completed_number: "112",
        progress: "74%",
        progress_info: "38 Tasks Pending",
        icon: "feather-check-circle"
    },
    {
        id: 4,
        title: "Mortality Rate",
        total_number: "4.2%",
        completed_number: "",
        progress: "4%",
        progress_info: "",
        icon: "feather-alert-circle"
    },
];

// Add API fetch function here
export const fetchLiveCRMData = async () => {
    try {
        const response = await axios.get(API_URL);
        
        if (response.data.success && response.data.data) {
            return response.data.data.slice(0, MAX_ITEMS_TO_DISPLAY).map((item, index) => ({
                id: index + 1,
                title: item.userName || "No Name",
                total_number: item.phoneNumber || "N/A",
                completed_number: item.email || "N/A",
                progress: "",
                progress_info: "",
                icon: "feather-user"
            }));
        }
        return [];
    } catch (error) {
        console.error('API Error:', error);
        throw error; // Throw the error to be caught in the component
    }
};