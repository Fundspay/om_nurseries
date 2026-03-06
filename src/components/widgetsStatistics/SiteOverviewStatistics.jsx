import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import getIcon from '@/utils/getIcon';
import { fetchLiveCRMData, crmStatisticsData } from '@/utils/fackData/crmStatisticsData';

const SiteOverviewStatistics = () => {
    const [crmData, setCrmData] = useState(crmStatisticsData); // Start with fallback data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLiveCRMData();
                if (data && data.length > 0) {
                    setCrmData(data);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error loading the Data');
            } finally {
                setLoading(false); // ALWAYS set loading to false
            }
        };

        fetchData();
    }, []);

    // Always show data after 1 second max (safety timeout)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="col-12">
                <div className="text-center p-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading statistics...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            {error && (
                <div className="col-12 mb-2">
                    <div className="alert alert-info alert-sm py-1 px-2">
                        <small>{error}</small>
                    </div>
                </div>
            )}

            {crmData.map(({ id, completed_number, title, total_number, icon }) => (
                <div key={id} className="col-xxl-3 col-md-6">
                    <div className="card stretch stretch-full short-info-card">
                        <div className="card-body">
                            <div className="d-flex align-items-start justify-content-between mb-4">
                                <div className="d-flex gap-4 align-items-center">
                                    <div className="avatar-text avatar-lg bg-gray-200 icon">
                                        {React.cloneElement(getIcon(icon), { size: "16" })}
                                    </div>
                                    <div>
                                        <div className="fs-4 fw-bold text-dark">
                                            <span className="counter">{completed_number || total_number || ''}</span>
                                        </div>
                                        <h3 className="fs-13 fw-semibold text-truncate-1-line">{title}</h3>
                                    </div>
                                </div>
                                <Link to="#" className="lh-1">
                                    <FiMoreVertical className='fs-16' />
                                </Link>
                            </div>
                            <div className="pt-4">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="fs-12 fw-medium text-muted text-truncate-1-line">
                                        {completed_number ? `Email: ${completed_number}` : `Mobile: ${total_number}`}
                                    </span>
                                    <div className="w-100 text-end">
                                        {/* Empty space */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default SiteOverviewStatistics;