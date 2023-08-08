import React from 'react'
import {Route} from 'react-router'
import {RouteProps} from 'react-router-dom'
import Content from '../../components/Main/Content'
import Forms from '../../components/Modals/Forms'
import Notifications from '../../components/Notifications/Notifications'
import HomeNav from '../../headers/HomeNav'
import {useURL} from '../../hooks'
import Sidebar from '../../sidebar/Sidebar'
import AwardsAndRecognition from '../Awards&Recognition/AwardsAndRecognition'
import ListOfAwards from '../Awards&Recognition/ListOfAwards'
import AddScholarship from '../HRD/Scholarships/AddScholarship'
import Scholarship from '../HRD/Scholarships/Scholarship'
import AddSeminar from '../HRD/Upcomming-seminars/AddSeminar'
import NewSeminarsAttended from '../HRD/Upcomming-seminars/NewSeminarsAttended'
import SeminarsAttended from '../HRD/Upcomming-seminars/SeminarsAttended'
import UpcomingSeminars from '../HRD/Upcomming-seminars/UpcomingSeminars'
import PerformanceMgt from '../Performance/Performace-mgt/PerformanceMgt'
import AddVancancy from '../Recruitement/Add-vacancy/AddVancancy'
import Vacancies from '../Recruitement/Vacancies/Vacancies'
import ApplicationForLeave from '../Settings/Leave-card/Leave/ApplicationForLeave'
import LeaveBalances from '../Settings/Leave-card/Leave/LeaveBalances'
import Leaves from '../Settings/Leave-card/Leave/Leaves'
import LeaveSettings from '../Settings/Leave-card/Leave/LeaveSettings'
import MyLeaves from '../Settings/Leave-card/Leave/MyLeaves'
import Settings from '../Settings/Settings'
import EmploymentStatus from '../Settings/Status/EmploymentStatus'
import Supervisor from '../Supervisor/Supervisor'
import AddEmployee from '../Users/Add-Employee/AddEmployee'
import Applicants from '../Users/Applicants/Applicants'
import Employees from '../Users/Employees/Employees'

export default function Home() {
    const url = useURL()
    const HomeRoutes: RouteProps[] = [
        {
            path: url('/'),
            component: PerformanceMgt,
            exact: true,
        },
        {
            path: url('/home'),
            component: PerformanceMgt,
            exact: true,
        },
        {
            path: url('/applicants'),
            component: Applicants,
            exact: true,
        },
        {
            path: url('/employees'),
            component: Employees,
            exact: true,
        },
        {
            path: url('/employees-add'),
            component: AddEmployee,
        },
        {
            path: url('/vancancy-add'),
            component: AddVancancy,
        },
        {
            path: url('/vacancies'),
            component: Vacancies,
        },
        {
            path: url('/seminars'),
            component: UpcomingSeminars,
        },
        {
            path: url('/seminars-attended/:id'),
            component: SeminarsAttended,
        },
        {
            path: url('/leave'),
            component: Applicants,
        },
        {
            path: url('/awards'),
            component: AwardsAndRecognition,
        },
        {
            path: url('/awards-lists'),
            component: ListOfAwards,
        },
        {
            path: url('/settings'),
            component: Settings,
        },
        {
            path: url('/supervisors'),
            component: Supervisor,
        },
        {
            path: url('/leave-application'),
            component: ApplicationForLeave,
        },
        {
            path: url('/leave-balances'),
            component: LeaveBalances,
        },
        {
            path: url('/leaves'),
            component: Leaves,
        },
        {
            path: url('/leave-settings'),
            component: LeaveSettings,
        },
        {
            path: url('/employment-status/:id'),
            component: EmploymentStatus,
        },
        {
            path: url('/my-leaves/:id'),
            component: MyLeaves,
        },
        {
            path: url('/hrd/seminars-add'),
            component: AddSeminar,
        },
        {
            path: url('/hrd/seminars'),
            component: NewSeminarsAttended,
        },
        {
            path: url('/hrd/scholarships-add'),
            component: AddScholarship,
        },
        {
            path: url('/hrd/scholarships'),
            component: Scholarship,
        },
    ]

    return (
        <>
            <HomeNav />

            <Sidebar />

            <Content>
                {HomeRoutes.map((route, index) => (
                    <Route {...route} key={index} />
                ))}
            </Content>

            <Forms />

            <Notifications />
        </>
    )
}
