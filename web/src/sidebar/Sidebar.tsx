import {adminNav, applicantNav, employeeNav} from './Navs'
import SidebarComponent from './SidebarComponent'

export default function Sidebar() {
    const userData: any = localStorage.getItem('user')

    const SideBar = () => {
        const type = JSON.parse(userData).Type
        const id = JSON.parse(userData).id

        if (type === 'Admin') {
            return <SidebarComponent navs={adminNav(id)} />
        }

        if (type === 'Employee') {
            return <SidebarComponent navs={employeeNav(id)} />
        }

        return <SidebarComponent navs={applicantNav(id)} />
    }

    return (
        <aside
            className="sidebar-left border-right bg-white shadow"
            id="leftSidebar"
            data-simplebar>
            <a
                className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3"
                data-toggle="toggle">
                <i className="fe fe-x">
                    <span className="sr-only"></span>
                </i>
            </a>
            <nav className="vertnav navbar navbar-light">
                <div className="w-100 mb-4 d-flex">
                    <a className="navbar-brand mx-auto mt-2 flex-fill text-center">
                        <img
                            src=" http://localhost:3000/assets/logos/iscof.png"
                            height="30px"
                            alt="..."
                        />
                    </a>
                </div>
                <ul
                    style={{marginTop: '-1rem'}}
                    className="navbar-nav flex-fill w-100 mb-0">
                    {SideBar()}
                </ul>
            </nav>
        </aside>
    )
}
