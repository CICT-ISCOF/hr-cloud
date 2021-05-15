import React from 'react'

export default function PDSWorkExperience() {
    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-4">
                WORK EXPERIENCE
                 <br />
                <small className="text-muted" style={{ fontSize: '.8rem' }}> (INCLUDE PRIVATE EMPLOYMENT. START FROM YOUR RECENT WORK) DESCRIPTION OF DUTIES SHOULD BE INDICATED IN THE ATTACHED WORK EXPERIENCE SHEET.</small>
            </h5>
            <div className="col-md-6 mb-4 p-0 m-0">
                <button className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Work Experience</span>
                </button>
            </div>
            <h6 className="bold mt-4 mb-4 text-info">WORK EXPERIENCE 1</h6>
            <div className="row mb-4">
                <div className="col-md-2 mb-4">
                    <label htmlFor="">FROM</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-2 mb-4">
                    <label htmlFor="">TO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-8 mb-4">
                    <label htmlFor="">POSITION TITLE (Write in full / Do not abbreviate)</label>
                    <input type="text" className="form-control" />
                </div>  <div className="col-md-12 mb-4">
                    <label htmlFor="">DEPARTMENT / AGENCY / OFFICE / COMPANY (Write in full / Do not abbreviate)</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-12 mb-4">
                    <label htmlFor="">SALARY/ JOB/ PAY GRADE (if  applicable) & STEP (Format "00-0") / INCREMENT</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor=""> STATUS OF APPOINTMENT</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">GOV'T SERVICE(Y/ N)</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="mt-2 mb-4 d-flex aij jcc">
                <button className="btn btn-outline-primary">Update Work Experience</button>
            </div>
        </div>
    )
}
