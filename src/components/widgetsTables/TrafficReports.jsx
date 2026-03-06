import React, { useState } from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import { FiMoreVertical } from 'react-icons/fi';

const trafficData = [
    { source: 'Greenhouse 1', visits: 1500, percentVisits: 'Normal', percentBounce: '12', avgSessionDuration: '8.5/10', avgTimeOnPage: '02:15:30', percentConversion: 'Pass', color: 'success' },
    { source: 'Zone A', visits: 850, percentVisits: 'Normal', percentBounce: '8', avgSessionDuration: '9.0/10', avgTimeOnPage: '01:30:15', percentConversion: 'Pass', color: 'primary' },
    { source: 'Zone B', visits: 1200, percentVisits: 'High risk', percentBounce: '45', avgSessionDuration: '5.5/10', avgTimeOnPage: '03:45:00', percentConversion: 'Action Needed', color: 'danger' },
    { source: 'Zone C', visits: 900, percentVisits: 'Normal', percentBounce: '5', avgSessionDuration: '9.2/10', avgTimeOnPage: '01:20:00', percentConversion: 'Pass', color: 'info' },
    { source: 'Greenhouse 2', visits: 2000, percentVisits: 'Reviewing', percentBounce: '20', avgSessionDuration: '7.8/10', avgTimeOnPage: '02:50:45', percentConversion: 'Warning', color: 'warning' },
    { source: 'Nursery Bed', visits: 500, percentVisits: 'Normal', percentBounce: '2', avgSessionDuration: '9.5/10', avgTimeOnPage: '00:45:20', percentConversion: 'Pass', color: 'dark' },
];


const TrafficReports = ({ title }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-12">
            <div className={`card stretch stretch-full widget-tasks-content ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="thead-light">
                                <tr>
                                    <th>Zone/Area</th>
                                    <th>Plants Inspected</th>
                                    <th>Issues Found</th>
                                    <th>Health Score</th>
                                    <th>Inspection Time</th>
                                    <th>Status</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trafficData.map((data, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a href="#">
                                                <span className={`wd-10 ht-10 bg-${data.color} me-2 d-inline-block rounded-circle`} />
                                                <span>{data.source}</span>
                                            </a>
                                        </td>
                                        <td>{data.visits} <small className="text-muted">({data.percentVisits})</small></td>
                                        <td>{data.percentBounce}</td>
                                        <td>{data.avgSessionDuration}</td>
                                        <td>{data.avgTimeOnPage}</td>
                                        <td>{data.percentConversion}</td>
                                        <td className="text-end">
                                            <a href="#">
                                                <FiMoreVertical />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default TrafficReports
