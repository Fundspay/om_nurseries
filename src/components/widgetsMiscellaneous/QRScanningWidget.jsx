import React from 'react'

const QRScanningWidget = () => {
    return (
        <div className="col-xxl-4">
            <div className="card stretch stretch-full">
                <div className="card-header">
                    <h5 className="card-title mb-0">QR Scanning Activity</h5>
                </div>
                <div className="card-body">
                    <div className="d-flex flex-column gap-4 mt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-13 fw-semibold text-muted">QR Scans Today</div>
                            <h4 className="fw-bold mb-0">425</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-13 fw-semibold text-muted">Plants Updated</div>
                            <h4 className="fw-bold mb-0 text-success">312</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-13 fw-semibold text-muted">Plants Moved Blocks</div>
                            <h4 className="fw-bold mb-0 text-primary">41</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QRScanningWidget
