import React from 'react'
import {Alert, Fire} from '../../../../../components/Alerts/Alert'
import {Auth} from '../../../../../services/auth.service'
import * as interfaces from '../../../../../components/Doc/PDS/PDSInterface'

export default function PDSVolountaryWork(props: {
    VolunteerInvolvements: interfaces.VolunteerInvolvements[]
}) {
    const userData: any = localStorage.getItem('user')
    const [addForm, setaddForm] = React.useState([1])

    React.useEffect(() => {
        setaddForm([])
        props.VolunteerInvolvements.forEach((child: any) => {
            setaddForm([...[], 1])
        })
        setTimeout(() => {
            distribute()
        }, 3000)
    }, [])

    function distribute() {
        let index = 0
        props.VolunteerInvolvements.forEach((child: any) => {
            for (let key in child) {
                if (
                    key === 'Name' ||
                    key === 'From' ||
                    key === 'To' ||
                    key === 'Hours' ||
                    key === 'Department'
                ) {
                    $('#' + key + index).val(child[key])
                }
            }
            index += 1
        })
    }

    const submit = async () => {
        let data: any = {
            volounteers: [],
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
            data['volounteers'].push(object)
        }
        data['employee_id'] = JSON.parse(userData).id

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth('volounteer')
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
                VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE
                / VOLUNTARY ORGANIZATION/S
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
                    <span> Add Voluntary Work or Involvement</span>
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
                        VOLUNTARY WORK OR INVOLVEMENT {1}
                    </h6>
                    <div className="row mb-4">
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">
                                NAME & ADDRESS OF ORGANIZATION (Write in full)
                            </label>
                            <input
                                id={`Name${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">FROM</label>
                            <input
                                id={`From${index}`}
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <label htmlFor="">TO</label>
                            <input
                                id={`To${index}`}
                                type="date"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label htmlFor="">NUMBER OF HOURS</label>
                            <input
                                id={`Hours${index}`}
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-9 mb-4">
                            <label htmlFor="">
                                {' '}
                                DEPARTMENT / AGENCY / OFFICE / COMPANY (Write in
                                full/Do not abbreviate)
                            </label>
                            <input
                                id={`Department${index}`}
                                type="text"
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
                    Update Voluntary Work or Involvement
                </button>
            </div>
        </div>
    )
}
