import React from 'react'
import {useHistory} from 'react-router-dom'

export default function EducationalAttainments(props: any) {
    const history = useHistory()

    const user: any = localStorage.getItem('user')
    const id = JSON.parse(user).id
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow">
                <div className="card-body my-n3">
                    <div className="row align-items-center">
                        <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-bookmark fe-24 text-success"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">
                                    Educational Attainments
                                </h3>
                            </a>
                            <p className="text-danger">
                                {props.data.length === 0
                                    ? 'No Personal Data Sheet Found'
                                    : ''}
                            </p>

                            <ul>
                                {props.data.map((data: any, index: any) => (
                                    <li key={index}>{data.Degree || data}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="card-footer"
                    style={{display: id == props.id ? 'block' : 'none'}}>
                    <a
                        role="button"
                        onClick={() => {
                            history.push('/home/settings/profile/' + props.id)
                        }}
                        className="d-flex justify-content-between text-muted">
                        <span>Account Settings</span>
                        <i className="fe fe-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
