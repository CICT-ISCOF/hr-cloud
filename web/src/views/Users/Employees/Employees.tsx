import React, { useState } from 'react'
import Pagination from '../../../components/Table/Pagination'

export default function Employees() {
    const [ employees, setApplicants ] = useState( [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ] )
    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className="h4 mb-1">Employees</h2>
                <p className="mb-3 text-muted">Displaying List of Employees in descending order</p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <form className="form">
                                <div className="form-row">
                                    <div className="form-group col-auto mr-auto">
                                        <label className="my-1 mr-2 sr-only" >Show</label>
                                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelectPref1">
                                            <option value="">...</option>
                                            <option value="1">12</option>
                                            <option value="2" selected>32</option>
                                            <option value="3">64</option>
                                            <option value="3">128</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-auto">
                                        <label className="sr-only">Search</label>
                                        <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <table className="table table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th className="text-info"><i className="fe fe-user"></i></th>
                                    <th className="text-info">Name</th>
                                    <th className="text-info">Contact</th>
                                    <th className="text-info">Alignment</th>
                                    <th className="text-info text-center">Months of Services</th>
                                    <th className="text-info text-right">Hired Last</th>
                                    <th className="text-info text-right">Form Last Updated</th>
                                    <th className="text-info"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map( ( applicants: any, index: any ) => (
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-md">
                                                    <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-muted"><strong>Fuentevilla, Teddy D.</strong></p>
                                                <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}>as Developer</span></p>
                                            </td>

                                            <td>
                                                <p className="mb-0 text-primary ">@johnDoe@gmail.com</p>
                                                <small className="mb-0 text-muted">0928-624-1875</small>
                                            </td>

                                            <td>Vertical</td>

                                            <td className=" text-center"> 15</td>

                                            <td className="text-muted text-right">13/09/2020</td>

                                            <td className="text-danger text-right">13/09/2020</td>

                                            <td>
                                                <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted sr-only">Action</span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button role="butoon" className="dropdown-item" >View Profile</button>
                                                    <button role="butoon" className="dropdown-item" >Remove as Employee</button>
                                                </div>
                                            </td>
                                        </tr>

                                    ) )
                                }
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div >
    )
}
