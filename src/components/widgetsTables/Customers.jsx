import React from 'react'
import CardHeader from '@/components/shared/CardHeader'
import CardLoader from '@/components/shared/CardLoader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import Pagination from '@/components/shared/Pagination'
import Dropdown from '@/components/shared/Dropdown'

const actionOptions = [
    { label: "View User" },
    { label: "Delete User" },
]
const customerData = [
    { name: 'Rajesh Patil', email: 'rajesh.patil@email.com', avatar: '/images/avatar/1.png', flag: '/images/flags/1x1/in.svg', country: 'Maharashtra', cardNumber: 'Retail', date: '21 Sep, 2023' },
    { name: 'Anamika Sharma', email: 'amit.sharma@email.com', avatar: '/images/avatar/2.png', flag: '/images/flags/1x1/in.svg', country: 'Gujarat', cardNumber: 'Wholesale', date: '25 Sep, 2023' },
    { name: 'Sunil Desai', email: 'sunil.desai@email.com', avatar: '/images/avatar/3.png', flag: '/images/flags/1x1/in.svg', country: 'Karnataka', cardNumber: 'Wholesale', date: '16 Sep, 2023' },
    { name: 'Priya Verma', email: 'priya.verma@email.com', avatar: '/images/avatar/4.png', flag: '/images/flags/1x1/in.svg', country: 'Delhi', cardNumber: 'Retail', date: '20 Sep, 2023' },
    { name: 'Ramesh Singh', email: 'ramesh.singh@email.com', avatar: '/images/avatar/5.png', flag: '/images/flags/1x1/in.svg', country: 'Punjab', cardNumber: 'Wholesale', date: '20 Sep, 2023' },
];

const Customers = ({ title }) => {
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-8">
            <div className={`card stretch stretch-full widget-tasks-content ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={title} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />

                <div className="card-body custom-card-action p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Region</th>
                                    <th>Segment</th>
                                    <th>Created Date</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerData.map((customer, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src={customer.avatar} className="img-fluid" alt="Customer" />
                                                </div>
                                                <div>
                                                    <a href="#">{customer.name}</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{customer.email}</td>
                                        <td>
                                            <div className="hstack gap-2">
                                                <div className="avatar-image avatar-sm">
                                                    <img src={customer.flag} className="img-fluid" alt="img" />
                                                </div>
                                                <span className="d-inline-block align-middle">{customer.country}</span>
                                            </div>
                                        </td>
                                        <td><span>{customer.cardNumber}</span></td>
                                        <td>{customer.date}</td>
                                        <td className="text-end">
                                            <Dropdown dropdownItems={actionOptions} triggerClass='avatar-md ms-auto' />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="card-footer"> <Pagination /></div>
                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default Customers
