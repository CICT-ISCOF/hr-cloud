import React from 'react'
import { Alert, Fire } from '../../../../components/Alerts/Alert'
import { hide } from '../../../../constants/constant-helper'
import { useForm } from 'react-hook-form';
import { Auth } from '../../../../services/auth.service';

type Inputs = {
    employee_id: any
    Office: any
    Spent: any
    SpecialPrivilege: any
    VacationDetails: any
    SpecialPrivilegeVacation: any
    IncaseofSickLeave: any
    IncaseofVacationLeave: any
    SpecifyLocationinAbroad: any
    SpecifyHospital: any
    Days: any
    Comutation: any
    From: any
    To: any
    Approved: any
    Vacation: any
    Specify: any
}

export default function ApplicationForLeave() {

    const userData: any = localStorage.getItem( 'user' )
    const [ spend, setSpend ] = React.useState( '' )
    const [ vacation, setvacation ] = React.useState( '' )
    const [ location, setlocation ] = React.useState( '' )
    const [ hospital, sethospital ] = React.useState( '' )

    const { register, handleSubmit } = useForm<Inputs>();

    const submit = async ( data: Inputs ) => {
        console.log( data )
        Fire(
            'Submit Leave Application?',
            'This will be subject for approval from the administrative officer and other related personnels',
            'info',
            () => {

                const api = new Auth( 'application-for-leave' )
                api.create( data ).then( () => {
                    Alert( 'Application for Leave Submitted', 'Your Leave application has been successfully submitted', 'success' )
                } )
                    .catch( () => {
                        Alert( 'Error', 'Something went wrong. Try Again', 'error' )
                    } )
            }
        )
    }
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 card p-5">
                <form onSubmit={handleSubmit( submit )}>
                    <div className="card card-body"><
                        br />
                        <h5 className="text-center bold">APPLICATION FOR LEAVE</h5>
                        <br />
                        <div className="row mb-4">
                            <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'employee_id' )} />
                            <div className="col-md-12 mb-4">
                                <label >OFFICE/AGENCY</label>
                                <input {...register( 'Office' )} value="Iloilo State College of Fisheries" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <label >(Last)</label>
                                <input value={JSON.parse( userData ).Last} disabled type="text" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <label >(Given)</label>
                                <input value={JSON.parse( userData ).First} disabled type="text" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <label >(Middle) </label>
                                <input value={JSON.parse( userData ).Middle} disabled type="text" className="form-control" />
                            </div>
                        </div>

                        <h6 className="bold  text-danger">DETAILS OF APPLICATION</h6>
                        <h6 className="bold mt-2 mb-4 text-primary">TYPE OF LEAVE</h6>
                        <div className="row mb-4">
                            <div className="col-md-3 mb-4">
                                <label >SPENT</label>
                                <select {...register( 'Spent' )} onChange={( e ) => {
                                    setSpend( e.target.value )
                                    setvacation( "" )
                                    setlocation( "" )
                                    sethospital( "" )
                                }} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>Vacation</option>
                                    <option>Sick</option>
                                    <option>Maternity</option>
                                    <option>Special Privilege</option>
                                    <option>Others, specify</option>
                                </select>
                            </div>
                            <div style={hide( spend != 'Vacation' )} className="col-md-3 mb-4">
                                <label >Vacation Details</label>
                                <select {...register( 'Vacation' )} onChange={( e ) => {
                                    setvacation( e.target.value )
                                }} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>To seek employment</option>
                                    <option>Sick</option>
                                    <option>Maternity</option>
                                    <option>Special Privilege</option>
                                    <option>Others, specify</option>
                                </select>
                            </div>
                            {/* diri  */}
                            <div style={hide( vacation != 'Others, specify' )} className="col-md-6 mb-4">
                                <label >Specify Vacation </label>
                                <input {...register( 'VacationDetails' )} className="form-control" />
                            </div>
                            {/* diri  */}
                            <div style={hide( spend != 'Others, specify' )} className="col-md-9 mb-4">
                                <label >Specify spent</label>
                                <input  {...register( 'Specify' )} className="form-control" />
                            </div>
                            <div style={hide( spend != 'Special Privilege' )} className="col-md-3 mb-4">
                                <label >Special Privilege</label>
                                <select {...register( 'SpecialPrivilege' )} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>Birthday</option>
                                    <option>Enrollment</option>
                                    <option>Filial</option>
                                    <option>Government Transaction</option>
                                    <option>Special Privilege</option>
                                    <option>Graduation</option>
                                    <option>Hospitalization</option>
                                    <option>Mourning</option>
                                    <option>Relocation</option>
                                    <option>Wedding Anniversary</option>
                                </select>
                            </div>
                            <div style={hide( vacation != 'Special Privilege' )} className="col-md-6 mb-4">
                                <label >Special Privilege</label>
                                <select {...register( 'SpecialPrivilegeVacation' )} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>Birthday</option>
                                    <option>Enrollment</option>
                                    <option>Filial</option>
                                    <option>Government Transaction</option>
                                    <option>Special Privilege</option>
                                    <option>Graduation</option>
                                    <option>Hospitalization</option>
                                    <option>Mourning</option>
                                    <option>Relocation</option>
                                    <option>Wedding Anniversary</option>
                                </select>
                            </div>
                        </div>

                        <h6 style={hide( spend != 'Vacation' )} className="bold mt-2 mb-4 text-primary">WHERE LEAVE WILL BE</h6>
                        <h6 style={hide( spend != 'Sick' )} className="bold mt-2 mb-4 text-primary">WHERE LEAVE WILL BE</h6>
                        <div className="row mb-4">
                            <div style={hide( spend != 'Vacation' )} className="col-md-3 mb-4">
                                <label >In case of Vacation Leave</label>
                                <select {...register( 'IncaseofVacationLeave' )} onChange={( e ) => {
                                    setlocation( e.target.value )
                                }} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>Within the Philippines</option>
                                    <option>Specify Abroad</option>
                                </select>
                            </div>
                            <div style={hide( location != 'Specify Abroad' )} className="col-md-9 mb-4">
                                <label >Specify Location in Abroad</label>
                                <input {...register( 'SpecifyLocationinAbroad' )} className="form-control" />
                            </div>
                            {/* diri  */}
                            <div style={hide( spend != 'Sick' )} className="col-md-3 mb-4">
                                <label >In case of Sick Leave</label>
                                <select {...register( 'IncaseofSickLeave' )} onChange={( e ) => {
                                    sethospital( e.target.value )
                                }} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>Out Patient</option>
                                    <option>Specify Hospital</option>
                                </select>
                            </div>
                            <div style={hide( hospital != 'Specify Hospital' )} className="col-md-9 mb-4">
                                <label >Specify Hospital </label>
                                <input {...register( 'SpecifyHospital' )} className="form-control" />
                            </div>
                        </div>



                        <h6 className="bold mt-2 mb-4 text-primary">NUMBER OF DAYS APPLIED FOR</h6>
                        <div className="row mb-4">
                            <div className="col-md-3 mb-4">
                                <label >Days</label>
                                <input {...register( 'Days' )} placeholder="0" className="form-control" />
                            </div>
                        </div>

                        <h6 className="bold mt-2 mb-4 text-primary">COMUTATION</h6>
                        <div className="row mb-4">
                            <div className="col-md-3 mb-4">
                                <label >Select Comutation</label>
                                <select {...register( 'Comutation' )} className="form-control" >
                                    <option selected disabled value="">Choose..</option>
                                    <option>Requested</option>
                                    <option>Not Requested</option>
                                </select>
                            </div>
                        </div>


                        <h6 className="bold  text-danger">DETAILS OF ACTION TAKEN</h6>
                        <div className="row mb-4">
                            <div className="col-md-3 mb-4">
                                <label >As of</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-3 mb-4">
                                <label >Vacation</label>
                                <input value="0" disabled type="text" className="form-control" />
                            </div>
                            <div className="col-md-3 mb-4">
                                <label >Sick</label>
                                <input value="0" disabled type="text" className="form-control" />
                            </div>
                            <div className="col-md-3 mb-4">
                                <label >Total</label>
                                <input value="0" disabled type="text" className="form-control text-success bold" />
                            </div>
                        </div>

                        <div className="mt-5 mb-4 d-flex aij jcc">
                            <button className="btn btn-outline-primary">Submit Leave Application</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
