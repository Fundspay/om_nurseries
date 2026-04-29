export const leadsOverviewChartOptions = {
    dataLabels: {
        enabled: !1
    },
    series: [30, 25, 20, 15, 10],
    labels: ["Fruit Plants", "Flowering Plants", "Ornamental Plants", "Medicinal Plants", "Others"],
    colors: ["#3454d1", "#25b865", "#d13b4c", "#ffa21d", "#e4e4e4"],
    stroke: {
        width: 0, lineCap: "round"
    },
    legend: {
        show: !1,
        position: "bottom",
        fontFamily: "Inter",
        fontWeight: 500,
        labels: {
            colors: "#A0ACBB", fontFamily: "Inter"
        },
        markers: {
            width: 10, height: 10
        },
        itemMargin: {
            horizontal: 20, vertical: 5
        }
    },
    plotOptions: {
        pie: {
            donut: {
                size: "85%",
                labels: {
                    show: !1,
                    name: {
                        show: !1, fontSize: "16px", colors: "#A0ACBB", fontFamily: "Inter"
                    },
                    value: {
                        show: !1, fontSize: "30px", fontFamily: "Inter", color: "#A0ACBB", formatter: function (e) {
                            return e
                        }
                    }
                }
            }
        }
    },
    responsive: [{
        breakpoint: 380,
        options: {
            chart: {
                width: 280
            },
            legend: {
                show: !1
            }
        }
    }
    ],
    tooltip: {
        y: {
            formatter: function (e) {
                return +e + "%"
            }
        },
        style: {
            colors: "#A0ACBB", fontFamily: "Inter"
        }
    }
}