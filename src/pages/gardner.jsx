import React from 'react'
import Schedule from '@/components/widgetsList/Schedule'
import Project from '@/components/widgetsList/Project'
import GardnerOverviewStatistics from '@/components/widgetsStatistics/GardnerOverviewStatistics'
import TasksOverviewChart from '@/components/widgetsCharts/TasksOverviewChart'
import RfidScanList from '@/components/widgetsList/RfidScanList'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'

const GardnerDashboard = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <GardnerOverviewStatistics />
                    <TasksOverviewChart />
                    <Schedule title={"My Upcoming Schedule"} />
                    <Project cardYSpaceClass="hrozintioal-card" borderShow={true} title="My Plant Batches" />
                    <RfidScanList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GardnerDashboard
