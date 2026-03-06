import React from 'react'
import LatestLeads from '@/components/widgetsTables/LatestLeads'
import Schedule from '@/components/widgetsList/Schedule'
import PaymentRecordChart from '@/components/widgetsCharts/PaymentRecordChart'
import Project from '@/components/widgetsList/Project'
import TeamProgress from '@/components/widgetsList/Progress'
import ManagerOverviewStatistics from '@/components/widgetsStatistics/ManagerOverviewStatistics'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'
import ProjectsTwo from '@/components/widgetsTables/ProjectsTwo'
import Tasks from '@/components/widgetsTables/Tasks'
import TrafficReports from '@/components/widgetsTables/TrafficReports'

const ManagerDashboard = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <ManagerOverviewStatistics />
                    <TasksOverviewChart />
                    <PaymentRecordChart />
                    <TrafficReports title={"Block Inspection Overview"} />
                    {/* <ProjectsTwo title={"Farm Zones Projects"} className="col-xxl-6" /> */}
                    <Tasks title={"Assigned Nursery Tasks"} />
                    <LatestLeads title={"Recent Nursery Activities"} />
                    <TeamProgress title={"Field Staff Productivity"} footerShow={true} />
                    <Schedule title={"Daily Nursery Schedule"} />
                    <Project cardYSpaceClass="hrozintioal-card" borderShow={true} title="Unit / Block Operation Status" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ManagerDashboard
