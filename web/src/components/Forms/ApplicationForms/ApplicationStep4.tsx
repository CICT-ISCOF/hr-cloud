import React from 'react'
import { Auth } from '../../../services/auth.service'
import { Alert } from '../../Alerts/Alert'

type Props = {
    step4: Function
    makeStep: Function
}

export default function ApplicationStep4( props: Props ) {

    const [ Email, setEmail ] = React.useState( '' )
    const [ Password, setPassword ] = React.useState( '' )
    const [ confirmPassword, setconfirmPassword ] = React.useState( '' )
    const [ verificationCode, setverificationCode ] = React.useState( '' )

    const verifyEmail = () => {
        const verification_code = random( 30 )
        setverificationCode( verification_code )
        const api = new Auth( 'verify-email' )
        api.create( { verification_code: verification_code, email: $( '#Email' ).val() } )
            .then( () => {
                Alert( 'Verification code has been sent to your email', 'Please copy the verification code below and paste it on the email verification form', 'success' )

            } ).catch( () => {
                Alert( 'Error', 'Email is badly formatted', 'error' )

            } )
    }

    function random( length: number ) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt( Math.floor( Math.random() *
                charactersLength ) );
        }
        return result;
    }

    return (
        <div>
            <h3>Sign-in</h3>
            <p>Credentials to track your employment</p>
            <section className='form-row mt-5'>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <div className="d-flex mb-3">
                        <label>Email</label>
                        <i style={{ display: verificationCode !== '' ? 'none' : '', cursor: 'pointer' }} onClick={() => { verifyEmail() }} title="Verify Email" className="fe fe-mail ml-auto mr-3"></i>
                    </div>
                    <input onChange={( e ) => setEmail( e.target.value )} id="Email" type='email' required className='form-control' />
                    <h6 style={{ display: verificationCode !== '' ? 'none' : '' }} className="text-danger-lighter mt-2 small">* This field is required. Please click the email icon to verify your email addreess so that we can inform you if you were shortlisted.</h6>
                    <h6 style={{ display: verificationCode === '' ? 'none' : '' }} className="text-info mt-2 small">
                        We have send a verification code to your email.
                        <a style={{ cursor: 'pointer' }} className="h6 btn-link text-muted" onClick={() => { verifyEmail() }} > Resend code</a>
                    </h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label className="mb-4">Password</label>
                    <input onChange={( e ) => setPassword( e.target.value )} id="password" type='password' required className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>
                <div className='form-group mb-3 col-12 col-md-4'>
                    <label className="mb-4">Confirm Password</label>
                    <input onChange={( e ) => setconfirmPassword( e.target.value )} id="confirm-password" type='password' required className='form-control' />
                    <h6 className="text-danger-lighter mt-2 small">* This field is required</h6>
                </div>

                <div style={{ display: verificationCode === '' ? 'none' : '' }} className='form-group mb-3 col-12 col-md-4'>
                    <label className="mb-4">Enter Email Verification Code</label>
                    <input id="verification" required className='form-control' />
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => props.makeStep( 3 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button onClick={() => {
                        $( 'input, textarea, select' ).removeClass( 'is-invalid' ).removeClass( 'is-valid' )

                        if ( confirmPassword != Password ) {
                            Alert( 'Try Again', 'Your Password does not match', 'error' )
                            $( '#confirm-Password, #Password' ).addClass( 'is-invalid' )
                            return
                        }
                        $( '#confirm-Password, #Password' ).removeClass( 'is-invalid' )
                        $( '#confirm-Password, #Password' ).addClass( 'is-valid' )
                        const data: any = {
                            Email: Email,
                            Password: Password,
                            confirmPassword: confirmPassword,
                        }
                        for ( let key in data ) {
                            if ( key != 'alignment' ) {
                                if ( data[ key ] == "" ) {
                                    $( `#${ key }` ).addClass( 'is-invalid' )
                                    Alert( 'Check Again', 'One or more fields should not be empty', 'error' )
                                    return
                                }
                                else {
                                    $( `#${ key }` ).addClass( 'is-valid' )
                                }
                            }
                        }
                        if ( verificationCode === '' ) {
                            Alert( 'Verify your email!', 'Please click the email icon to verify your email', 'error' )
                            return
                        }
                        if ( $( '#verification' ).val() !== verificationCode ) {
                            Alert( 'Verification does not match', 'Please enter the verification code that we send to your email', 'error' )
                            $( `#verification` ).addClass( 'is-invalid' )
                            return
                        }
                        props.step4( data )
                        props.makeStep( 5 )
                    }} className='btn btn-dark mx-2 px-md-5'>Next</button>
                </div>
            </section>
        </div>
    )
}
