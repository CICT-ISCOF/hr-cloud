import React from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import AddSeminar from './AddSeminar'
import SeminarPlaceholder from './SeminarPlaceholder'

export default function UpcomingSeminars() {
    const [wantsToAdd, setwantsToAdd] = React.useState(false)
    const [seminars, setseminars]: any = React.useState([])

    React.useEffect(() => {
        setTimeout(() => {
            setseminars([1, 2, 3, 4, 5, 6, 7, 8, 10])
        }, 1000)
    }, [])

    return (
        <div className="row justify-content-center">
            <div className=" card col-12 col-lg-10 col-xl-8">
                <div className="card-header d-flex">
                    <span className=" mr-1">
                        <i className="fe fe-mic  "></i>4
                    </span>
                    <strong className="card-title">Upcoming Seminars</strong>
                    <button
                        onClick={() => {
                            setwantsToAdd(wantsToAdd === false ? true : false)
                        }}
                        className="btn btn-outline-primary ml-auto d-flex">
                        <i className="fe fe-plus"></i>
                        {wantsToAdd !== false ? 'Cancel' : 'Add Seminar'}
                    </button>
                </div>
                <div className="row">
                    <AddSeminar
                        show={wantsToAdd}
                        hide={() => {
                            setwantsToAdd(false)
                        }}
                    />
                    <SeminarPlaceholder
                        show={seminars.length !== 0 ? false : true}
                    />

                    <div className="p-5">
                        {seminars.map((_: any, i: number) => (
                            <div
                                key={i}
                                style={{
                                    display:
                                        wantsToAdd !== false ? 'none' : 'block',
                                }}
                                className="row align-items-center card-body card ml-2 mr-2 mb-3 shadow">
                                <div className="col">
                                    <strong>
                                        IT Convention{' '}
                                        <span className="badge badge-danger">
                                            New
                                        </span>
                                    </strong>
                                    <div>
                                        Fusce dapibus, tellus ac cursus commodo,
                                        tortor mauris condimentum nibh, ut
                                        fermentum massa justo sit amet risus.
                                    </div>
                                    <small className="text-muted">
                                        2020-04-21
                                    </small>
                                    <div className="card mt-2 mb-3 bg-light w-50">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-md-2 text-center">
                                                <img
                                                    src="http://localhost:3000//assets/products/p1.jpg"
                                                    alt="..."
                                                    className="img-fluid rounded m-1"
                                                />
                                            </div>
                                            <div className="col-md-10">
                                                <div className="card-body py-0">
                                                    <p className="card-title mb-0">
                                                        New screenshot-12.png
                                                    </p>
                                                    <div className="card-text my-0 text-muted small">
                                                        <span className="mr-2">
                                                            1.2M
                                                        </span>
                                                        <span className="mr-2">
                                                            SVG
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="avatars-list mb-2">
                                        <li>
                                            <a
                                                href="#!"
                                                className="avatar avatar-sm">
                                                <img
                                                    alt="..."
                                                    className="avatar-img rounded-circle"
                                                    src="http://localhost:3000/assets/avatars/face-1.jpg"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                className="avatar avatar-sm">
                                                <img
                                                    alt="..."
                                                    className="avatar-img rounded-circle"
                                                    src="http://localhost:3000/assets/avatars/face-4.jpg"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#!"
                                                className="avatar avatar-sm">
                                                <img
                                                    alt="..."
                                                    className="avatar-img rounded-circle"
                                                    src="http://localhost:3000/assets/avatars/face-3.jpg"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-auto mt-4">
                                    <button
                                        onClick={() => {
                                            Fire(
                                                'Join Seminar?',
                                                'Are you sure you want to Joine Seminar?',
                                                'info',
                                                () => {
                                                    Alert(
                                                        'Seminar Joined',
                                                        '',
                                                        'success',
                                                    )
                                                },
                                            )
                                        }}
                                        className="btn bg-primary-lighter text-primary">
                                        Join
                                    </button>

                                    <button
                                        onClick={() => {
                                            Fire(
                                                'Remove Seminar?',
                                                'Are you sure you want to Remove Seminar?',
                                                'info',
                                                () => {
                                                    Alert(
                                                        'Seminar Removed',
                                                        '',
                                                        'success',
                                                    )
                                                },
                                            )
                                        }}
                                        className="btn bg-primary-danger text-danger">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
