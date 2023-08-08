import {toArray} from '../../../helpers'
import WorkExperience from '../../Settings/Overview/WorkExperience'

export default function ApplicantINformation(props: any) {
    return (
        <div>
            <div className="row mt-5 align-items-center">
                <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                        <img
                            style={{cursor: 'pointer'}}
                            src={props.data.user.Avatar}
                            alt="..."
                            className="avatar-img rounded-circle"
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">
                                {' '}
                                {`${props.data.user.Last} ${props.data.user.First} ${props.data.user.Middle}`}
                            </h4>
                            <h3 className="text-muted  mt-0">
                                Office of Management Information System
                            </h3>
                            <h2 className=" mb-3">
                                <span
                                    className="badge bg-dark-lighter text-dark p-1 br-2"
                                    style={{fontWeight: 900}}>
                                    Applied as{' '}
                                    {props.data.Position || 'Developer'}
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                            <p className="text-muted">{props.data.Degrees}</p>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">
                                {props.data.user.Email}
                            </p>
                            <p className="small mb-0 text-success">
                                {props.data.Alignment}
                            </p>
                            <p className="small mb-0 text-muted">
                                {props.data.user.Phone}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 row">
                    <WorkExperience
                        data={props.data.WorkExperience.split(',')}
                    />
                </div>
                <div
                    className="col-md-12 row"
                    style={{justifyContent: 'center'}}>
                    <div className="row align-items-center w-100 mb-4 shadow">
                        <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-bookmark fe-24 text-success"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">
                                    Educational Attainments
                                </h3>
                            </a>
                            <ul>
                                {toArray(props.data.EducationalAttainments).map(
                                    (EducationalAttainments, index) => (
                                        <li key={index}>
                                            {EducationalAttainments}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-12 row"
                    style={{justifyContent: 'center'}}>
                    <div className="row align-items-center w-100 mb-4 shadow">
                        <div className="col-3 text-center">
                            <span className="circle circle-lg bg-light">
                                <i className="fe fe-check-square fe-24 text-warning"></i>
                            </span>
                        </div>
                        <div className="col">
                            <a href="#">
                                <h3 className="h5 mt-4 mb-1">Eligibilities</h3>
                            </a>
                            <ul>
                                {toArray(props.data.Eligibilities).map(
                                    (Eligibilities, index) => (
                                        <li key={index}>{Eligibilities}</li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
