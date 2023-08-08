import React from 'react'
import * as interfaces from '../PDSInterface'

export default function LeftGrid(props: {
    References: interfaces.References[]
    Idenification: interfaces.Identification
}) {
    function Blanks() {
        let element: any = []
        for (let i = 0; i < 3 - props.References.length; i++) {
            element.push(
                <>
                    <div className="col-md-6 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                        <p className="m-0 mb-0 pb-0 text-center   bold underlined"></p>
                    </div>
                    <div className="col-md-4 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                        <p className="m-0 mb-0 pb-0 text-center   bold underlined"></p>
                    </div>
                    <div className="col-md-2 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white br">
                        <p className="m-0 mb-0 pb-0 text-center   bold underlined"></p>
                    </div>
                </>,
            )
        }
        return element
    }
    return (
        <div className="row p-0 m-0  pb-1">
            <div className="col-md-12 sub-title pb-1 pt-1">
                41. REFERENCES &nbsp;
                <span>
                    <i className="text-danger bold">
                        (Person not related by consanguinity or affinity to
                        applicant /appointee)
                    </i>
                </span>
            </div>
            <div className="col-md-6 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt p-1">
                <p className="m-0 mb-0 pb-0 text-center  ">NAME</p>
            </div>
            <div className="col-md-4 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt p-1">
                <p className="m-0 mb-0 pb-0 text-center  ">ADDRESS</p>
            </div>
            <div className="col-md-2 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt br p-1">
                <p className="m-0 mb-0 pb-0 text-center  ">TEL. NO.</p>
            </div>
            {props.References.map((reference: interfaces.References, i) => (
                <div key={i} className="col-md-12 row p-0 m-0">
                    <div className="col-md-6 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                        <p className="m-0 mb-0 pb-0 text-center   bold underlined">
                            {reference.Name}
                        </p>
                    </div>
                    <div className="col-md-4 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                        <p className="m-0 mb-0 pb-0 text-center   bold underlined">
                            {reference.Address}
                        </p>
                    </div>
                    <div className="col-md-2 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white br">
                        <p className="m-0 mb-0 pb-0 text-center   bold underlined">
                            {reference.TelNumber}
                        </p>
                    </div>
                </div>
            ))}
            <Blanks />
            <div className="col-md-12 sub-title pb-1 pt-1 mb-3">
                42. I declare under oath that I have personally accomplished
                this Personal Data Sheet which is a true, correct and complete
                statement pursuant to the provisions of pertinent laws, rules
                and regulations of the Republic of the Philippines. I authorize
                the agency head/authorized representative to verify/validate the
                contents stated herein.I agree that any misrepresentation made
                in this document and its attachments shall cause the filing of
                administrative/criminal case/s against me.
            </div>
            <div className="col-md-12 m-0 p-0 pb-1 pl-2 row pb-3">
                <div className="col-md-6 db  p-0 m-0">
                    <div className="col-md-12 sub-title p-0 m-0 nbr nbt nbl">
                        Government Issued ID (i.e.Passport, GSIS, SSS, PRC,
                        Driver's License, etc)PLEASE INDICATE ID Number and Date
                        of Issuance
                    </div>
                    <div className="col-md-12  p-1 m-0">
                        Government Issued ID:{' '}
                        <span className="bold underlined">
                            {props.Idenification.GovtID}
                        </span>
                    </div>
                    <div className="col-md-12 p-1 m-0 bt">
                        ID/License/Passport No.:{' '}
                        <span className="bold underlined">
                            {props.Idenification.Passport}
                        </span>
                    </div>
                    <div className="col-md-12 p-1 m-0 bt">
                        Date/Place of Issuance:{' '}
                        <span className="bold underlined">
                            {props.Idenification.Date}
                        </span>
                    </div>
                </div>
                <div
                    className="col-md-5 ml-4 db m-0 p-0  text-center"
                    style={{transform: 'translate(21px)'}}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="col-md-12 sub-title p-0 m-0  box text-center nbl nbr ">
                        Signature (Sign inside the box)
                    </div>
                    <span className="bold underlined text-center">N/A</span>
                    <div className="col-md-12 sub-title p-0 m-0  box text-center nbl nbr nbb">
                        Date Accomplished
                    </div>
                </div>
            </div>
        </div>
    )
}
