import React, { Fragment } from 'react'
import ReactApexChart from 'react-apexcharts'
import { estimateAreaChartOptions } from '@/utils/chartsLogic/estimateAreaChartOptions'
import getIcon from '@/utils/getIcon'

const AdminSalesMiscellaneous = () => {
    const chartOption = estimateAreaChartOptions()
    const data = [20, 10, 18, 12, 25, 10, 20]

    const nurserySalesData = [
        { name: "Bulk Plant Orders", price: "₹4,50,000", sold: "", category: "Wholesale", icon: "feather-package" },
        { name: "Individual Plant Sales", price: "₹1,45,000", sold: "", category: "Retail", icon: "feather-user" },
        { name: "Landscape Project Supply", price: "₹1,25,000", sold: "", category: "Projects", icon: "feather-map" }
    ]

    return (
        <div className="col-xxl-4">
            <div className="card stretch stretch-full overflow-hidden">
                <div className="bg-primary text-white">
                    <div className="p-4">
                        <span className="badge bg-light text-primary text-dark float-end">12%</span>
                        <div className="text-start">
                            <h4 className="text-reset">Weekly Nursery Sales Summary</h4>
                            <p className="text-reset m-0">Revenue Breakdown</p>
                        </div>
                    </div>
                    <ReactApexChart
                        options={{ ...chartOption, colors: ["#93a9ff"] }}
                        series={[{ name: "Total Sales", data }]}
                        type='area'
                        height={150}
                    />
                </div>
                <div className="card-body">
                    {
                        nurserySalesData.map(({ icon, price, name, sold, category }, index) => (
                            <Fragment key={index}>
                                {index !== 0 && <hr className="border-dashed my-3"></hr>}
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="hstack gap-3">
                                        <div className="avatar-text avatar-lg bg-soft-primary text-primary rounded">
                                            {getIcon(icon)}
                                        </div>
                                        <div>
                                            <a href="#" className="d-block">{name}</a>
                                            <span className="fs-12 text-muted">{category} </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-bold text-dark">{price}</div>
                                        <div className="fs-12 text-end">{sold}</div>
                                    </div>
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminSalesMiscellaneous
