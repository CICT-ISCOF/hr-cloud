import React from 'react'
import {useForm} from 'react-hook-form'
import {Alert, Fire} from '../../../../../components/Alerts/Alert'
import {
    Addresses,
    PesonsalInformation,
} from '../../../../../components/Doc/PDS/PDSInterface'
import {countryList} from '../../../../../components/Doc/PDS/PDSPage1/countryList'
import {Auth} from '../../../../../services/auth.service'

type Inputs = {
    employee_id: ''
    Sex: ''
    CivilStatus: ''
    DOB: ''
    Height: ''
    Weight: ''
    BLOODTYPE: ''
    GSIS: ''
    PAGIBIG: ''
    PHILHEALTH: ''
    SSS: ''
    TIN: ''
    EmployeeNumber: ''
    Citizenship: ''
    DualCititizenship: ''
    Details: ''
    Telephone: ''
    residential: {
        HouseNumber: ''
        Street: ''
        Village: ''
        Barangay: ''
        Municipality: ''
        Province: ''
        ZipCode: ''
        Type: ''
        employee_id: ''
    }
    permanent: {
        HouseNumber: ''
        Street: ''
        Village: ''
        Barangay: ''
        Municipality: ''
        Province: ''
        ZipCode: ''
        Type: ''
        employee_id: ''
    }
}

