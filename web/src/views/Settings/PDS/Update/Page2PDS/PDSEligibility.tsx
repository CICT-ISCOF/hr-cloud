import React from 'react'
import {Alert, Fire} from '../../../../../components/Alerts/Alert'
import {Eligibilities} from '../../../../../components/Doc/PDS/PDSInterface'
import {Auth} from '../../../../../services/auth.service'

export default function PDSEligibility(props: {
    Eligibilities: Eligibilities[]
}) {
    const userData: any = localStorage.getItem('user')
    const [addForm, setaddForm] = React.useState([1])

    React.useEffect(() => {
        setaddForm([])
        props.Eligibilities.forEach((child: any) => {
            setaddForm([...[], 1])
        })
        setTimeout(() => {
            distribute()
        }, 3000)
    }, [])

    function distribute() {
        let index = 0
        props.Eligibilities.forEach((child: any) => {
            for (let key in child) {
                if (
                    key === 'Title' ||
                    key === 'Rating' ||
                    key === 'Date' ||
                    key === 'Place' ||
                    key === 'License' ||
                    key === 'Validity'
                ) {
                    $('#' + key + index).val(child[key])
                }
            }
            index += 1
        })
    }

    const submit = async () => {
        let data: any = {
            eligibilities: [],
        }
        for (let i = 0; i < addForm.length; i++) {
            let input = $('.data' + i + ' input')
            let object: any = {}
            for (let index in input) {
                if (input[index].id == undefined) {
                    break
                }
                if ($('#' + input[index]['id']).val() !== '') {
                    object[input[index].id] = $('#' + input[index]['id']).val()
                }
            }
            data['eligibilities'].push(object)
        }
        data['employee_id'] = JSON.parse(userData).id

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth('eligibilities')
                api.create(data, {})
                    .then(() => {
                        Alert(
                            'PDS Successfully Updated',
                            'You have successfully updated your Personal Data Sheet',
                            'success',
                        )
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Erro Updating Personal Data Sheet. Try Again',
                            'error',
                        )
                    })
            },
        )
    }

    return (
        <div className="card-body card">
            <h5 className="bold mt-4 m-0 ">
                CIVIL SERVICE ELIGIBILITY
                <br />
                <small className="text-muted" style={{fontSize: '.8rem'}}>
                    {' '}
                    CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/
                    CES/ CSEEBARANGAY ELIGIBILITY / DRIVER'S LICENSE
                </small>
            </h5>
            <br />
            <br />
            <div className="col-md-6 mb-4 p-0 m-0 d-flex">
                <button
                    onClick={() => {
                        setaddForm([...addForm, 1])
                    }}
                    className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Eligibility</span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setaddForm([1])
                    }}
                    className="btn btn-outline-danger d-flex aic jcc ml-3">
                    <i className="fe fe-refresh-ccw"></i>&nbsp;&nbsp;&nbsp;
                    <span>Reset </span>
                </button>
            </div>

            {addForm.map((value, index) => (
                <div key={index} className={`data${index}`}>
                    <h6 className={`bold mt-4 mb-4 text-info`}>
                        ELIGIBILITY {index + 1}
                    </h6>
                    <div className="row mb-4">
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">ELIGIBILITY TITILE</label>
                            <input
                                id={`Title${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">RATING(If Applicable)</label>
                            <input
                                id={`Rating${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">
                                DATE OF EXAMINATION / CONFERMENT
                            </label>
                            <input
                                id={`Date${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>{' '}
                        <div className="col-md-12 mb-4">
                            <label htmlFor=""> PLACE OF EXAMINATION</label>
                            <input
                                id={`Place${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">LICENSE NUMBER</label>
                            <input
                                id={`License${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">DATE OF VALIDITY</label>
                            <input
                                id={`Validity${index}`}
                                type="date"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div className="mt-2 mb-4 d-flex aij jcc">
                <button
                    onClick={() => [submit()]}
                    className="btn btn-outline-primary">
                    Update Eligibility
                </button>
            </div>
        </div>
    )
}
