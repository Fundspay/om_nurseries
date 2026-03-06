import React from 'react'
import LeadsOverviewChart from '@/components/widgetsCharts/LeadsOverviewChart'
import LatestLeads from '@/components/widgetsTables/LatestLeads'
import Schedule from '@/components/widgetsList/Schedule'
import Project from '@/components/widgetsList/Project'
import TeamProgress from '@/components/widgetsList/Progress'
import PaymentRecordChart from '@/components/widgetsCharts/PaymentRecordChart'
import SiteOverviewStatistics from '@/components/widgetsStatistics/SiteOverviewStatistics'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import SalesMiscellaneous from '@/components/widgetsMiscellaneous/SalesMiscellaneous'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'
import { projectsDataTwo } from '@/utils/fackData/projectsDataTwo'

const Home = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <SiteOverviewStatistics />
                    <PaymentRecordChart />
                    
                    <TasksOverviewChart />
                    <SalesMiscellaneous isFooterShow={true} dataList={projectsDataTwo} />
                    
                    <LatestLeads title={"Latest Leads"} />
                    <Schedule title={"Upcoming Schedule"} />
                    <Project cardYSpaceClass="hrozintioal-card" borderShow={true} title="Work Status" />
                    <TeamProgress title={"Team Progress"} footerShow={true} />
                    <LeadsOverviewChart chartHeight={315} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home