export default function PDSPersonalBg(props: {
    PesonsalInformation: PesonsalInformation
    Permanent: Addresses
    Resedential: Addresses
}) {
    const userData: any = localStorage.getItem('user')
    const {register, handleSubmit, setValue} = useForm<Inputs>()

    const {PesonsalInformation, Resedential, Permanent} = props

    React.useEffect(() => {
        setValue('Sex', PesonsalInformation.Sex)
        setValue('CivilStatus', PesonsalInformation.CivilStatus)
        setValue('DOB', PesonsalInformation.DOB)
        setValue('Height', PesonsalInformation.Height)
        setValue('Weight', PesonsalInformation.Weight)
        setValue('BLOODTYPE', PesonsalInformation.BLOODTYPE)
        setValue('GSIS', PesonsalInformation.GSIS)
        setValue('PAGIBIG', PesonsalInformation.PAGIBIG)
        setValue('PHILHEALTH', PesonsalInformation.PHILHEALTH)
        setValue('SSS', PesonsalInformation.SSS)
        setValue('TIN', PesonsalInformation.TIN)
        setValue('EmployeeNumber', PesonsalInformation.EmployeeNumber)
        setValue('Citizenship', PesonsalInformation.Citizenship)
        setValue('DualCititizenship', PesonsalInformation.DualCititizenship)
        setValue('Details', PesonsalInformation.Details)
        setValue('Telephone', PesonsalInformation.Telephone)

        setValue('permanent.HouseNumber', Permanent.HouseNumber)
        setValue('permanent.Street', Permanent.Street)
        setValue('permanent.Village', Permanent.Village)
        setValue('permanent.Barangay', Permanent.Barangay)
        setValue('permanent.Municipality', Permanent.Municipality)
        setValue('permanent.Province', Permanent.Province)
        setValue('permanent.ZipCode', Permanent.ZipCode)
        setValue('permanent.Type', Permanent.Type)

        setValue('residential.HouseNumber', Resedential.HouseNumber)
        setValue('residential.Street', Resedential.Street)
        setValue('residential.Village', Resedential.Village)
        setValue('residential.Barangay', Resedential.Barangay)
        setValue('residential.Municipality', Resedential.Municipality)
        setValue('residential.Province', Resedential.Province)
        setValue('residential.ZipCode', Resedential.ZipCode)
        setValue('residential.Type', Resedential.Type)
    }, [])

    const submit = async (data: Inputs) => {
        Fire(
            'Update Personal Data Sheet?',
            ' I declare under oath that I have personally accomplished this Personal Data Sheet which is a true, correct and complete statement pursuant to the provisions of pertinent laws, rules and regulations of the Republic of the Philippines. I authorize the agency head/authorized representative to verify/validate the contents stated herein.I agree that any misrepresentation made in this document and its attachments shall cause the filing of administrative/criminal case/s against me.',
            'info',
            () => {
                let api = new Auth('personal-information')
                api.create(data, {})
                    .then(() => {
                        console.log(data)
                        Alert(
                            'PDS Successfully Updated',
                            'You have successfully updated your Personal Data Sheet',
                            'success',
                        )
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Erro updating Personal Data Sheet. Try Again',
                            'error',
                        )
                    })
            },
        )
    }

    const [user, setuser]: any = React.useState({})

    React.useEffect(() => {
        getC1()
    }, [])

    function getC1() {
        let api = new Auth('personal-information')
        api.fetchOne(JSON.parse(userData).id).then((data) => {
            setuser(data)
        })
    }

    return (
        <div className="card-body card">
            <form onSubmit={handleSubmit(submit)}>
                <h2 className="bold mt-4 mb-4 h">Personal Information</h2>
                <div className="row mb-4">
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Last Name</label>
                        <input
                            disabled
                            value={JSON.parse(userData).Last}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <input
                        type="hidden"
                        value={JSON.parse(userData).id}
                        {...register('employee_id')}
                    />
                    <input
                        type="hidden"
                        value={JSON.parse(userData).id}
                        {...register('permanent.employee_id')}
                    />
                    <input
                        type="hidden"
                        value={JSON.parse(userData).id}
                        {...register('residential.employee_id')}
                    />
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">First Name</label>
                        <input
                            disabled
                            value={JSON.parse(userData).First}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Middle Name</label>
                        <input
                            disabled
                            value={JSON.parse(userData).Middle}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label htmlFor="">Name Ext.</label>
                        <input
                            disabled
                            value={JSON.parse(userData).NameExtension}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-12"></div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Date of Birth</label>
                        <input
                            {...register('DOB')}
                            type="date"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Sex</label>
                        <select {...register('Sex')} className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor=""> Civil Status</label>
                        <select
                            {...register('CivilStatus')}
                            className="form-control">
                            <option>Single</option>
                            <option>Widow</option>
                            <option>Married</option>
                            <option>Separated</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Height (m)</label>
                        <input
                            {...register('Height')}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Weight (kg)</label>
                        <input
                            {...register('Weight')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Blood Type</label>
                        <input
                            {...register('BLOODTYPE')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">GSIS ID NO.</label>
                        <input
                            {...register('GSIS')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">PAG-IBIG ID NO.</label>
                        <input
                            {...register('PAGIBIG')}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-6 mt-4">
                        <label htmlFor="">PHILHEALTH NO.</label>
                        <input
                            {...register('PHILHEALTH')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">SSS NO.</label>
                        <input
                            {...register('SSS')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">TIN NO</label>
                        <input
                            {...register('TIN')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Agency Employee NO.</label>
                        <input
                            {...register('EmployeeNumber')}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Citizenship</label>
                        <select
                            {...register('Citizenship')}
                            className="form-control">
                            <option>Filipino</option>
                            <option>Dual Citizenship</option>
                        </select>
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">If holder of Dual citizenship</label>
                        <select
                            {...register('DualCititizenship')}
                            className="form-control">
                            <option>By Birth</option>
                            <option>By Naturalization</option>
                        </select>
                    </div>
                    <div className="col-md-12 mt-4">
                        <label htmlFor="">Please Indicate Details</label>
                        <select
                            {...register('Details')}
                            className="form-control">
                            <option selected>Philippines</option>
                            {countryList.map((country, i) => (
                                <option key={i}>{country}</option>
                            ))}
                        </select>
                    </div>

                    <h2 className="bold mt-5 col-md-12">Residential Address</h2>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">House/Block/Lot No.</label>
                        <input
                            {...register('residential.HouseNumber')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Street</label>
                        <input
                            {...register('residential.Street')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Subdivision/Village</label>
                        <input
                            {...register('residential.Village')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Barangay</label>
                        <input
                            {...register('residential.Barangay')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">City/Municipality</label>
                        <input
                            {...register('residential.Municipality')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Province</label>
                        <input
                            {...register('residential.Province')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">ZIP CODE</label>
                        <input
                            {...register('residential.ZipCode')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <input
                        type="hidden"
                        {...register('residential.Type')}
                        value="ResidentialAddress"
                    />

                    <h2 className="bold mt-5 col-md-12">Permanent Address</h2>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">House/Block/Lot No.</label>
                        <input
                            {...register('permanent.HouseNumber')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Street</label>
                        <input
                            {...register('permanent.Street')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Subdivision/Village</label>
                        <input
                            {...register('permanent.Village')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Barangay</label>
                        <input
                            {...register('permanent.Barangay')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">City/Municipality</label>
                        <input
                            {...register('permanent.Municipality')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">Province</label>
                        <input
                            {...register('permanent.Province')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">ZIP CODE</label>
                        <input
                            {...register('permanent.ZipCode')}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="col-md-6 mt-4">
                        <label htmlFor="">TELEPHONE NO</label>
                        <input
                            {...register('Telephone')}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">MOBILE NO</label>
                        <input
                            disabled
                            value={JSON.parse(userData).Phone}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mt-4">
                        <label htmlFor="">EMAIL ADDRESS (if any)</label>
                        <input
                            disabled
                            value={JSON.parse(userData).Email}
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <input
                        type="hidden"
                        {...register('permanent.Type')}
                        value="PermanentAddress"
                    />

                    <div className="mt-5 mb-4 d-flex aij jcc col-md-12">
                        <button
                            type="submit"
                            className="btn btn-outline-primary">
                            Update Personal Information
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
