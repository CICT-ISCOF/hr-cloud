import React from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import {Auth} from '../../../services/auth.service'

export default function EmployeeICPR(props: any) {
    const [strategicPriority, setstrategicPriority] = React.useState([1])
    const [coreFunctions, setcoreFunctions] = React.useState([1])

    React.useEffect(() => {
        setstrategicPriority([])
        setcoreFunctions([])
        const api = new Auth('icpr-settings')
        api.fetchOne(props.data.user_id).then((data: any) => {
            data.StrategicPriorities.forEach((child: any) => {
                setstrategicPriority([...[], 1])
            })
            data.CoreFunctions.forEach((child: any) => {
                setcoreFunctions([...[], 1])
            })
            console.log(data)
            setTimeout(() => {
                distributeStrategicPriorities(data.StrategicPriorities)
                distributeCoreFunctions(data.CoreFunctions)
            }, 3000)
        })
    }, [])

    function distributeStrategicPriorities(priorities: any) {
        let index = 0
        priorities.forEach((child: any) => {
            for (let key in child) {
                console.log(key)
                $('#' + key + index).val(child[key])
            }
            index += 1
        })
    }
    function distributeCoreFunctions(functions: any) {
        let index = 0
        functions.forEach((child: any) => {
            for (let key in child) {
                $('#F' + key + index).val(child[key])
            }
            index += 1
        })
    }

    let StrategicPriorities: any = []
    let CoreFunctions: any = []

    function submitForm() {
        for (let i = 0; i < strategicPriority.length; i++) {
            let priorities = $(
                `.StrategicPriorities${i} input, .StrategicPriorities${i} textarea`,
            )
            let object: any = {}
            for (let index in priorities) {
                if (priorities[index].id == '') {
                    break
                }
                object[priorities[index].id] = $(
                    '#' + priorities[index]['id'],
                ).val()
            }
            StrategicPriorities.push(object)
        }
        for (let i = 0; i < coreFunctions.length; i++) {
            let functions = $(
                `.CoreFunctions${i} input, .CoreFunctions${i} textarea`,
            )
            let object: any = {}
            for (let index in functions) {
                if (functions[index].id == '') {
                    break
                }
                if (functions[index].id != undefined) {
                    let key = functions[index].id.split('F')
                    object[key[1]] = $('#' + functions[index]['id']).val()
                }
            }
            CoreFunctions.push(object)
        }

        const data = {
            employee_id: props.data.user_id,
            DiscussedBy: $('#DiscussedBy').val(),
            DiscussedByDate: $('#DiscussedByDate').val(),
            AssessedBy: $('#AssessedBy').val(),
            AssessedByDate: $('#AssessedByDate').val(),
            FinalRating: $('#FinalRating').val(),
            FinalRatingDate: $('#FinalRatingDate').val(),
            StrategicPriorities: StrategicPriorities,
            CoreFunctions: CoreFunctions,
            ReviewedBy: $('#ReviewedBy').val(),
            ReviewedByDate: $('#ReviewedByDate').val(),
            ApprovedBy: $('#ApprovedBy').val(),
            ApprovedByDate: $('#ApprovedByDate').val(),
        }

        const api = new Auth('ratings')

        api.create(data, {})
            .then(() => {
                Alert(
                    'Rating Successfully Submitted.',
                    `You have successfully rated ${props.data.user.First}.`,
                    `success`,
                )
                StrategicPriorities = []
                CoreFunctions = []
            })
            .catch(() => {
                Alert('Error', `Something went wrong. Try Again`, `error`)
            })
    }

    const handleAvarage = (Q: any, E: any, T: any) =>
        (parseFloat(Q) + parseFloat(E) + parseFloat(T)) / 3

    return (
        <div className="card-body card">
            <h5 className="bold mt-4 mb-0 text-center">
                OFFICE PERFORMANCE EVALUATION AND REVIEW (IPCR)
            </h5>
            <p className="text-info small mb-5 mt-0 text-center">
                This form will generate ICPR. Please review after submitting
            </p>
            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Reviewed by (Immediate Supervisor)</label>
                    <input
                        disabled
                        id="ReviewedBy"
                        value={
                            props.data.supervisors.First +
                            ' ' +
                            props.data.supervisors.Middle +
                            ' ' +
                            props.data.supervisors.Last
                        }
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Reviewed Date</label>
                    <input
                        id="ReviewedByDate"
                        type="date"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Approved by (Head of Office)</label>
                    <input
                        id="ApprovedBy"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Approved Date</label>
                    <input
                        id="ApprovedByDate"
                        type="date"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <p className="text-info small mt-0 ">Ratings:</p>
                    <ul>
                        <li className="small">
                            <span className="bold">5</span> - OUTSANDING
                        </li>
                        <li className="small">
                            <span className="bold">4</span> - VERY SATISFACTORY
                        </li>
                        <li className="small">
                            <span className="bold">3</span> - SATISFACTORY
                        </li>
                        <li className="small">
                            <span className="bold">2</span> - UNSATISFACTORY
                        </li>
                        <li className="small">
                            <span className="bold">1</span> - POOR
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <p className="text-info small mt-0 ">Legends:</p>
                    <ul>
                        <li className="small">
                            <span className="bold">Q</span> - Quality
                        </li>
                        <li className="small">
                            <span className="bold">E</span> - EfficiencyY
                        </li>
                        <li className="small">
                            <span className="bold">T</span> - Timeless
                        </li>
                        <li className="small">
                            <span className="bold">A</span> - Average
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5 m-0">
                {strategicPriority.map((value: any, index: any) => (
                    <React.Fragment key={index}>
                        <div className="col-md-12 row m-0  pt-4 d-flex aic card-header mb-2">
                            <h5 className="text-info">
                                Strategic Priority #{index + 1}
                            </h5>
                        </div>
                        <div
                            className={`col-md-12 row  pt-1 card-header StrategicPriorities${index}`}>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">OUTPUT</label>
                                <textarea
                                    id={`Output${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">
                                    Success Indicators(Targets + Measures)
                                </label>
                                <textarea
                                    id={`SuccessIndicatiors${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label htmlFor="">Quality</label>
                                <input
                                    onChange={() => {
                                        $(`#A${index}`).val(
                                            handleAvarage(
                                                $(`#Q${index}`).val(),
                                                $(`#E${index}`).val(),
                                                $(`#T${index}`).val(),
                                            ),
                                        )
                                    }}
                                    id={`Q${index}`}
                                    type="number"
                                    className="form-control"
                                />
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label htmlFor="">Efficiency</label>
                                <input
                                    onChange={() => {
                                        $(`#A${index}`).val(
                                            handleAvarage(
                                                $(`#Q${index}`).val(),
                                                $(`#E${index}`).val(),
                                                $(`#T${index}`).val(),
                                            ),
                                        )
                                    }}
                                    id={`E${index}`}
                                    type="number"
                                    className="form-control"
                                />
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label htmlFor="">Timeless</label>
                                <input
                                    onChange={() => {
                                        $(`#A${index}`).val(
                                            handleAvarage(
                                                $(`#Q${index}`).val(),
                                                $(`#E${index}`).val(),
                                                $(`#T${index}`).val(),
                                            ),
                                        )
                                    }}
                                    id={`T${index}`}
                                    type="number"
                                    className="form-control"
                                />
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label className="text-success">Average</label>
                                <input
                                    disabled
                                    id={`A${index}`}
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Actual Accomplishments</label>
                                <textarea
                                    id={`ActualAccomplishments${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Remarks</label>
                                <textarea
                                    id={`Remarks${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <input
                                type="hidden"
                                value="StrategicPriority"
                                id="Type"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className="row mt-5 m-0">
                {coreFunctions.map((value: any, index: any) => (
                    <React.Fragment key={index}>
                        <div className="col-md-12 row m-0  pt-4 d-flex aic card-header mb-2">
                            <h5 className="text-info">
                                Core Function #{index + 1}
                            </h5>
                        </div>
                        <div
                            className={`col-md-12 row  pt-1 card-header CoreFunctions${index}`}>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">OUTPUT</label>
                                <textarea
                                    id={`FOutput${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">
                                    Success Indicators(Targets + Measures)
                                </label>
                                <textarea
                                    id={`FSuccessIndicatiors${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label htmlFor="">Quality</label>
                                <input
                                    onChange={() => {
                                        $(`#FA${index}`).val(
                                            handleAvarage(
                                                $(`#FQ${index}`).val(),
                                                $(`#FE${index}`).val(),
                                                $(`#FT${index}`).val(),
                                            ),
                                        )
                                    }}
                                    id={`FQ${index}`}
                                    type="number"
                                    className="form-control"
                                />
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label htmlFor="">Efficiency</label>
                                <input
                                    onChange={() => {
                                        $(`#FA${index}`).val(
                                            handleAvarage(
                                                $(`#FQ${index}`).val(),
                                                $(`#FE${index}`).val(),
                                                $(`#FT${index}`).val(),
                                            ),
                                        )
                                    }}
                                    id={`FE${index}`}
                                    type="number"
                                    className="form-control"
                                />
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label htmlFor="">Timeless</label>
                                <input
                                    onChange={() => {
                                        $(`#FA${index}`).val(
                                            handleAvarage(
                                                $(`#FQ${index}`).val(),
                                                $(`#FE${index}`).val(),
                                                $(`#FT${index}`).val(),
                                            ),
                                        )
                                    }}
                                    id={`FT${index}`}
                                    type="number"
                                    className="form-control"
                                />
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-3 mb-4">
                                <label className="text-success">Average</label>
                                <input
                                    disabled
                                    id={`FA${index}`}
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Actual Accomplishments</label>
                                <textarea
                                    id={`FActualAccomplishments${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Remarks</label>
                                <textarea
                                    id={`FRemarks${index}`}
                                    className="form-control"></textarea>
                            </div>
                            <input
                                type="hidden"
                                value="CoreFunction"
                                id="FType"
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className="row mt-5 m-0">
                <p className="col-md-12 text-info  mt-0 ">
                    Comments and Recommendations for Development Purposes
                </p>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Discussed by (Employee)</label>
                    <input
                        id="DiscussedBy"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Discussed Date</label>
                    <input
                        id="DiscussedByDate"
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="col-md-6 mb-4">
                    <label htmlFor="">Assessed by (Supervisor)</label>
                    <input
                        id="AssessedBy"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Assessment Date</label>
                    <input
                        id="AssessedByDate"
                        type="date"
                        className="form-control"
                    />
                </div>

                <div className="col-md-6 mb-4">
                    <label htmlFor="">Final Rating by (Head of Agency)</label>
                    <input
                        id="FinalRating"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <label htmlFor="">Final Rating Date</label>
                    <input
                        id="FinalRatingDate"
                        type="date"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="mt-5 mb-4 d-flex aij jcc">
                <button
                    onClick={() => {
                        Fire(
                            'Submit Rating Review',
                            'This form will generate ICPR. Make sure you have thourough review before submitting. Continue?',
                            'info',
                            () => {
                                submitForm()
                            },
                        )
                    }}
                    className="btn btn-outline-primary">
                    Submit Rating
                </button>
            </div>
        </div>
    )
}
