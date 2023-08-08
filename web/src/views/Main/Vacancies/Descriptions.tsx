import React from 'react'
import {formatCurrency, toArray} from '../../../helpers'

export default function Descriptions(props: any) {
    return (
        <div className="row card card-body shadow">
            <div className="col-md-12 text-center">
                <div
                    className="m-4 d-flex"
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <img src="./assets/placeholders/dev.png" alt="..." />
                </div>
                <h1 className="h5 mt-3 mb-0">{props.data.Position}</h1>
                <h3 className="text-info  mt-0">{props.data.Bureau}</h3>
                <h5 className="text-dark  mt-0">
                    Salary:{' '}
                    <span className="text-success">
                        {formatCurrency(props.data.SalaryAuthorized)}
                    </span>{' '}
                </h5>
            </div>
            <div className="mt-5 p-5 ">
                <h1 className="text-info">Job Summary</h1>
                <br />
                <br />
                <p className="text-muted">{props.data.Job}</p>
            </div>
            <h1 className="p-5 text-info">Qualifications</h1>
            <div className=" row p-1">
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
                                {toArray(props.data.Education).map(
                                    (data: any, index: any) => (
                                        <li
                                            style={{wordBreak: 'break-all'}}
                                            key={index}>
                                            {data}
                                        </li>
                                    ),
                                )}
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
                            <h3 className="h5 mt-4 mb-1">Work Experiences</h3>
                            <ul>
                                {toArray(props.data.Experience).map(
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
                                <i className="fe fe-briefcase fe-32 text-info"></i>
                            </span>
                        </div>
                        <div>
                            <h3 className="h5 mt-4 mb-1">Trainings</h3>
                            <ul>
                                {toArray(props.data.Training).map(
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
                            <h3 className="h5 mt-4 mb-1">Eligibilities</h3>
                            <ul>
                                {toArray(props.data.Eligibility).map(
                                    (data: any, index: any) => (
                                        <li key={index}>{data}</li>
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
