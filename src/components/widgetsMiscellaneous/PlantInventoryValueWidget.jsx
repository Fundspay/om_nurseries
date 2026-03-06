import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'

const PlantInventoryValueWidget = () => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }
    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={"Plant Inventory Value"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body">
                    <div className="d-flex flex-column gap-4 mt-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-13 fw-semibold text-muted">Plants in Propagation</div>
                            <h4 className="fw-bold mb-0">₹18,00,000</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-13 fw-semibold text-muted">Plants Growing</div>
                            <h4 className="fw-bold mb-0 text-primary">₹72,00,000</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-13 fw-semibold text-muted">Plants Ready for Sale</div>
                            <h4 className="fw-bold mb-0 text-success">₹54,00,000</h4>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-14 fw-bold text-dark">Total Inventory Value:</div>
                        <h3 className="fw-bold mb-0 text-dark">₹1.44 Cr</h3>
                    </div>
                </div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default PlantInventoryValueWidget
