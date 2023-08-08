import React from 'react'
import {useHistory} from 'react-router-dom'

export default function WorkExperience(props: any) {
    const history = useHistory()

    const user: any = localStorage.getItem('user')
    const id = JSON.parse(user).id
    return (
        <div className="col-md-12">
            <div className="card mb-4 shadow">
                <div className="card-body my-n3">
                    <div className="row align-items-center">
                        <div className="col-1 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-coffee fe-24 text-danger"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">
                                    Work Experiences
                                </h3>
                            </a>
                            <p className="text-danger">
                                {props.data.length === 0
                                    ? 'No Personal Data Sheet Found'
                                    : ''}
                            </p>
                            <ul>
                                {props.data.map((data: any, index: any) => (
                                    <React.Fragment key={index}>
                                        <li key={index}>
                                            {data.Position || data}
                                        </li>
                                    </React.Fragment>
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
