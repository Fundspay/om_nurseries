import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { adminPaymentRecordChartOption } from '@/utils/chartsLogic/adminPaymentRecordChartOption';
import useCardTitleActions from '@/hooks/useCardTitleActions';
import CardHeader from '@/components/shared/CardHeader';
import CardLoader from '@/components/shared/CardLoader';

const AdminPaymentRecordChart = () => {
    const chartOptions = adminPaymentRecordChartOption()
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();


    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={"Monthly Sales & Plant Dispatch Performance"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body custom-card-action p-0">
                    <ReactApexChart
                        options={chartOptions}
                        series={chartOptions.series}
                        height={377}
                    />
                </div>
                <div className="card-footer">
                    <div className="row g-4">
                        <Card bg_color={"bg-primary"} price={"240"} progress={"81%"} title={"Orders Awaiting Dispatch"} isCurrency={false} />
                        <Card bg_color={"bg-success"} price={"1,820"} progress={"81%"} title={"Orders Completed"} isCurrency={false} />
                        <Card bg_color={"bg-danger"} price={"3,86,800"} progress={"81%"} title={"Plants Lost Value"} isCurrency={true} />
                        <Card bg_color={"bg-dark"} price={"50,66,800"} progress={"81%"} title={"Nursery Sales Revenue"} isCurrency={true} />
                    </div>
                </div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default AdminPaymentRecordChart

const Card = ({ title, price, progress, bg_color, isCurrency }) => {
    return (
        <div className="col-lg-3">
            <div className="p-3 border border-dashed rounded">
                <div className="fs-12 text-muted mb-1">{title}</div>
                <h6 className="fw-bold text-dark">{isCurrency ? '₹' : ''}{price}</h6>
                <div className="progress mt-2 ht-3">
                    <div className={`progress-bar ${bg_color}`} role="progressbar" style={{ width: progress }}></div>
                </div>
            </div>
        </div>
    )
}
