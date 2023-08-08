import React from 'react'
import './ServiceRecord.css'
import '../Doc.css'
import {WorkExperiences} from '../PDS/PDSInterface'
import {Auth} from '../../../services/auth.service'
import {useParams} from 'react-router-dom'
import {toDate} from '../../../helpers'
import FullScreenModal from '../../Modals/FullScreenModal'
import PrinatableServiceRecord from './PrinatableServiceRecord'

export default function ServiceRecord() {
    const [workExperiences, setworkExperiences] = React.useState<
        WorkExperiences[]
    >([])
    let {id}: any = useParams()

    const [modal, setmodal] = React.useState(<></>)

    React.useEffect(() => {
        getWorkExperiences()
    }, [])

    function getWorkExperiences() {
        const api = new Auth('work-experience')
        api.fetchOne(id).then((data) => {
            setworkExperiences(data)
            console.log(data)
        })
    }

    return (
        <div>
            <br />
            <h2 className=" mb-1">Service Records</h2>
            <p className="mb-3 text-muted">
                This records comes from the Personal Data Sheet
            </p>
            <div className="card shadow">
                <div className="card-body">
                    <div className="toolbar">
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
                            <div className="form-group col-auto ml-auto">
                                <button
                                    style={{
                                        display:
                                            workExperiences.length === 0
                                                ? 'none'
                                                : '',
                                    }}
                                    onClick={() => {
                                        setmodal(
                                            <PrinatableServiceRecord
                                                data={workExperiences}
                                            />,
                                        )
                                    }}
                                    data-toggle="modal"
                                    data-target=".modal-full"
                                    className="btn btn-sm btn-dark">
                                    View Service Record
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped ">
                        <thead className="table-light ">
                            <tr>
                                <th className="text-center text-info">From </th>
                                <th className="text-center text-info">To </th>
                                <th className="text-center text-info">
                                    Designation
                                </th>
                                <th className="text-center text-info">
                                    Status
                                </th>
                                <th className="text-center text-info">
                                    Salary
                                </th>
                                <th className="text-center text-info">
                                    Station/Place of Assignment
                                </th>
                                <th className="text-center text-info">
                                    Branch
                                </th>
                                <th className="text-center text-info">
                                    w/out pay
                                </th>
                                <th className="text-center text-info">
                                    Division{' '}
                                </th>
                                <th className="text-center text-info"> Date</th>
                                <th className="text-center text-info ">
                                    Cause
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {workExperiences.map(
                                (
                                    workExperience: WorkExperiences,
                                    index: number,
                                ) => (
                                    <tr key={index}>
                                        <td>{toDate(workExperience.From)}</td>
                                        <td>{toDate(workExperience.To)}</td>
                                        <td>{workExperience.Position}</td>
                                        <td>{workExperience.Appointment}</td>
                                        <td>{workExperience.Salary}</td>
                                        <td>N/A</td>
                                        <td>{workExperience.Government}</td>
                                        <td>N/A</td>
                                        <td>
                                            {toDate(workExperience.created_at)}
                                        </td>
                                        <td>N/A</td>
                                        <td>N/A</td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <FullScreenModal>{modal}</FullScreenModal>
        </div>
    )
}
