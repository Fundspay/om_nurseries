import React from 'react'
import LeadsOverviewChart from '@/components/widgetsCharts/LeadsOverviewChart'
import TeamProgress from '@/components/widgetsList/Progress'
import PaymentRecordChart from '@/components/widgetsCharts/PaymentRecordChart'
import AdminOverviewStatistics from '@/components/widgetsStatistics/AdminOverviewStatistics'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'
import PaymentStatistics from '@/components/widgetsStatistics/PaymentStatistics'
import TopSelling from '@/components/widgetsTables/TopSelling'
import Customers from '@/components/widgetsTables/Customers'
import GoalMiscellaneous from '@/components/widgetsMiscellaneous/GoalMiscellaneous'

const AdminDashboard = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <AdminOverviewStatistics />
                    <PaymentStatistics />
                    
                    <PaymentRecordChart />
                    {/* <TopSelling title={"Top Selling Plants"} /> */}
                    
                    <SalesMiscellaneous isFooterShow={true} dataList={projectsDataTwo} />
                    <LeadsOverviewChart chartHeight={315} />
                    <GoalMiscellaneous />
                    <Customers title={"New Nursery Clients"} />
                    {/* <TeamProgress title={"Farm Staff Progress"} footerShow={true} /> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard
