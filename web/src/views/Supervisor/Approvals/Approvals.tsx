import React from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import FullScreenModal from '../../../components/Modals/FullScreenModal'
import Pagination from '../../../components/Table/Pagination'
import ApprovalsPlaceholder from './AddApprovalsPlaceholder'
import ViewApprovableDocument from './ViewApprovableDocument'

export default function Approvals() {
    const [document, setdocument]: any = React.useState([])

    React.useEffect(() => {
        setTimeout(() => {
            setdocument([1, 2, 3, 43, 45, 5, 76])
        }, 1000)
    }, [])

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Aprpovals</h2>
                <p className="mb-3 text-muted">
                    Displaying List of Approvals in descending order
                </p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <form className="form">
                                <div className="form-row">
                                    <div className="form-group col-auto">
                                        <label className="sr-only">
                                            Search
                                        </label>
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
                        <table className="table table-borderless table-hover">
                            <thead className="table-success">
                                <tr>
                                    <th></th>
                                    <th className="text-success">Document</th>
                                    <th className="text-success">
                                        Submitted By:
                                    </th>
                                    <th className="text-success">
                                        Assignatories:
                                    </th>
                                    <th className="text-success">Signed By:</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <ApprovalsPlaceholder
                                    show={document.length !== 0 ? false : true}
                                />
                                {document.map((_: any, i: number) => (
                                    <tr key={i}>
                                        <td>
                                            <i className="fe fe-folder text-success"></i>
                                        </td>
                                        <td>ICPR</td>
                                        <td>Jamel Eid Yassin</td>
                                        <td>
                                            <ul className="avatars-list">
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-1.jpg"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-4.jpg"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-3.jpg"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-7.jpg"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="avatars-list">
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-1.jpg"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-4.jpg"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        className="avatar avatar-md">
                                                        <img
                                                            alt="..."
                                                            className="avatar-img rounded-circle"
                                                            src="http://localhost:3000/assets/avatars/face-3.jpg"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-md btn-info dropdown-toggle more-horizontal"
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
                                                        Fire(
                                                            'Virtually Sign Document?',
                                                            'Are you sure you want to Sign this Document?',
                                                            'info',
                                                            () => {
                                                                Alert(
                                                                    'Document Succesfully Signed',
                                                                    '',
                                                                    'success',
                                                                )
                                                            },
                                                        )
                                                    }}
                                                    className="dropdown-item">
                                                    {' '}
                                                    Sign
                                                </button>
                                                <button
                                                    data-toggle="modal"
                                                    data-target=".modal-full"
                                                    className="dropdown-item">
                                                    {' '}
                                                    View Document
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        Fire(
                                                            'Reject Document?',
                                                            'Are you sure you want to Reject this Document?',
                                                            'warning',
                                                            () => {
                                                                Alert(
                                                                    'Document Succesfully Rejected',
                                                                    '',
                                                                    'success',
                                                                )
                                                            },
                                                        )
                                                    }}
                                                    className="dropdown-item">
                                                    {' '}
                                                    Reject
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                            Pages={() => {
                                let pages = []
                                for (let index in document) {
                                    pages.push(parseInt(index) + 1)
                                }
                                return pages
                            }}
                            callback={(callback: Function) => {
                                callback()
                            }}
                        />
                    </div>
                </div>
            </div>
            <FullScreenModal>
                <ViewApprovableDocument />
            </FullScreenModal>
        </div>
    )
}
