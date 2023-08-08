import React from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import ShowAssignatoryPlaceholder from './ShowAssignatoryPlaceholder'

export default function ShowAssignatory() {
    const [assignatories, setassignatories]: any = React.useState([])

    React.useEffect(() => {
        setTimeout(() => {
            setassignatories([1, 2, 3, 4, 5, 6, 7])
        }, 1000)
    }, [])

    return (
        <div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>
                            <i className="fe fe-user"></i>
                        </th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ShowAssignatoryPlaceholder
                        show={assignatories.length !== 0 ? false : true}
                    />
                    {assignatories.map((_: any, i: number) => (
                        <tr key={i}>
                            <td>1</td>
                            <td>
                                <div className="avatar avatar-md">
                                    <img
                                        src="http://localhost:3000/assets/avatars/face-6.jpg"
                                        alt="..."
                                        className="avatar-img rounded-circle"
                                    />
                                </div>
                            </td>
                            <td>Jose S. Aricaya</td>
                            <td>Administrative Officer 4</td>
                            <td>MIS</td>
                            <td>
                                <button
                                    onClick={() => {
                                        Fire(
                                            'Remove Assignatory?',
                                            'Are you sure you want to Remove  Assignatory?',
                                            'warning',
                                            () => {
                                                Alert('SUCCESS', '', 'success')
                                            },
                                        )
                                    }}
                                    className="btn btn-outline-danger">
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
