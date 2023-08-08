import React, {useRef} from 'react'
import FullScreenModal from '../../Modals/FullScreenModal'
import ICPRPage1 from './ICPRPage1'
import ICPRPage2 from './ICPRPage2'
import PrintComponents from 'react-print-components'
import {Auth} from '../../../services/auth.service'
import {toDate} from '../../../helpers'
import {Alert, Fire} from '../../Alerts/Alert'
import {useParams} from 'react-router-dom'

export default function ICPRTable(props: any) {
    const ICPR1 = useRef()
    const ICPR2 = useRef()

    const userData: any = localStorage.getItem('user')
    let {id}: any = useParams()

    const [icprs, seticprs] = React.useState([])

    const [modal, setModal] = React.useState(<div></div>)

    React.useEffect(() => {
        getICPRS()
    }, [])

    function getICPRS() {
        const api = new Auth('ratings/' + id)
        api.fetch({}).then((data: any) => {
            seticprs(data)
        })
    }

    return (
        <div>
            <br />
            <h2 className=" mb-1">IPCR</h2>
            <p className="mb-3 text-muted">
                OFFICE PERFORMANCE EVALUATION AND REVIEW (IPCR)
            </p>
            <div className="card shadow">
                <div className="card-body">
                    <div className="toolbar">
                        <form className="form">
                            <div className="form-row">
                                <div className="form-group col-auto">
                                    <label className="sr-only">Search</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="search1"
                                        value=""
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <table className="table table-striped ">
                        <thead className="table-light">
                            <tr>
                                <th className="text-info text-center">
                                    <i className="fe fe-file"></i>
                                </th>
                                <th className="text-info text-center">Date</th>
                                <th className="text-info text-center">
                                    Reviewed by
                                </th>
                                <th className="text-info text-center">
                                    Approved by
                                </th>
                                <th className="text-info text-center">
                                    Discussed with
                                </th>
                                <th className="text-info text-center">
                                    Assessed by
                                </th>
                                <th className="text-warning text-center">
                                    Final Rating by
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {icprs.map((data: any, index: any) => (
                                <tr key={index}>
                                    <td className="text-center"></td>
                                    <td className="text-center">
                                        {toDate(data.created_at)}
                                    </td>
                                    <td className="text-center">
                                        {data.ReviewedBy}
                                    </td>
                                    <td className="text-center">
                                        {data.ApprovedBy}
                                    </td>
                                    <td className="text-center">
                                        {data.DiscussedBy}
                                    </td>
                                    <td className="text-center">
                                        {data.AssessedBy}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-sm  dropdown-toggle more-horizontal"
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
                                                    setModal(
                                                        <Component
                                                            data={data}
                                                        />,
                                                    )
                                                }}
                                                data-toggle="modal"
                                                data-target=".modal-full"
                                                className="dropdown-item">
                                                View Document
                                            </button>
                                            <button
                                                onClick={() => [
                                                    Fire(
                                                        'Delete this ICPR?',
                                                        'Are you sure you want to delete this ICPR?',
                                                        'warning',
                                                        () => {
                                                            const api =
                                                                new Auth(
                                                                    'ratings',
                                                                )
                                                            api.delete(data.id)
                                                                .then(() => {
                                                                    Alert(
                                                                        'Data has been removed',
                                                                        'ICPR has been removed successfully',
                                                                        'success',
                                                                    )
                                                                    getICPRS()
                                                                })
                                                                .catch(() => {
                                                                    Alert(
                                                                        'Error',
                                                                        'Something went wrong',
                                                                        'error',
                                                                    )
                                                                })
                                                        },
                                                    ),
                                                ]}
                                                className="dropdown-item">
                                                Delete Document
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <FullScreenModal>{modal}</FullScreenModal>
        </div>
    )
    function Component(props: any) {
        return (
            <div>
                <PrintComponents
                    trigger={
                        <button className="btn btn-dark mb-3">
                            <i className=" fe fe-printer"></i>
                            <span>&nbsp;Print IPCR</span>
                        </button>
                    }>
                    <ICPRPage1 data={props.data} />

                    <ICPRPage2 data={props.data} />
                </PrintComponents>
                <ICPRPage1 data={props.data} />
                <ICPRPage2 data={props.data} />
            </div>
        )
    }
}
