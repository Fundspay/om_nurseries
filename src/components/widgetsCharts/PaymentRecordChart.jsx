import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { paymentRecordChartOption } from '@/utils/chartsLogic/paymentRecordChartOption';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardHeader from '@/components/shared/CardHeader';
import CardLoader from '@/components/shared/CardLoader';

const PaymentRecordChart = () => {
    const chartOptions = paymentRecordChartOption()
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();


    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={"Weekly Nursery Operations Overview"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action p-0">
                    <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        height={377}
                    />
                </div>
                <div className="card-footer">
                    <div className="row g-4">
                        <Card bg_color={"bg-primary"} price={"25,300"} progress={"81%"} title={"Plants in Propagation"} />
                        <Card bg_color={"bg-success"} price={"2,450"} progress={"81%"} title={"Plants Dispatched This Week"} />
                        <Card bg_color={"bg-danger"} price={"180"} progress={"81%"} title={"Plant Mortality Count"} />
                        <Card bg_color={"bg-dark"} price={"₹1.8 Cr"} progress={"81%"} title={"Estimated Inventory Value"} />
                    </div>
                </div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default PaymentRecordChart

const Card = ({ title, price, progress, bg_color }) => {
    return (
        <div className="col-lg-3">
            <div className="p-3 border border-dashed rounded">
                <div className="fs-12 text-muted mb-1">{title}</div>
                <h6 className="fw-bold text-dark">{price}</h6>
                <div className="progress mt-2 ht-3">
                    <div className={`progress-bar ${bg_color}`} role="progressbar" style={{ width: progress }}></div>
                </div>
            </div>
        </div>
    )
}
