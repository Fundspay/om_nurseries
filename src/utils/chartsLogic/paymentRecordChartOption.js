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
                name: "Propagation",
                type: "bar",
                data: [12, 14, 16, 18, 20, 21, 22, 24, 25, 25, 26, 28] // In thousands
            },
            {
                name: "Growing",
                type: "line",
                data: [45, 48, 52, 55, 59, 65, 75, 85, 95, 110, 115, 127]
            },
            {
                name: "Ready for Sale",
                type: "bar",
                data: [8, 9, 12, 14, 18, 22, 28, 35, 42, 45, 48, 52]
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