import React from 'react'
import {toDate} from '../../../../helpers'
import * as interfaces from '../PDSInterface'

export default function WorkExperience(props: {
    WorkExperiences: interfaces.WorkExperiences[]
}) {
    function Blanks() {
        let element: any = []
        for (let i = 0; i < 28 - props.WorkExperiences.length; i++) {
            element.push(
                <>
                    <div className="col-md-2 m-0 p-0 row m-0 p-0 d-flex nbr aic jcc bt nbl   bg-white">
                        <div className="row p-0 m-0 w-100">
                            <p className="m-0 mb-0 text-center  col-md-6 bold underlined p-c"></p>
                            <p className="m-0 mb-0 text-center  col-md-6 bold underlined p-c"></p>
                        </div>
                    </div>
                    <div className="col-md-2 m-0 p-0 rowm-0 p-0 d-flex aic nbr jcc bt bl   p-ci bg-white">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-3"></p>
                    </div>

                    <div className="col-md-3 row m-0 p-0 d-flex aic br jcc bt  p-ci bg-white bl">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-c"></p>
                    </div>
                    <div className="col-md-1 m-0 p-0 row m-0 p-0 d-flex aic nbr nbl jcc bt   p-ci bg-white">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-c"></p>
                    </div>
                    <div className="col-md-1 row m-0 p-0 d-flex aic from-to br jcc bt bl   p-ci bg-white">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-c"></p>
                    </div>
                    <div className="col-md-1 m-0 p-0 row m-0 p-0 d-flex aicnbr br nbl jcc bt   p-ci bg-white">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-c"></p>
                    </div>
                    <div
                        className="col-md-1 m-0 p-0 row m-0 p-0 d-flex aic jcc nbr nbb nbl  border-bottom  p-ci bt bg-white"
                        style={{flex: '0 0 12.3%', maxWidth: '100%'}}>
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-c"></p>
                    </div>
                </>,
            )
        }
        return element
    }

    return (
        <div>
            <div className="title ">
                <i className="text-white main">
                    V. WORK EXPERIENCE <br />
                    <span className="text-white" style={{fontSize: '.8em'}}>
                        (Include private employment. Start from your recent
                        work) Description of duties should be indicated in the
                        attached Work Experience sheet.
                    </span>
                </i>
            </div>

            <div className="box row sub-title m-0 p-0 m-0 p-0">
                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbl nbr nbb nbt">
                    <div className="row p-0 m-0">
                        <p className="m-0 mb-0 text-center  col-md-12 border-bottom p-c nbt mt-3 ">
                            26.&nbsp;INCLUSIVE DATES <br /> (mm/dd/yyyy)
                        </p>
                        <p className="m-0 mb-0 text-center  col-md-6 box nbl nbr nbb nbt">
                            &nbsp;From
                        </p>
                        <p className="m-0 mb-0 text-center  col-md-6 box nbr nbb nbt">
                            &nbsp;To
                        </p>
                    </div>
                </div>
                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center ">
                        &nbsp;POSITION TITLE <br /> (Write in full/Do not
                        abbreviate)
                    </p>
                </div>

                <div className="col-md-3 row sub-title m-0 p-0 d-flex aic jcc nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center ">
                        &nbsp;DEPARTMENT / AGENCY / OFFICE / COMPANY <br />
                        (Write in full/Do not abbreviate)
                    </p>
                </div>
                <div className="col-md-1 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbl nbt">
                    <p className="m-0 mb-0 pb-0 text-center ">
                        &nbsp;MONTHLY <br /> SALARY
                    </p>
                </div>
                <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc from-to nbb nbr nbt br">
                    <p className="m-0 mb-0 pb-0 text-center ">
                        &nbsp;SALARY/ JOB/
                        <br /> PAY GRADE (if
                        <br /> applicable)&
                        <br /> STEP (Format "00-0")/
                        <br /> INCREMENT
                    </p>
                </div>
                <div className="col-md-1 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbl nbt br">
                    <p className="m-0 mb-0 pb-0 text-center ">
                        &nbsp;STATUS OF APPOINTMENT
                    </p>
                </div>
                <div className="col-md-1 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbl nbt">
                    <p className="m-0 mb-0 pb-0 text-center ">
                        &nbsp;GOV'T SERVICE <br />
                        (Y/ N)
                    </p>
                </div>

                {props.WorkExperiences.map(
                    (
                        workExperience: interfaces.WorkExperiences,
                        index: number,
                    ) => (
                        <React.Fragment key={index}>
                            <div className="col-md-2 m-0 p-0 row m-0 p-0 d-flex nbr aic jcc bt nbl   bg-white">
                                <div className="row p-0 m-0 w-100">
                                    <p className="m-0 mb-0 text-center  col-md-6 bold underlined p-c">
                                        {toDate(workExperience.From)}
                                    </p>
                                    <p className="m-0 mb-0 text-center  col-md-6 bold underlined p-c">
                                        {toDate(workExperience.To)}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 m-0 p-0 rowm-0 p-0 d-flex aic nbr jcc bt bl   p-ci bg-white">
                                <p className="m-0 mb-0 pb-0 text-center bold underlined p-c">
                                    {workExperience.Position}
                                </p>
                            </div>

                            <div className="col-md-3 row m-0 p-0 d-flex aic br jcc bt  p-ci bg-white bl">
                                <p className="m-0 mb-0 pb-0 text-center bold underlined p-c">
                                    {workExperience.Department}
                                </p>
                            </div>
                            <div className="col-md-1 m-0 p-0 row m-0 p-0 d-flex aic nbr nbl jcc bt   p-ci bg-white">
                                <p className="m-0 mb-0 pb-0 text-center bold underlined p-c">
                                    {workExperience.Salary}
                                </p>
                            </div>
                            <div className="col-md-1 row m-0 p-0 d-flex aic from-to br jcc bt bl   p-ci bg-white">
                                <p className="m-0 mb-0 pb-0 text-center bold underlined p-c">
                                    N/A
                                </p>
                            </div>
                            <div className="col-md-1 m-0 p-0 row m-0 p-0 d-flex aicnbr br nbl jcc bt   p-ci bg-white">
                                <p className="m-0 mb-0 pb-0 text-center bold underlined p-c">
                                    {workExperience.Appointment}
                                </p>
                            </div>
                            <div
                                className="col-md-1 m-0 p-0 row m-0 p-0 d-flex aic jcc nbr nbb nbl  border-bottom  p-ci bt bg-white"
                                style={{flex: '0 0 12.3%', maxWidth: '100%'}}>
                                <p className="m-0 mb-0 pb-0 text-center bold underlined p-c">
                                    {workExperience.Government}
                                </p>
                            </div>
                        </React.Fragment>
                    ),
                )}
                {Blanks()}
            </div>
        </div>
    )
}
