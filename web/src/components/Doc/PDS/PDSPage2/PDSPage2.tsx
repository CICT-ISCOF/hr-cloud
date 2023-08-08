import React from 'react'
import WorkExperience1 from './WorkExperience'
import * as interfaces from '../PDSInterface'

export default function PDSPage2(props: {
    Eligibilities: interfaces.Eligibilities[]
    WorkExperiences: interfaces.WorkExperiences[]
}) {
    const eligibiliies = props.Eligibilities
    const workExperiences = props.WorkExperiences

    function Blanks() {
        let element: any = []
        for (let i = 0; i < 7 - eligibiliies.length; i++) {
            element.push(
                <>
                    <div className="col-md-4 m-0 p-0 row m-0 p-0 d-flex aic jcc bt bg-white ">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-3"></p>
                    </div>

                    <div className="col-md-2 m-0 p-0 row m-0 p-0 d-flex aic jcc  bt bg-white bl 2">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-2"></p>
                    </div>

                    <div className="col-md-1 row m-0 p-0 d-flex aic jcc   bt bg-white bl br p-12">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-2"></p>
                    </div>

                    <div className="col-md-3 m-0 p-0 row m-0 p-0 d-flex aic jcc  bt bg-white  p-12">
                        <p className="m-0 mb-0 pb-0 text-center bold underlined p-2"></p>
                    </div>
                    <div
                        className="col-md-1  row m-0 p-0 d-flex aic jcc from-to   bt bg-white bl p-2"
                        style={{flex: '0 0 16.6%', maxWidth: '100%'}}>
                        <p className="m-0 mb-0 text-center fs-sm col-md-6  bold underlined"></p>
                        <p className="m-0 mb-0 text-center fs-sm col-md-6  bold underlined"></p>
                    </div>
                </>,
            )
        }
        return element
    }

    return (
        <div className="bg-white portrait-pds pds pt-5">
            <div className="PDSBorder">
                <div className="title ">
                    <i className="text-white main">
                        IV. CIVIL SERVICE ELIGIBILITY
                    </i>
                </div>
                <div className="box row sub-title m-0 p-0 m-0 p-0">
                    <div className="col-md-4 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc  nbl nbr nbb nbt">
                        <p className="m-0 mb-0 pb-0 text-center">
                            &nbsp; 27. CAREER SERVICE/ RA 1080 (BOARD/ BAR)
                            UNDER <br /> SPECIAL LAWS/ CES/ CSEE <br /> BARANGAY
                            ELIGIBILITY / DRIVER'S LICENSE{' '}
                        </p>
                    </div>
                    <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt">
                        <p className="m-0 mb-0 pb-0 text-center ">
                            &nbsp;RATING(If Applicable)
                        </p>
                    </div>

                    <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc  nbb nbt">
                        <p className="m-0 mb-0 pb-0 text-center ">
                            &nbsp;DATE OF EXAMINATION / CONFERMENT
                        </p>
                    </div>

                    <div className="col-md-3 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbl nbt">
                        <p className="m-0 mb-0 pb-0 text-center ">
                            &nbsp;PLACE OF EXAMINATION
                        </p>
                    </div>
                    <div
                        className="col-md-1  row sub-title m-0 p-0 d-flex aic jcc from-to  nbb nbr nbt"
                        style={{flex: '0 0 16.6%', maxWidth: '100%'}}>
                        <div className="row p-0 m-0">
                            <p className="m-0 mb-0 text-center  col-md-12 border-bottom p-1 nbt ">
                                &nbsp;LICENSE (if applicable)
                            </p>
                            <p className="m-0 mb-0 text-center  col-md-6 box nbl nbr nbb nbt">
                                &nbsp;NUMBER
                            </p>
                            <p className="m-0 mb-0 text-center  col-md-6 box nbr nbb nbt">
                                &nbsp;Date of Validity
                            </p>
                        </div>
                    </div>

                    {eligibiliies.map(
                        (eligibility: interfaces.Eligibilities, index: any) => (
                            <React.Fragment key={index}>
                                <div className="col-md-4 m-0 p-0 row m-0 p-0 d-flex aic jcc bt bg-white ">
                                    <p className="m-0 mb-0 pb-0 text-center bold underlined p-2">
                                        {eligibility.Title}
                                    </p>
                                </div>

                                <div className="col-md-2 m-0 p-0 row m-0 p-0 d-flex aic jcc  bt bg-white bl 2">
                                    <p className="m-0 mb-0 pb-0 text-center bold underlined p-2">
                                        {eligibility.Rating}
                                    </p>
                                </div>

                                <div className="col-md-1 row m-0 p-0 d-flex aic jcc   bt bg-white bl br p-12">
                                    <p className="m-0 mb-0 pb-0 text-center bold underlined p-2">
                                        {eligibility.Date}
                                    </p>
                                </div>

                                <div className="col-md-3 m-0 p-0 row m-0 p-0 d-flex aic jcc  bt bg-white  p-12">
                                    <p className="m-0 mb-0 pb-0 text-center bold underlined p-2">
                                        {eligibility.Place}
                                    </p>
                                </div>
                                <div
                                    className="col-md-1  row m-0 p-0 d-flex aic jcc from-to   bt bg-white bl p-2"
                                    style={{
                                        flex: '0 0 16.6%',
                                        maxWidth: '100%',
                                    }}>
                                    <p className="m-0 mb-0 text-center  col-md-6  bold underlined">
                                        {eligibility.License}
                                    </p>
                                    <p className="m-0 mb-0 text-center  col-md-6  bold underlined">
                                        {eligibility.Validity}
                                    </p>
                                </div>
                            </React.Fragment>
                        ),
                    )}
                    {Blanks()}

                    <div
                        className="col-md-12 m-0 p-0 row border-bottom  cl sub-title nbl  nbr nbb aic jcc d-flex"
                        style={{flex: 1, maxWidth: '100%'}}>
                        <p className="m-0 p-2 text-center d-flex aic jcc">
                            <i className="text-center text-danger bold">
                                (Continue on separate sheet if necessary)
                            </i>
                        </p>
                    </div>
                </div>
                <WorkExperience1 WorkExperiences={workExperiences} />
            </div>
        </div>
    )
}
