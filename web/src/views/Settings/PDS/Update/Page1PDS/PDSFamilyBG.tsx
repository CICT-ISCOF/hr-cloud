import React from 'react'
import {Alert, Fire} from '../../../../../components/Alerts/Alert'
import {useForm} from 'react-hook-form'
import {Auth} from '../../../../../services/auth.service'
import {
    Children,
    FamilyBackground,
} from '../../../../../components/Doc/PDS/PDSInterface'

type Inputs = {
    employee_id: any
    SpouseFirst: any
    SpouseLast: any
    SpouseMiddle: any
    SpouseExt: any
    MotherFirst: any
    MotherLast: any
    MotherMiddle: any
    MotherExt: any
    FatherFirst: any
    FatherLast: any
    FatherMiddle: any
    FatherExt: any
    Occupation: any
    BusinessName: any
    BusinessAddress: any
    Telephone: any
}

export default function PDSFamilyBG(props: {
    FamilyBackground: FamilyBackground
    Children: Children[]
}) {
    const userData: any = localStorage.getItem('user')
    const {register, handleSubmit, setValue} = useForm<Inputs>()

    const [addForm, setaddForm] = React.useState([1])

    const {FamilyBackground, Children} = props

    React.useEffect(() => {
        setaddForm([])
        setValue('SpouseFirst', FamilyBackground.SpouseFirst)
        setValue('SpouseLast', FamilyBackground.SpouseLast)
        setValue('SpouseMiddle', FamilyBackground.SpouseMiddle)
        setValue('SpouseExt', FamilyBackground.SpouseExt)
        setValue('MotherFirst', FamilyBackground.MotherFirst)
        setValue('MotherLast', FamilyBackground.MotherLast)
        setValue('MotherMiddle', FamilyBackground.MotherMiddle)
        setValue('MotherExt', FamilyBackground.MotherExt)
        setValue('FatherFirst', FamilyBackground.FatherFirst)
        setValue('FatherLast', FamilyBackground.FatherLast)
        setValue('FatherMiddle', FamilyBackground.FatherMiddle)
        setValue('FatherExt', FamilyBackground.FatherExt)
        setValue('Occupation', FamilyBackground.Occupation)
        setValue('BusinessName', FamilyBackground.BusinessName)
        setValue('BusinessAddress', FamilyBackground.BusinessAddress)
        setValue('Telephone', FamilyBackground.Telephone)
        Children.forEach((child: any) => {
            setaddForm([...[], 1])
        })
        setTimeout(() => {
            distribute()
        }, 3000)
    }, [])

    function distribute() {
        let index = 0
        Children.forEach((child: any) => {
            for (let key in child) {
                if (key === 'Name' || key === 'DOB') {
                    $('#' + key + index).val(child[key])
                    console.log('#' + key + index, child[key])
                }
            }
            index += 1
        })
    }

    const submit = async (data: any) => {
        data['children'] = []

        for (let i = 0; i < addForm.length; i++) {
            let supervised = $('.Children' + i + ' input')
            let object: any = {}
            for (let index in supervised) {
                if (supervised[index].id == undefined) {
                    break
                }
                if ($('#' + supervised[index]['id']).val() !== '') {
                    object[supervised[index].id] = $(
                        '#' + supervised[index]['id'],
                    ).val()
                }
            }
            data['children'].push(object)
        }

        Fire(
            'Update Personal Data Sheet?',
            'I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth('family-background')
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
            <form onSubmit={handleSubmit(submit)}>
                <h2 className="bold mt-4 mb-4">FAMILY BACKGROUND</h2>
                <div className="row mb-4">
                    <h5 className="text-info col-md-12 mt-2 mb-3">Spouse</h5>
                    <input
                        type="hidden"
                        value={JSON.parse(userData).id}
                        {...register('employee_id')}
                    />
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Last Name</label>
                        <input
                            {...register('SpouseLast')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">First Name</label>
                        <input
                            {...register('SpouseFirst')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Middle Name</label>
                        <input
                            {...register('SpouseMiddle')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Name Ext</label>
                        <input
                            {...register('SpouseExt')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <h5 className="text-info col-md-12 mt-5 mb-3">Work</h5>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">OCCUPATION</label>
                        <input
                            {...register('Occupation')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">EMPLOYER/BUSINESS NAME</label>
                        <input
                            {...register('BusinessName')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">BUSINESS ADDRESS</label>
                        <input
                            {...register('BusinessAddress')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">TELEPHONE NO.</label>
                        <input
                            {...register('Telephone')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <h5 className="text-info col-md-12 mt-5 mb-3">Father</h5>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Last Name</label>
                        <input
                            {...register('FatherLast')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">First Name</label>
                        <input
                            {...register('FatherFirst')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Middle Name</label>
                        <input
                            {...register('FatherMiddle')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Name Ext</label>
                        <input
                            {...register('FatherExt')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <h5 className="text-info col-md-12 mt-5 mb-3">Mother</h5>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Last Name</label>
                        <input
                            {...register('MotherLast')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Middle Name</label>
                        <input
                            {...register('MotherFirst')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Name Ext</label>
                        <input
                            {...register('MotherMiddle')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">NAME EXTENSION</label>
                        <input
                            {...register('MotherExt')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>

                <h2 className="col-md-12 bold m-0 p-0  mt-5 mb-3">CHILDRENS</h2>
                <div className="col-md-6 mb-4 p-0 m-0 d-flex">
                    <button
                        type="button"
                        onClick={() => {
                            setaddForm([...addForm, 1])
                        }}
                        className="btn btn-outline-dark d-flex aic jcc">
                        <i className="fe fe-plus"></i>
                        <span> Add Child</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setaddForm([1])
                        }}
                        className="btn btn-outline-danger d-flex aic jcc ml-3">
                        <i className="fe fe-plus"></i>
                        <span> Reset</span>
                    </button>
                </div>
                {addForm.map((value, index) => (
                    <div key={index} className={`row mt-5 Children${index}`}>
                        <div className="col-md-6">
                            <label htmlFor="">NAME OF CHILD</label>
                            <input
                                id={`Name${index}`}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="">DATE OF BIRTH </label>
                            <input
                                id={`DOB${index}`}
                                type="date"
                                className="form-control"
                            />
                        </div>
                    </div>
                ))}

                <div className="mt-5 mb-4 d-flex aij jcc">
                    <button className="btn btn-outline-primary">
                        Update Family Background
                    </button>
                </div>
            </form>
        </div>
    )
}
