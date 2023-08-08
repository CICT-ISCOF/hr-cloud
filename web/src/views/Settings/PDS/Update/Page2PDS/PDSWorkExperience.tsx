import React from 'react'
import {Alert, Fire} from '../../../../../components/Alerts/Alert'
import {WorkExperiences} from '../../../../../components/Doc/PDS/PDSTypes'
import {Auth} from '../../../../../services/auth.service'

export default function PDSWorkExperience(props: {
    WorkExperiences: WorkExperiences[]
}) {
    const userData: any = localStorage.getItem('user')
    const [addForm, setaddForm] = React.useState([1])

    React.useEffect(() => {
        setaddForm([])
        props.WorkExperiences.forEach((child: any) => {
            setaddForm([...[], 1])
        })
        setTimeout(() => {
            distribute()
        }, 3000)
    }, [])

    function distribute() {
        let index = 0
        props.WorkExperiences.forEach((child: any) => {
            for (let key in child) {
                if (
                    key === 'From' ||
                    key === 'To' ||
                    key === 'Department' ||
                    key === 'Salary' ||
                    key === 'Appointment' ||
                    key === 'Government' ||
                    key === 'Position'
                ) {
                    console.log('#' + key + index, child[key])
                    $('#' + key + index).val(child[key])
                }
            }
            index += 1
        })
    }

    const submit = async () => {
        let data: any = {
            workExperiences: [],
        }
        for (let i = 0; i < addForm.length; i++) {
            let input = $('.data' + i + ' input, select ')
            let object: any = {}
            for (let index in input) {
                if (input[index].id == undefined) {
                    break
                }
                object[input[index].id] = $('#' + input[index]['id']).val()
            }

            data['workExperiences'].push(object)
        }
        data['employee_id'] = JSON.parse(userData).id

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth('work-experience')
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
            <h5 className="bold mt-4 mb-4">
                WORK EXPERIENCE
                <br />
                <small className="text-muted" style={{fontSize: '.8rem'}}>
                    {' '}
                    (INCLUDE PRIVATE EMPLOYMENT. START FROM YOUR RECENT WORK)
                    DESCRIPTION OF DUTIES SHOULD BE INDICATED IN THE ATTACHED
                    WORK EXPERIENCE SHEET.
                </small>
            </h5>
            <div className="col-md-6 mb-4 p-0 m-0 d-flex">
                <button
                    onClick={() => {
                        setaddForm([...addForm, 1])
                    }}
                    className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Work Experience</span>
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
                    <h6 className="bold mt-4 mb-4 text-info">
                        WORK EXPERIENCE {index + 1}
                    </h6>
                    <div className="row mb-4">
                        <div className="col-md-2 mb-4">
                            <label htmlFor="">FROM</label>
                            <input
                                id={`From${index}`}
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-2 mb-4">
                            <label htmlFor="">TO</label>
                            <input
                                id={`To${index}`}
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-8 mb-4">
                            <label htmlFor="">
                                POSITION TITLE (Write in full / Do not
                                abbreviate)
                            </label>
                            <input
                                id={`Position${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">
                                DEPARTMENT / AGENCY / OFFICE / COMPANY (Write in
                                full / Do not abbreviate)
                            </label>
                            <input
                                id={`Department${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">
                                SALARY/ JOB/ PAY GRADE (if applicable) & STEP
                                (Format "00-0") / INCREMENT
                            </label>
                            <input
                                id={`Salary${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor=""> STATUS OF APPOINTMENT</label>
                            <input
                                id={`Appointment${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">GOV'T SERVICE(Y/ N)</label>
                            <select
                                id={`Government${index}`}
                                className="form-control">
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}

            <div className="mt-2 mb-4 d-flex aij jcc">
                <button
                    onClick={() => [submit()]}
                    className="btn btn-outline-primary">
                    Update Work Experience
                </button>
            </div>
        </div>
    )
}
