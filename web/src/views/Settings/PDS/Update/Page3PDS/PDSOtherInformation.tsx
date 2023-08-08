import React from 'react'
import {Alert, Fire} from '../../../../../components/Alerts/Alert'
import {Others} from '../../../../../components/Doc/PDS/PDSInterface'
import {Auth} from '../../../../../services/auth.service'

export default function PDSOtherInformation(props: {Others: Others[]}) {
    const userData: any = localStorage.getItem('user')

    React.useEffect(() => {
        setaddForm([])
        props.Others.forEach((child: any) => {
            setaddForm([...[], 1])
        })
        setTimeout(() => {
            distribute()
        }, 3000)
    }, [])

    function distribute() {
        let index = 0
        props.Others.forEach((child: any) => {
            for (let key in child) {
                if (
                    key === 'Skills' ||
                    key === 'NonAcademicDistinction' ||
                    key === 'Membership'
                ) {
                    $('#' + key + index).val(child[key])
                }
            }
            index += 1
        })
    }
    const [addForm, setaddForm] = React.useState([1])

    const submit = async () => {
        let data: any = {
            others: [],
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
            data['others'].push(object)
        }
        data['employee_id'] = JSON.parse(userData).id

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth('others')
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
            <h5 className="bold mt-4 mb-4">OTHER INFORMATION</h5>

            <br />
            <br />
            <div className="col-md-6 mb-4 p-0 m-0 d-flex">
                <button
                    onClick={() => {
                        setaddForm([...addForm, 1])
                    }}
                    className="btn btn-outline-dark d-flex aic jcc">
                    <i className="fe fe-plus"></i>
                    <span> Add Other Info</span>
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
                    <h6 className="bold mt-4 mb-4 text-info">OTHER INFO 1</h6>
                    <div className="row mb-4">
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">SPECIAL SKILLS and HOBBIES</label>
                            <input
                                id={`Skills${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">
                                NON-ACADEMIC DISTINCTIONS / RECOGNITION (Write
                                in full)
                            </label>
                            <input
                                id={`NonAcademicDistinction${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-12 mb-4">
                            <label htmlFor="">
                                {' '}
                                MEMBERSHIP IN ASSOCIATION/ORGANIZATION(Write in
                                full)
                            </label>
                            <input
                                id={`Membership${index}`}
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
                    Update Other Information
                </button>
            </div>
        </div>
    )
}
