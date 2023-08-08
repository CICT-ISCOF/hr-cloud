import {toArray} from 'lodash'
import {toDate} from '../../../helpers'
import SupportingDocuments from '../Overview/SupportingDocuments'

export default function ApplicantProfile(props: {applicant: any}) {
    const {applicant} = props

    const renderUI = () => {
        if (applicant.Schedule === null || applicant.Schedule === '') {
            return (
                <div className="text-center mr-5">
                    <p className="m-0 text-muted">Application Status</p>
                    <h1 className="text-warning m-0">Pending</h1>
                </div>
            )
        }
        return (
            <div className=" card-body text-center mr-5">
                <p className="m-0 text-dark">You are shortlisted!</p>
                <p className="m-0 text-muted">
                    Invitation for an interview on:
                </p>
                <h1 className="text-success m-0">
                    {toDate(applicant.Schedule)}
                </h1>
            </div>
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 card p-5">
                <div className="card card-body">
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-3 text-center mb-5">
                            <div className="avatar avatar-xl">
                                <img
                                    style={{cursor: 'pointer'}}
                                    src={applicant.user.Avatar}
                                    alt="..."
                                    className="avatar-img   rounded-circle "
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <h4 className="mb-1">
                                        {applicant.user.Last},{' '}
                                        {applicant.user.First}{' '}
                                        {applicant.user.Middle}
                                    </h4>
                                    <p className="small mb-3">
                                        <span
                                            className="badge bg-primary-lighter text-primary p-1 br-2"
                                            style={{fontWeight: 900}}>
                                            {applicant.Position}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <p className="small mb-0 text-muted">
                                        {applicant.user.Email}
                                    </p>
                                    <p className="small mb-0 text-muted">
                                        {applicant.Alignment}
                                    </p>
                                    <p className="small mb-0 text-muted">
                                        +{applicant.user.Phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex m-0 mt-2">{renderUI()}</div>
                    </div>
                    <div className="row my-4">
                        <div className=" col-md-12 m-0 p-0 row">
                            <div className="row d-flex   card-body col-md-12 ">
                                <div className=" text-center p-3 mr-5 ml-5">
                                    <span className="circle circle-lg bg-light">
                                        <i className="fe fe-bookmark fe-32 text-success"></i>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="h5 mt-4 mb-1">
                                        Educational Attainments
                                    </h3>
                                    <ul>
                                        {toArray(
                                            applicant.EducationalAttainments,
                                        ).map((data: any, index: any) => (
                                            <li
                                                style={{wordBreak: 'break-all'}}
                                                key={index}>
                                                {data}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="row d-flex  card-body col-md-12 ">
                                <div className=" text-center p-3 mr-5 ml-5">
                                    <span className="circle circle-lg bg-light">
                                        <i className="fe fe-coffee fe-32 text-danger"></i>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="h5 mt-4 mb-1">
                                        Work Experiences
                                    </h3>
                                    <ul>
                                        {toArray(applicant.WorkExperience).map(
                                            (data: any, index: any) => (
                                                <li key={index}>{data}</li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="row d-flex  card-body col-md-12 ">
                                <div className=" text-center p-3 mr-5 ml-5">
                                    <span className="circle circle-lg bg-light">
                                        <i className="fe fe-check-square fe-32 text-warning"></i>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="h5 mt-4 mb-1">
                                        Eligibilities
                                    </h3>
                                    <ul>
                                        {toArray(applicant.Eligibilities).map(
                                            (data: any, index: any) => (
                                                <li key={index}>{data}</li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <SupportingDocuments
                                data={applicant.supporting_documents}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
