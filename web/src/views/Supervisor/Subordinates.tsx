import React from 'react'
import {Alert, Fire} from '../../components/Alerts/Alert'
import {Auth} from '../../services/auth.service'
import SubordinatesPlaceholder from './SubordinatesPlaceholder'

export default function Subordinates(props: any) {
    const [applicants, setApplicants]: any = React.useState([])

    return (
        <div className="pt-2">
            <h2 className="pt-2 text-center">Subordinates</h2>
            <br />
            <div className="card card-body">
                <SubordinatesPlaceholder
                    show={props.data.subordinates.length !== 0 ? false : true}
                />
                {props.data.subordinates.map((employee: any, index: any) => (
                    <div
                        key={index}
                        className="p-3 w-100 d-flex shadow"
                        style={{alignItems: 'center'}}>
                        <div className="avatar avatar-lg mr-5 ">
                            <img
                                src={employee.Avatar}
                                alt="..."
                                className="avatar-img rounded-circle"
                            />
                        </div>
                        <div className="w-100">
                            <h4 className="m-0 mt-3">
                                {employee.First} {employee.Middle}{' '}
                                {employee.Last}
                            </h4>
                            <p className=" mb-3">
                                <span
                                    className="badge badge-info p-1 br-2"
                                    style={{fontWeight: 900}}>
                                    {' '}
                                    Developer
                                </span>
                            </p>
                        </div>
                        <div style={{alignSelf: 'flex-end'}}>
                            <button
                                onClick={() => {
                                    Fire(
                                        `Remove Subordinate?`,
                                        `Are you sure you want to Remove ${employee.First} ${employee.Middle} ${employee.Last} as employee on ${props.data.Department} ?`,
                                        'warning',
                                        () => {
                                            const api = new Auth('subordinates')
                                            api.delete(props.data.id)
                                                .then(() => {
                                                    Alert(
                                                        'Subordinate Removed',
                                                        'Please reload page to monitor changes',
                                                        'success',
                                                    )
                                                })
                                                .catch(() => {
                                                    Alert(
                                                        'Error',
                                                        'Something went wrong. Try again',
                                                        'error',
                                                    )
                                                })
                                        },
                                    )
                                }}
                                className="btn btn-danger btn-sm">
                                Remove{' '}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
