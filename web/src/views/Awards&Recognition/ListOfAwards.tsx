import React from 'react'
import {Alert, Fire, noData} from '../../components/Alerts/Alert'
import {toDate} from '../../helpers'
import {Auth} from '../../services/auth.service'
import AwardListPlaceholder from './AwardListPlaceholder'

export default function ListOfAwards() {
    const [awards, setawards]: any = React.useState([])
    const [fetched, setfetched]: any = React.useState(false)
    const userData: any = localStorage.getItem('user')
    const type = JSON.parse(userData).Type

    React.useEffect(() => {
        getAwards()
    }, [])

    const getAwards = () => {
        const api = new Auth('awards')
        api.fetch({}).then((data: any) => {
            setfetched(true)
            setawards(data)
        })
    }

    const renderData = () => {
        noData()
        if (awards.length === 0) {
            return (
                <div className="text-center text-muted w-100">
                    No posted awards yet...
                </div>
            )
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="col-md-12 mb-4">
                    <div className="card timeline">
                        <div className="card-header">
                            <strong className="card-title">Awards</strong>
                        </div>
                        <div className="card-body row">
                            <AwardListPlaceholder show={!fetched} />

                            {renderData()}

                            {awards.map((award: any, index: any) => (
                                <React.Fragment key={index}>
                                    <div className="card w-100">
                                        <div className="col-md-12  card-body">
                                            <strong>
                                                {' '}
                                                <span>
                                                    <i className="fe fe-award text-warning"></i>
                                                </span>{' '}
                                                {award.user.First}{' '}
                                                {award.user.Middle}{' '}
                                                {award.user.Last}
                                            </strong>
                                            <br />
                                            <a
                                                style={{
                                                    display:
                                                        type === 'Admin'
                                                            ? ''
                                                            : 'none',
                                                }}
                                                role="button"
                                                onClick={() => {
                                                    Fire(
                                                        'Remove this award?',
                                                        `Are you sure you want to remove the award of ${award.user.First}  ${award.user.Last}? `,
                                                        'info',
                                                        () => {
                                                            const api =
                                                                new Auth(
                                                                    'awards',
                                                                )
                                                            api.delete(award.id)
                                                                .then(() => {
                                                                    Alert(
                                                                        'Award removed',
                                                                        'Award has been successfully removed',
                                                                        'success',
                                                                    )
                                                                    getAwards()
                                                                })
                                                                .catch(() => {
                                                                    Alert(
                                                                        'Error',
                                                                        'Something went wrong. Try Again',
                                                                        'error',
                                                                    )
                                                                })
                                                        },
                                                    )
                                                }}
                                                className="float-right  fe fe-minus-circle"></a>
                                            <span className="badge badge-danger">
                                                {' '}
                                                {award.title}{' '}
                                            </span>
                                            <div className="mb-2 mt-3 small">
                                                {award.description}
                                            </div>
                                            <div className="card mb-3 bg-light w-50">
                                                {award.files.map(
                                                    (file: any, index: any) => (
                                                        <a
                                                            key={index}
                                                            href={file.URL}
                                                            target="_blank"
                                                            className="row no-gutters align-items-center">
                                                            <div className="col-md-2 text-center">
                                                                <img
                                                                    src={
                                                                        file.URL
                                                                    }
                                                                    alt="..."
                                                                    className="img-fluid rounded m-1"
                                                                />
                                                            </div>
                                                            <div className="col-md-10">
                                                                <div className="card-body py-0">
                                                                    <p className="card-title text-muted mb-0">
                                                                        {
                                                                            file.Name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    ),
                                                )}
                                            </div>
                                            <small className="text-muted">
                                                Awarded Last:{' '}
                                                {toDate(award.created_at)}
                                            </small>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
