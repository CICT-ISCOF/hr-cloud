import React from 'react'
import {useParams} from 'react-router-dom'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import {Auth} from '../../../services/auth.service'

export default function ICPRNewSetting() {
    const [strategicPriority, setstrategicPriority] = React.useState([1])
    const [coreFunctions, setcoreFunctions] = React.useState([1])
    const [disabled, setdisabled] = React.useState(false)
    let {id}: any = useParams()

    React.useEffect(() => {
        setstrategicPriority([])
        setcoreFunctions([])
        const api = new Auth('icpr-settings')
        api.fetchOne(id).then((data: any) => {
            data.StrategicPriorities.forEach((child: any) => {
                setstrategicPriority([...[], 1])
            })
            data.CoreFunctions.forEach((child: any) => {
                setcoreFunctions([...[], 1])
            })
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
        setdisabled(true)
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
            employee_id: id,
            StrategicPriorities: StrategicPriorities,
            CoreFunctions: CoreFunctions,
        }

        const api = new Auth('icpr-settings')
        api.update(id, data)
            .then(() => {
                Alert(
                    'ICPR Settings succesfully Updated',
                    `You have successfully your ICPR Settings.`,
                    `success`,
                )
                StrategicPriorities = []
                CoreFunctions = []
                setdisabled(false)
            })
            .catch(() => {
                Alert('Error', `Something went wrong. Try Again`, `error`)
                setdisabled(false)
            })
    }

    return (
        <div>
            <div className="row mt-5 m-0">
                <div className="d-flex mb-2">
                    <button
                        onClick={() => {
                            setstrategicPriority([...strategicPriority, 1])
                        }}
                        style={{whiteSpace: 'nowrap'}}
                        className="btn btn-outline-dark ">
                        Add Strategic Priority
                    </button>
                    <button
                        onClick={() => {
                            Fire(
                                `Reset All Strategic Priority?`,
                                `Are you sure you want to Reset All Strategic Priority?`,
                                `info`,
                                () => {
                                    setstrategicPriority([1])
                                },
                            )
                        }}
                        style={{whiteSpace: 'nowrap'}}
                        className="btn btn-outline-danger ml-2 ">
                        Reset All Strategic Priority
                    </button>
                </div>
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
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">
                                    Success Indicators(Targets + Measures)
                                </label>
                                <textarea
                                    id={`SuccessIndicatiors${index}`}
                                    className="form-control"></textarea>
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>

                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Actual Accomplishments</label>
                                <textarea
                                    id={`ActualAccomplishments${index}`}
                                    className="form-control"></textarea>
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Remarks</label>
                                <textarea
                                    id={`Remarks${index}`}
                                    className="form-control"></textarea>
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
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
                <div className="d-flex mb-2">
                    <button
                        onClick={() => {
                            setcoreFunctions([...coreFunctions, 1])
                        }}
                        style={{whiteSpace: 'nowrap'}}
                        className="btn btn-outline-dark ">
                        Add Core Functions
                    </button>
                    <button
                        onClick={() => {
                            Fire(
                                `Reset All Core Functions?`,
                                `Are you sure you want to Reset All Core Functions?`,
                                `info`,
                                () => {
                                    setcoreFunctions([1])
                                },
                            )
                        }}
                        style={{whiteSpace: 'nowrap'}}
                        className="btn btn-outline-danger ml-2 ">
                        Reset All Core Functions
                    </button>
                </div>
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
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">
                                    Success Indicators(Targets + Measures)
                                </label>
                                <textarea
                                    id={`FSuccessIndicatiors${index}`}
                                    className="form-control"></textarea>
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Actual Accomplishments</label>
                                <textarea
                                    id={`FActualAccomplishments${index}`}
                                    className="form-control"></textarea>
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
                            </div>
                            <div className="col-md-12 mb-4">
                                <label htmlFor="">Remarks</label>
                                <textarea
                                    id={`FRemarks${index}`}
                                    className="form-control"></textarea>
                                <h6 className="text-danger-lighter mt-2 small">
                                    * This field is required
                                </h6>
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
            <div className="d-flex aic jcc mt-5">
                <button
                    disabled={disabled}
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
                    className="btn btn-dark">
                    {' '}
                    {disabled == true ? (
                        <div className="d-flex aic jcc">
                            <div
                                className="spinner-border spinner-border-sm"
                                role="status"
                            />
                        </div>
                    ) : (
                        'Set ICPR Setting'
                    )}
                </button>
            </div>
        </div>
    )
}
