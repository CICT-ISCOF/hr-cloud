import React from 'react'

export default function Vacancies() {
    return (
        <div className="col-md-3">
            <div className="card shadow mb-4">
                <div className="card-body text-center">
                    <div className="avatar avatar-lg mt-4">
                        <span className="avatar avatar-sm mt-2">
                            <img src="./assets/avatars/face-1.jpg" alt="..." className="avatar-img rounded-circle" />
                        </span>
                    </div>
                    <div className="card-text my-2">
                        <strong className="card-title my-0">Developer</strong>
                        <p className="small  mb-0">Office of Management Information System</p>
                        <p className="small"><span className="badge badge-danger">Experience: 5 years</span></p>
                    </div>
                </div>
                <div className="card-footer" style={{ display: 'flex', }}>
                    <div className="row align-items-center justify-content-between align-self-right ml-auto m-2">
                        <button data-toggle="modal" data-target=".modal-full" className="btn btn-dark mr-1">Apply Now</button>
                        <button data-toggle="modal" data-target=".modal-full" className="btn btn-outline-dark mr-1">View Qualifications</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
