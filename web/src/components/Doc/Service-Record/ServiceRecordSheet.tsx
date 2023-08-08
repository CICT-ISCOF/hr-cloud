import React from 'react'
import {toDate} from '../../../helpers'
import {WorkExperiences} from '../PDS/PDSTypes'

export default function ServiceRecordSheet(props: {data: any[]}) {
    const {data} = props

    return (
        <div className="bg-white portrait docs service-record service-record-table w-100 ">
            <h6 className="text-center text-dark bold h4">SERVICE RECORD</h6>
            <p className="text-center text-dark">
                (To be accomplished by Employer)
            </p>
            <p>Form No. CR-2</p>
            <div className="row">
                <p className="col-md-1">Name: </p>
                <p className="bold underlined text-center text-dark col-md-2">
                    {data[0].user.Last}
                </p>
                <p className="bold underlined text-center text-dark col-md-2">
                    {data[0].user.First}
                </p>
                <p className="bold underlined text-center text-dark col-md-1">
                    {data[0].user.Middle.charAt(0)}
                </p>
                <p className="bold underlined text-center text-dark col-md-6">
                    ____________________________
                </p>
            </div>
            <div className="row" style={{marginTop: '-15px'}}>
                <div className="col-md-1"></div>
                <p className="col-md-2  text-center text-dark">(Surname)</p>
                <p className="col-md-2  text-center text-dark">(Given Name)</p>
                <p className="col-md-1  text-center text-dark">(MI)</p>
                <p className="col-md-6  text-center text-dark">
                    (if married woman, give also maiden name){' '}
                </p>
            </div>
            <div className="row">
                <div className="col-md-1">Birth:</div>
                <h5 className="bold underlined text-center text-dark col-md-2">
                    {data[0].employee.PlaceOfBirth}
                </h5>
                <h5 className="bold underlined text-center text-dark col-md-4">
                    ____________________________
                </h5>
                <h5 className="col-md-5 text-left text-dark ">
                    (Date herein should be checked from birth <br /> or
                    baptisimal certificate or other related documents)
                </h5>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <p className="col-md-2 text-center text-dark">(Date)</p>
                <p className="col-md-4 text-center text-dark">(Place Name)</p>
            </div>
            <br />
            <p className="text-left" style={{textIndent: '3.4rem'}}>
                This is to certify that the employee hereinabove actually
                rendered services in the office shown by the services below,
                each line of which is supported by appointment and other papers
                actually issued by this office has been approved by the
                authorities.
            </p>

            <table className="table">
                <thead>
                    <tr>
                        <td colSpan={14}>
                            =================================================================================================================
                        </td>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th colSpan={2} className="text-center text-dark">
                            SERVICES <br />
                            (Inclusive Dates)
                        </th>
                        <th colSpan={3} className="text-center text-dark">
                            RECORD OF APPOINTMENT
                        </th>
                        <th className="text-center text-dark">
                            OFFICE/ENTITY
                            <br /> DIVISION
                        </th>
                        <th className="text-center text-dark"></th>
                        <th className="text-center text-dark">L/A</th>
                        <th colSpan={2} className="text-center text-dark">
                            SEPARATION
                        </th>
                        <th className="text-center text-dark">Remarks</th>
                    </tr>
                    <tr>
                        <th className="text-center text-dark">From</th>
                        <th className="text-center text-dark">To</th>
                        <th className="text-center text-dark">Designation</th>
                        <th className="text-center text-dark">
                            Status <br />
                            (1)
                        </th>
                        <th className="text-center text-dark">
                            Salary
                            <br />
                            (2)
                        </th>
                        <th className="text-center text-dark">
                            Station/Place <br />
                            of Assignment
                        </th>
                        <th className="text-center text-dark">
                            Branch <br />
                            (3)
                        </th>
                        <th className="text-center text-dark">
                            w/out <br /> pay
                        </th>
                        <th className="text-center text-dark">Division </th>
                        <th className="text-center text-dark">
                            (4) <br /> Date
                        </th>
                        <th colSpan={2} className="text-center text-dark ">
                            Cause
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td colSpan={14}>
                            =================================================================================================================
                        </td>
                    </tr>
                    {data.map((workExperience: any, index: number) => (
                        <React.Fragment key={index}>
                            <tr className="table">
                                <td className="text-center">
                                    {toDate(workExperience.From)}
                                </td>
                                <td className="text-center">
                                    {toDate(workExperience.To)}
                                </td>
                                <td className="text-center">
                                    {workExperience.Position}
                                </td>
                                <td className="text-center">
                                    {workExperience.Appointment}
                                </td>
                                <td className="text-center">
                                    {workExperience.Salary}
                                </td>
                                <td className="text-center">
                                    {workExperience.Department}
                                </td>
                                <td className="text-center">
                                    {workExperience.Government}
                                </td>
                                <td className="text-center">N/A</td>
                                <td className="text-center">_________</td>
                                <td className="text-center">
                                    {toDate(workExperience.created_at)}
                                </td>
                                <td className="text-center">_________</td>
                            </tr>
                        </React.Fragment>
                    ))}
                    <tr>
                        <td colSpan={14}>
                            =================================================================================================================
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="text-center ">
                Issued in compliance with the Executive Order No. 54, dated
                August 10, 1954 and in accordance with Circular No. 58, dated
                August 10, 1954 of the System.
            </p>
            <br />
            <div className="row">
                <div className="col-md-6">
                    <br /> <br /> <br />
                    <br /> <br /> <br />
                    <br />
                    <br />
                    <p className="text-center bold underlined">
                        Jamel Eid Yassin
                    </p>
                    <div className="text-center " style={{marginTop: '-17px'}}>
                        Date
                    </div>
                </div>
                <div className="col-md-6">
                    <br />
                    <br />
                    <div>
                        <i>CERTIFIED CORRECT:</i>
                    </div>
                    <br /> <br /> <br />
                    <div>
                        <i>Chief of Head of Office</i>
                    </div>
                    <br /> <br /> <br />
                    <div>Designation</div>
                </div>
            </div>
        </div>
    )
}
