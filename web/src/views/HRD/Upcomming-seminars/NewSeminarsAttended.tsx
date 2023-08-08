import React from 'react'
import {Alert, Fire, noData} from '../../../components/Alerts/Alert'
import {toDate} from '../../../helpers'
import {Auth} from '../../../services/auth.service'
import LargeModal from './../../../components/Modals/LargeModal'
import ApplicantSupportingDocument from '../../Users/Applicants/ApplicantSupportingDocument'
import SeminarsAttendedPlaceholder from './SeminarsAttendedPlaceholder'

export default function NewSeminarsAttended() {
    const [modal, setmodal] = React.useState(<div></div>)
    const [dateFilter, setdateFilter] = React.useState('')
    const [years, setyears] = React.useState([])
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type
    const [fetched, setfetched]: any = React.useState(false)

    React.useEffect(() => {
        loopYears()
    }, [])

    const loopYears = () => {
        let yearArray: any = []
        for (let i = 2019; i < 2051; i++) {
            yearArray.push(i)
        }
        setyears(yearArray)
    }

    React.useEffect(() => {}, [dateFilter])

    const [seminars, setseminars]: any = React.useState([])

    React.useEffect(() => {
        getSeminars()
    }, [])

    function getSeminars() {
        const api = new Auth('seminars')
        api.fetch().then((data) => {
            noData()
            setseminars(data)
            setfetched(true)
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header d-flex">
                            <strong className="card-title">Seminars </strong>
                            <div className="ml-auto ">
                                <button
                                    className="btn btn-dark"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Filter
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    {years.map((year, index) => (
                                        <button
                                            key={index}
                                            className="dropdown-item">
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="card-body row">
                            <SeminarsAttendedPlaceholder show={!fetched} />
                            {seminars.map((seminar: any, index: any) => (
                                <React.Fragment key={index}>
                                    <div
                                        key={index}
                                        className="pb-3 timeline-item item-danger col-md-12  card-body">
                                        <div className="pl-5 w-100">
                                            <div className="d-flex w-100 row">
                                                <div className="col-md-1 d-flex aic jcc">
                                                    <div className="avatar avatar-lg">
                                                        <i className="fe fe-32 fe-airplay text-danger"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <strong>
                                                        @{seminar.Title}{' '}
                                                    </strong>
                                                    <br />
                                                    <small>
                                                        Conducting Agency:
                                                        {seminar.Agency}{' '}
                                                    </small>
                                                    <br />
                                                    <small>
                                                        Venue: {seminar.Venue}{' '}
                                                    </small>
                                                    <br />
                                                    <div className="d-flex">
                                                        <button
                                                            data-toggle="modal"
                                                            data-target=".large-modal"
                                                            onClick={() => {
                                                                setmodal(
                                                                    <ApplicantSupportingDocument
                                                                        data={
                                                                            seminar.attachments
                                                                        }
                                                                    />,
                                                                )
                                                            }}
                                                            className="btn btn-dark mt-1 btn-sm mr-2">
                                                            View Attachments
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                Fire(
                                                                    'Delete Seminar',
                                                                    'Are you sure you want to delete this seminar?',
                                                                    'info',
                                                                    () => {
                                                                        const api =
                                                                            new Auth(
                                                                                'seminars',
                                                                            )
                                                                        api.delete(
                                                                            seminar.id,
                                                                        )
                                                                            .then(
                                                                                () => {
                                                                                    Alert(
                                                                                        'Seminar Removed',
                                                                                        'Seminar has been successfully Removed',
                                                                                        'success',
                                                                                    )
                                                                                    getSeminars()
                                                                                },
                                                                            )
                                                                            .catch(
                                                                                () => {
                                                                                    Alert(
                                                                                        'Error',
                                                                                        'Something went wrong Try Again',
                                                                                        'error',
                                                                                    )
                                                                                },
                                                                            )
                                                                    },
                                                                )
                                                            }}
                                                            style={{
                                                                display:
                                                                    type ===
                                                                    'Admin'
                                                                        ? ''
                                                                        : 'none',
                                                            }}
                                                            className="btn btn-outline-danger mt-1 btn-sm">
                                                            Delete Seminar
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 text-right">
                                                    <small>
                                                        From:{' '}
                                                        <small className="text-danger">
                                                            {toDate(
                                                                seminar.From,
                                                            )}
                                                        </small>
                                                    </small>
                                                    <br />
                                                    <small>
                                                        To:{' '}
                                                        <small className="text-danger">
                                                            {toDate(seminar.To)}
                                                        </small>
                                                    </small>
                                                    <br />
                                                    <span className="badge badge-danger">
                                                        {seminar.Type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <LargeModal>{modal}</LargeModal>
        </div>
    )
}
