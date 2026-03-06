import React from 'react'
import AdminLeadsOverviewChart from '@/components/widgetsCharts/AdminLeadsOverviewChart'
import TeamProgress from '@/components/widgetsList/Progress'
import AdminPaymentRecordChart from '@/components/widgetsCharts/AdminPaymentRecordChart'
import AdminOverviewStatistics from '@/components/widgetsStatistics/AdminOverviewStatistics'
import AdminSalesMiscellaneous from '@/components/widgetsMiscellaneous/AdminSalesMiscellaneous'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'
import PaymentStatistics from '@/components/widgetsStatistics/PaymentStatistics'
import TopSelling from '@/components/widgetsTables/TopSelling'
import AdminGoalMiscellaneous from '@/components/widgetsMiscellaneous/AdminGoalMiscellaneous'
import AdminCustomers from '@/components/widgetsTables/AdminCustomers'
import PlantInventoryValueWidget from '@/components/widgetsMiscellaneous/PlantInventoryValueWidget'

const AdminDashboard = () => {
    return (
        <>
            <PageHeader folderName="Nursery Finance & Sales Dashboard" fileName="Nursery Finance & Sales Dashboard">
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <AdminOverviewStatistics />
                    <PaymentStatistics />

                    <AdminPaymentRecordChart />
                    {/* <TopSelling title={"Top Selling Plants"} /> */}

                    <AdminSalesMiscellaneous />
                    <AdminLeadsOverviewChart chartHeight={315} />
                    <AdminGoalMiscellaneous />
                    <AdminCustomers title={"Recent Nursery Customers"} />
                    <PlantInventoryValueWidget />
                    {/* <TeamProgress title={"Farm Staff Progress"} footerShow={true} /> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard
