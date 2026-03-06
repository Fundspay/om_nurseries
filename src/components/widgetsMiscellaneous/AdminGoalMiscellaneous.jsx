import React from 'react'
import { Link } from 'react-router-dom';
import CardHeader from '@/components/shared/CardHeader'
import CircleProgress from '@/components/shared/CircleProgress';
import CardLoader from '@/components/shared/CardLoader';
import useCardTitleActions from '@/hooks/useCardTitleActions';

const goalData = [
    { value: 40, revenue: "₹20L/₹50L", title: "Monthly Sales Target", color: "#ea4d4d" },
    { value: 65, revenue: "₹18L/₹28L", title: "Wholesale Order Target", color: "#3454d1" },
    { value: 50, revenue: "₹10L/₹20L", title: "Retail Sales Target", color: "#ffa21d" },
    { value: 75, revenue: "₹38L/₹50L", title: "Revenue Achievement", color: "#17c666" }
];

const AdminGoalMiscellaneous = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={"Goal Progress"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body custom-card-action">
                    <div className="row g-4">
                        {goalData.map(({ color, revenue, title, value }, index) => (
                            <div key={index} className="col-sm-6">
                                <div className="px-4 py-3 text-center border border-dashed rounded-3 goal-card">
                                    <div className="mx-auto mb-4">
                                        <CircleProgress value={value} text_sym={"%"} path_color={color} />
                                    </div>
                                    <h2 className="fs-13 tx-spacing-1">{title}</h2>
                                    <div className="fs-11 text-muted text-truncate-1-line">{revenue}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="card-footer">
                    <Link to="#" className="btn btn-primary">Generate Report</Link>
                </div> */}
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default AdminGoalMiscellaneous
