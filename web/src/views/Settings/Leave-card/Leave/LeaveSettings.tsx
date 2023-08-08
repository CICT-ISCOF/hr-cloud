import React from 'react'
import {Alert, Fire, noData} from '../../../../components/Alerts/Alert'
import SlideModal from '../../../../components/Modals/SlideModal'
import {Auth} from '../../../../services/auth.service'
import AddLeave from './AddLeave'
import LeaveEditForm from './LeaveEditForm'
import LeavesPlaceholders from './Placeholders/LeavesPlaceholders'

export default function LeaveSettings() {
    const [add, setadd] = React.useState(false)
    const [fetched, setfetched]: any = React.useState(false)
    const [leave, setleave]: any = React.useState([])
    const [filteredData, setFilteredData] = React.useState([])

    React.useEffect(() => {
        getLeaves()
    }, [])

    const getLeaves = () => {
        const auth = new Auth('leave-settings')
        auth.fetch({}).then((data: any) => {
            setleave(data)
            setFilteredData(data)
            setfetched(true)
        })
    }

    const search = (e: any) => {
        const keyword = e.target.value
        keyword === ''
            ? setFilteredData(leave)
            : setFilteredData(
                  leave.filter((data: any) =>
                      data.Type.toLowerCase().includes(keyword),
                  ),
              )
    }

    const renderData = () => {
        noData()
        if (leave.length === 0) {
            return (
                <tr>
                    <td className="text-center text-muted" colSpan={4}>
                        No leave settings Yet...
                    </td>
                </tr>
            )
        }
    }

    const onRemove = () => {
        Fire(
            'Remove Leave?',
            'Are you sure you want to Remove Leave?',
            'info',
            () => {
                const auth = new Auth('leave-settings')
                auth.delete(leave.id)
                    .then(() => {
                        Alert('Leave Removed', '', 'success')
                        getLeaves()
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

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Leave Settings</h2>
                <p className="mb-3 text-muted">
                    In order to change leave settings remove the particular
                    leave settings first
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
                                <tr role="row">
                                    <th className="text-success"></th>
                                    <th className="text-success">Leave Type</th>
                                    <th className="text-success">
                                        Next Credit days
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => {
                                                setadd(
                                                    add == true ? false : true,
                                                )
                                            }}
                                            className="btn btn-success d-flex">
                                            <i className="fe fe-plus"></i>
                                            {add !== false
                                                ? 'Cancel'
                                                : 'Add Leave'}
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <AddLeave
                                    show={add}
                                    hide={() => {
                                        setadd(false)
                                    }}
                                    refresh={() => {
                                        getLeaves()
                                    }}
                                />

                                <LeavesPlaceholders show={!fetched} />

                                {renderData()}

                                {filteredData.map((leave: any, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="circle circle-sm bg-light">
                                                <i className="fe fe-tool text-muted"></i>
                                            </div>
                                            <span className="dot dot-md bg-success mr-1"></span>
                                        </td>
                                        <td className="text-center">
                                            {leave.Type} Leave
                                        </td>

                                        <td className="text-center">
                                            {leave.NextCreditdays} day(s)
                                        </td>

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
                                                    type="button"
                                                    onClick={onRemove}
                                                    className="dropdown-item">
                                                    Remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <SlideModal
                title="Edit Sick Leave"
                buttonName="Change"
                callback={() => {
                    Fire(
                        'Update Sick Leave?',
                        'Are you sure you want to Update Sick Leave?',
                        'info',
                        () => {
                            Alert('Sick Leave Updated ', '', 'success')
                        },
                    )
                }}>
                <LeaveEditForm />
            </SlideModal>
        </div>
    )
}
