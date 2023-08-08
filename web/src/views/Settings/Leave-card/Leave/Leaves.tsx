import React from 'react'
import {Alert, Fire, noData} from '../../../../components/Alerts/Alert'
import FullScreenModal from '../../../../components/Modals/FullScreenModal'
import {Auth} from '../../../../services/auth.service'
import ApplicationForLeaveSheet from './CSCForm/ApplicationForLeaveSheet'
import LeavesPlaceholders from './Placeholders/LeavesPlaceholders'

export default function Leaves() {
    const [modal, setModal] = React.useState(<div></div>)
    const [leaves, setleaves]: any = React.useState([])
    const [filteredData, setFilteredData]: any = React.useState([])
    const [fetched, setfetched]: any = React.useState(false)

    React.useEffect(() => {
        getLeaves()
    }, [])

    function getLeaves() {
        const api = new Auth('application-for-leave')
        api.fetch({}).then((data) => {
            setleaves(data)
            setFilteredData(data)
            setfetched(true)
        })
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(leaves)
            : setFilteredData(
                  leaves.filter(
                      (data: any) =>
                          data.user.Email.toLowerCase().includes(keyword) ||
                          data.user.Phone.toLowerCase().includes(keyword) ||
                          data.user.First.toLowerCase().includes(keyword) ||
                          data.user.Middle.toLowerCase().includes(keyword) ||
                          data.user.Last.toLowerCase().includes(keyword),
                  ),
              )
    }

    const renderData = () => {
        noData()
        if (leaves.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={7}>
                        No leave applications yet...
                    </td>
                </tr>
            )
        }
    }
    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Leaves</h2>
                <p className="mb-3 text-muted">
                    Displaying List of Leaves in descending order
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
                        <table className="table ">
                            <thead>
                                <tr role="row">
                                    <th className="text-success">
                                        <i className="fe fe-user"></i>
                                    </th>
                                    <th className="text-success">Name</th>
                                    <th className="text-success">Type</th>
                                    <th className="text-success">Days</th>
                                    <th className="text-success">With Pay</th>
                                    <th className="text-success">
                                        Commutation
                                    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <LeavesPlaceholders show={!fetched} />

                                {renderData()}

                                {filteredData.map(
                                    (leave: any, index: number) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="avatar avatar-sm">
                                                    <img
                                                        src={leave.user.Avatar}
                                                        alt="..."
                                                        className="avatar-img rounded-circle"
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {leave.user.Last}{' '}
                                                        {leave.user.First}{' '}
                                                        {leave.user.Middle}
                                                    </strong>
                                                </p>
                                                <p className="small mb-3">
                                                    <span
                                                        className="badge badge-success text-white p-1 br-2"
                                                        style={{
                                                            fontWeight: 900,
                                                        }}>
                                                        {
                                                            leave.employee
                                                                .Position
                                                        }
                                                    </span>
                                                </p>
                                            </td>
                                            <td>{leave.Spent}</td>
                                            <td>{leave.Days}</td>
                                            <td>
                                                <span className="text-success">
                                                    Yes
                                                </span>
                                            </td>
                                            <td>{leave.Comutation}</td>
                                            <td>
                                                <button
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
                                                            const id =
                                                                leave.employee_id
                                                            const api =
                                                                new Auth(
                                                                    'leave-card',
                                                                )
                                                            api.fetchOne(
                                                                id,
                                                            ).then((data) => {
                                                                setModal(
                                                                    <ApplicationForLeaveSheet
                                                                        data={
                                                                            leave
                                                                        }
                                                                        leaves={
                                                                            data[
                                                                                data.length -
                                                                                    1
                                                                            ]
                                                                        }
                                                                    />,
                                                                )
                                                            })
                                                        }}
                                                        data-toggle="modal"
                                                        data-target=".modal-full"
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        View Leave Details
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            Fire(
                                                                'Remove Leave Application?',
                                                                'Are you sure you want to remove this leave application?',
                                                                'warning',
                                                                () => {
                                                                    const api =
                                                                        new Auth(
                                                                            'application-for-leave',
                                                                        )
                                                                    api.delete(
                                                                        leave.id,
                                                                    )
                                                                        .then(
                                                                            (
                                                                                data,
                                                                            ) => {
                                                                                Alert(
                                                                                    'Application Removed',
                                                                                    'Leave application has been romved',
                                                                                    'success',
                                                                                )
                                                                                getLeaves()
                                                                            },
                                                                        )
                                                                        .catch(
                                                                            () => {
                                                                                Alert(
                                                                                    'Error!',
                                                                                    'Something went wrong. Try again',
                                                                                    'error',
                                                                                )
                                                                            },
                                                                        )
                                                                },
                                                            )
                                                        }}
                                                        role="butoon"
                                                        className="dropdown-item">
                                                        Remove Application
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <FullScreenModal>{modal}</FullScreenModal>
        </div>
    )
}
