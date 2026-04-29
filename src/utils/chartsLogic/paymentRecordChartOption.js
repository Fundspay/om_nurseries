export const paymentRecordChartOption = () => {
    const chartOptions = {
        chart: {
            width: "100%",
            stacked: !1,
            toolbar: {
                show: !1
            },
        },
        stroke: {
            width: [1, 2, 3],
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
        colors: ["#3454d1", "#a2acc7", "#28a745"],
        series: [
            {
                name: "Watering",
                type: "bar",
                data: [450, 520, 480]
            },
            {
                name: "Fertilizer",
                type: "line",
                data: [120, 150, 130]
            },
            {
                name: "Health Checks",
                type: "bar",
                data: [40, 52, 46]
            }
        ],
        fill: {
            opacity: [.85, .25, 1, 1],
            gradient: {
                inverseColors: !1,
                shade: "light",
                type: "vertical",
                opacityFrom: .5,
                opacityTo: .1,
                stops: [0, 100, 100, 100]
            }
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: ["Week 1", "Week 2", "Week 3"],
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
        yaxis: {
            labels: {
                formatter: function (e) {
                    return +e + "K"
                },
                offsetX: 0,
                offsetY: 0,
                style: {
                    colors: "#A0ACBB"
                }
            }
        },
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
            // intersect:false,
            // shared: !0,
            // inverseOrder: !0,
            y: {
                formatter: function (e) {
                    return +e + "K"
                }
            },
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
