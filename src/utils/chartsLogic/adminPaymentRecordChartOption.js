export const adminPaymentRecordChartOption = () => {
    const chartOptions = {
        chart: {
            width: "100%",
            stacked: !1,
            toolbar: {
                show: !1
            },
        },
        stroke: {
            width: [1, 2],
            curve: "smooth",
            lineCap: "round"
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: "end",
                columnWidth: "29%"
            }
        },
        colors: ["#3454d1", "#28a745"],
        series: [
            {
                name: "Revenue (₹)",
                type: "bar",
                data: [920, 1260, 1420, 1500, 1650, 1780, 1900, 2100, 2300, 2450, 2600, 2800] // In thousands
            },
            {
                name: "Plants Sold",
                type: "line",
                data: [24, 31, 37.75, 40, 45, 48, 50, 55, 60, 65, 70, 75] // In hundreds
            }
        ],
        fill: {
            opacity: [.85, 1],
            gradient: {
                inverseColors: !1,
                shade: "light",
                type: "vertical",
                opacityFrom: .5,
                opacityTo: .1,
                stops: [0, 100]
            }
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                style: {
                    fontSize: "10px",
                    colors: "#A0ACBB"
                }
            },
        },
        yaxis: [
            {
                title: {
                    text: 'Revenue (₹)'
                },
                labels: {
                    formatter: function (e) {
                        return "₹" + e + "K"
                    },
                    style: {
                        colors: "#A0ACBB"
                    }
                }
            },
            {
                opposite: true,
                title: {
                    text: 'Plants Sold'
                },
                labels: {
                    formatter: function (e) {
                        return e + " Hund."
                    },
                    style: {
                        colors: "#A0ACBB"
                    }
                }
            }
        ],
        grid: {
            xaxis: {
                lines: {
                    show: !1
                }
            },
            yaxis: {
                lines: {
                    show: !1
                }
            },
            padding: {
                left: 35,
                right: 28
            },
        },
        dataLabels: {
            enabled: !1
        },
        tooltip: {
            style: {
                fontSize: "12px",
                fontFamily: "Inter"
            }
        },
        legend: {
            show: !1,
            labels: {
                fontSize: "12px",
                colors: "#A0ACBB"
            },
            fontSize: "12px",
            fontFamily: "Inter"
        }
    };
    return chartOptions
}
