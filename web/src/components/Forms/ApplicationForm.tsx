import React from 'react'

export default function ApplicationForm() {
    return (
        <div className="container-fluid " >
            <div className="row align-items-center h-100">
                <div className="col-lg-12">
                    <div className="card my-12">
                        <div className="card-header">
                            <strong >Application Form</strong>
                        </div>
                        <div className="card-body">
                            <h3>Personal</h3>
                            <section>
                                <div className="row">
                                    <div className="form-group mb-3 col-md-12">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3 col-md-12">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3 col-md-12">
                                        <label>Middle Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group mb-3 col-md-12">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3 col-md-12">
                                        <label>Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <button className="btn btn-outline-dark col-md-2 mr-2 mb-5">Prev</button>
                                    <button className="btn btn-outline-success col-md-2 mr-2 mb-5">Next</button>
                                </div>
                            </section>
                            <h3>Professional</h3>
                            <section>
                                <div className="form-group mb-3">
                                    <label>Educational Attainments</label>
                                    <select multiple className="form-control">
                                        <option>Phd</option>
                                        <option>Masters</option>
                                        <option>Bachelor</option>
                                        <option>Vocational</option>
                                        <option>Secondary</option>
                                        <option>Primary</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Eligibilities</label>
                                    <select multiple className="form-control">
                                        <option>Civil Service</option>
                                        <option>PRC</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Work Experiences</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Previous Employer</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Employer's Contact Information</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="row d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <button className="btn btn-outline-dark col-md-2 mr-2 mb-5">Prev</button>
                                    <button className="btn btn-outline-success col-md-2 mr-2 mb-5">Next</button>
                                </div>
                            </section>
                            <h3>Supporting Documents</h3>
                            <section>
                                <div className="card shadow mb-4">
                                    <div className="card-body">
                                        <form action="/file-upload" className="dropzone bg-light rounded-lg" id="tinydash-dropzone">
                                            <div className="dz-message needsclick">
                                                <div className="circle circle-lg bg-primary">
                                                    <i className="fe fe-upload fe-24 text-white"></i>
                                                </div>
                                                <h5 className="text-muted mt-4">Drop files here or click to upload</h5>
                                            </div>
                                        </form>
                                        <div className="dropzone-previews mt-3" id="file-previews"></div>
                                        <div className="d-none" id="uploadPreviewTemplate">
                                            <div className="card mt-1 mb-0 shadow-none border">
                                                <div className="p-2">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt="" />
                                                        </div>
                                                        <div className="col pl-0">
                                                            <a href="javascript:void(0);" className="text-muted font-weight-bold" data-dz-name></a>
                                                            <p className="mb-0" data-dz-size></p>
                                                        </div>
                                                        <div className="col-auto">
                                                            <a href="" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                <i className="dripicons-cross"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <button className="btn btn-outline-dark col-md-2 mr-2 mb-5">Prev</button>
                                    <button className="btn btn-outline-success col-md-4 mr-2 mb-5">Submit</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
