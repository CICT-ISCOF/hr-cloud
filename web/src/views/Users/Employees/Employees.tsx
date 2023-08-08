import {useState, useEffect} from 'react'
import {Alert, Fire, noData} from '../../../components/Alerts/Alert'
import EmployeesPlaceholder from './EmployeesPlaceholder'
import SlideModal from '../../../components/Modals/SlideModal'
import ChangeSupervisor from './ChangeSupervisor'
import {useHistory} from 'react-router-dom'
import LargeModal from '../../../components/Modals/LargeModal'
import EmployeeICPR from './EmployeeICPR'
import {Auth} from '../../../services/auth.service'
import {toDate} from '../../../helpers'

export default function Employees() {
    const history = useHistory()

    const [currentSupervisor, setCurrentSupervisor]: any = useState({})
    const [currentEmployee, setCurrentEmployee]: any = useState({})
    const [filteredData, setFilteredData] = useState([])
    const [fetched, setFetched]: any = useState(false)
    const [employees, setEmployees] = useState([])
    const user: any = localStorage.getItem('user')
    const id = JSON.parse(user).id
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type

    useEffect(() => {
        getEmployees()
    }, [])

    useEffect(() => {
        renderData()
    }, [employees])

    async function getEmployees() {
        const auth = new Auth('employees')
        auth.fetch({}).then((data: any) => {
            setEmployees(data)
            setFilteredData(data)
            setFetched(true)
        })
    }

    const rateButton = (employee: any) => (
        <button
            data-toggle="modal"
            data-target=".large-modal"
            onClick={() => {
                setCurrentSupervisor(employee.supervisors)
                setCurrentEmployee(employee)
            }}
            className="btn btn-sm btn-outline-info ml-2">
            Rate
        </button>
    )

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(employees)
            : setFilteredData(
                  employees.filter(
                      (data: any) =>
                          data.user.Email.toLowerCase().includes(keyword) ||
                          data.user.Phone.toLowerCase().includes(keyword) ||
                          data.user.First.toLowerCase().includes(keyword) ||
                          data.user.Middle.toLowerCase().includes(keyword) ||
                          data.user.Last.toLowerCase().includes(keyword),
                  ),
              )
    }

    const onSuperVisorChanged = () => {
        let supervisor = $('#supervisor').val()
        Fire(
            'Change Supervisor?',
            `Are you sure you want to change this employee's supervisor`,
            'info',
            () => {
                const api = new Auth('subordinates')
                api.update(currentEmployee.user_id, {
                    SupervisorID: supervisor,
                })
                    .then(() => {
                        Alert(
                            'Supervisor Changed',
                            'Supervisor has been changed successfully',
                            'success',
                        )
                        getEmployees()
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Something went wrong. Try Again',
                            'error',
                        )
                    })
            },
        )
    }

    const onEmployeeRemoved = (employee: any) => {
        Fire(
            'Remove Employee?',
            `Are you sure you want to remove ${employee.user.First} as an employee?`,
            'info',
            () => {
                const api = new Auth('employees')

                api.delete(employee.user.id)
                    .then(() => {
                        Alert(
                            'Employee has been removed',
                            `${employee.user.First} has been removed as an employee`,
                            'success',
                        )
                        getEmployees()
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            `Something went wrong. Try again`,
                            'error',
                        )
                    })
            },
        )
    }

    const renderData = () => {
        noData()
        if (employees.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={7}>
                        No Employee Data Yet...
                    </td>
                </tr>
            )
        }
    }

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Employees</h2>
                <p className="mb-3 text-muted">
                    Displaying List of Employees in descending order
                </p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <div className="form-row">
                                <div className="form-group col-auto">
                                    <label className="sr-only">Search</label>
                                    <input
                                        onChange={(e) => {
                                            search(e)
                                        }}
                                        type="text"
                                        className="form-control"
                                        id="search1"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-info">
                                        <i className="fe fe-user"></i>
                                    </th>
                                    <th className="text-info">Name</th>
                                    <th className="text-info">Contact</th>
                                    <th className="text-info">Alignment</th>
                                    <th className="text-info text-center">
                                        Months of Services
                                    </th>
                                    <th className="text-info ">
                                        First Day of Service
                                    </th>
                                    <th className="text-center text-dark">
                                        <i className="fe fe-user"></i>
                                    </th>
                                    <th className="text-dark">
                                        Immediate Supervisor
                                    </th>
                                    <th className="text-info"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <EmployeesPlaceholder show={!fetched} />

                                {renderData()}

                                {filteredData.map(
                                    (employee: any, index: any) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src={
                                                            employee.user.Avatar
                                                        }
                                                        alt="..."
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {employee.user.Last}{' '}
                                                        {employee.user.First}{' '}
                                                        {employee.user.Middle}
                                                    </strong>
                                                </p>
                                                <p className="h5 mb-3">
                                                    <span
                                                        className="badge badge-success text-white p-1 br-2"
                                                        style={{
                                                            fontWeight: 900,
                                                        }}>
                                                        {employee.Position}
                                                    </span>
                                                </p>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-info ">
                                                    @{employee.user.Email}
                                                </p>
                                                <small className="mb-0 text-muted">
                                                    +{employee.user.Phone}
                                                </small>
                                            </td>

                                            <td>
                                                <span
                                                    className={`${
                                                        employee.Alignment ===
                                                        'Vertical'
                                                            ? 'text-success'
                                                            : 'text-warning'
                                                    }`}>
                                                    {employee.Alignment}
                                                </span>
                                            </td>

                                            <td className=" text-center">
                                                {employee.MonthOfService}{' '}
                                                <span className="text-muted">
                                                    months
                                                </span>{' '}
                                            </td>

                                            <td className="text-muted">
                                                {toDate(employee.FirstDay)}
                                            </td>

                                            <td className="text-center">
                                                <div className="avatar avatar-md">
                                                    <img
                                                        src={
                                                            employee.supervisors
                                                                .Avatar
                                                        }
                                                        alt="..."
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {employee.supervisors
                                                            .id === id
                                                            ? 'You'
                                                            : employee
                                                                  .supervisors
                                                                  .First +
                                                              ' ' +
                                                              employee
                                                                  .supervisors
                                                                  .Middle +
                                                              ' ' +
                                                              employee
                                                                  .supervisors
                                                                  .Last}
                                                    </strong>
                                                </p>
                                            </td>

                                            <td>
                                                <button
                                                    style={{
                                                        display:
                                                            type === 'Admin'
                                                                ? ''
                                                                : 'none',
                                                    }}
                                                    className="btn fe fe-24 fe-chevron-down"
                                                    type="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <span className="text-muted sr-only">
                                                        Action
                                                    </span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button
                                                        onClick={() => {
                                                            setCurrentSupervisor(
                                                                employee.supervisors,
                                                            )
                                                            setCurrentEmployee(
                                                                employee,
                                                            )
                                                        }}
                                                        data-toggle="modal"
                                                        data-target=".slide-modal"
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Add/Change Supervisor
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/settings/' +
                                                                    employee.user_id,
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        View Profile
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={
                                                            onEmployeeRemoved
                                                        }
                                                        className="dropdown-item">
                                                        Remove as Employee
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/leaves',
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Leave History
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/leaves',
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Leave Balances
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/seminars-attended/' +
                                                                    employee.user_id,
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Seminars
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/settings/personal-data-sheet/' +
                                                                    employee.user_id,
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        PDS
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/settings/ipcr/' +
                                                                    employee.user_id,
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        ICPR
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/settings/service-record/' +
                                                                    employee.user_id,
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Service Record
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            history.push(
                                                                '/home/settings/leave-card/' +
                                                                    employee.user_id,
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Leave Card
                                                    </button>
                                                </div>
                                                {employee.supervisors.id === id
                                                    ? rateButton(employee)
                                                    : ''}
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <SlideModal
                title="Change Supervisor"
                buttonName="Change"
                callback={onSuperVisorChanged}>
                <ChangeSupervisor
                    supervisor={currentSupervisor}
                    employees={employees}
                />
            </SlideModal>

            <LargeModal>
                {currentEmployee.id === undefined ? (
                    ''
                ) : (
                    <EmployeeICPR data={currentEmployee} />
                )}
            </LargeModal>
        </div>
    )
}
