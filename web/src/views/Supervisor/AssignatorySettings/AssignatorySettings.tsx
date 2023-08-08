import React from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import LargeModal from '../../../components/Modals/LargeModal'
import SlideModal from '../../../components/Modals/SlideModal'
import Pagination from '../../../components/Table/Pagination'
import AddAssignatory from './AddAssignatory'
import AssignatoryPlaceholder from './AssignatoryPlaceholder'
import ShowAssignatory from './ShowAssignatory'

export default function AssignatorySettings() {
    const [assignatories, setassignatories]: any = React.useState([])

    React.useEffect(() => {
        setTimeout(() => {
            setassignatories([1, 2, 3, 4, 5, 6, 7])
        }, 1000)
    }, [])

    const onPageChange = () => {
        let pages = []
        for (let index in assignatories) {
            pages.push(parseInt(index) + 1)
        }
        return pages
    }

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Assignatories</h2>
                <p className="mb-3 text-muted">
                    Assign assignatories to each document here
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
                        <table className="table text-center">
                            <thead className="table-dark table-striped">
                                <tr>
                                    <th></th>
                                    <th className="text-primary">Document</th>
                                    <th className="text-primary">
                                        Assignatories
                                    </th>
                                    <th>
                                        <button
                                            data-toggle="modal"
                                            data-target=".slide-modal"
                                            className="btn btn-outline-primary">
                                            Add Approvals
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <AssignatoryPlaceholder
                                    show={
                                        assignatories.length !== 0
                                            ? false
                                            : true
                                    }
                                />
                                {assignatories.map((_: any, i: number) => (
                                    <tr key={i}>
                                        <td>
                                            <i className="fe fe-folder text-primary"></i>
                                        </td>

                                        <td>ICPR</td>

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
                                            <button
                                                className="btn btn-md btn-dark dropdown-toggle more-horizontal"
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
                                                    data-toggle="modal"
                                                    data-target=".large-modal"
                                                    role="butoon"
                                                    className="dropdown-item">
                                                    Show Assignatories
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Pagination
                            Pages={onPageChange}
                            callback={(callback: Function) => callback()}
                        />
                    </div>
                </div>
            </div>
            <LargeModal>
                <ShowAssignatory />
            </LargeModal>

            <SlideModal
                title="Add Assignatory"
                buttonName="Add"
                callback={() => {
                    Fire(
                        'Add Assignatory?',
                        'Are you sure you want to Add an Assignatory?',
                        'info',
                        () => {
                            Alert('SUCCESS', '', 'success')
                        },
                    )
                }}>
                <AddAssignatory />
            </SlideModal>
        </div>
    )
}
