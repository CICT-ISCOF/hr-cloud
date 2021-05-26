import React from 'react'
import { useHistory } from "react-router-dom";
import { useDropzone } from 'react-dropzone'
import { Alert } from '../../Alerts/Alert';


export default function ApplicationStep5( props: any ) {

    const history = useHistory()

    const [ avatar, setavatar ]: any = React.useState( {} )

    function Avatar() {
        return (
            <div className="col-md-3 text-center mb-5" >
                <input id="file-input" type="file" onChange={( event: any ) => {
                    var reader = new FileReader();
                    reader.onload = ( e: any ) => {
                        $( '#avatar12' ).attr( 'src', e.target.result );
                    }
                    setavatar( event.target.files[ 0 ] )
                    reader.readAsDataURL( event.target.files[ 0 ] );
                }} style={{ display: 'none' }} />

                <div onClick={() => {
                    $( '#file-input' ).click()
                }} className="avatar avatar-xl">
                    <img id="avatar12" style={{ cursor: 'pointer' }} src="./assets/avatars/face-1.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
            </div>
        )
    }

    return (
        <div>
            <h3 className="mb-0">Professional Photo</h3>
            <p className="mt-0 text-muted">Click the image to browse photo</p>
            <div className="row mt-5 align-items-center">
                <Avatar />
                <div className="col">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h4 className="mb-1">Fuentevilla, Teddy Doe</h4>
                            <h3 className="text-muted  mt-0">Office of Management Information System</h3>
                            <p className="small mb-3"><span className="badge bg-success-lighter text-success p-1 br-2" style={{ fontWeight: 900, }}>Application as Developer</span></p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-7">
                            <p className="text-muted"> Bachelor or Science in Information Technology, Masters in Information Technology, Phd in Information Technology </p>
                        </div>
                        <div className="col">
                            <p className="small mb-0 text-muted">teddy@gmail.com</p>
                            <p className="small mb-0 text-muted">Vertically Alligned</p>
                            <p className="small mb-0 text-muted">0928-624-1875</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 mb-5 d-flex align-items-center justify-content-center mt-5'>
                    <button onClick={() => props.makeStep( 4 )} className='btn btn-outline-dark mx-2 px-md-5'>Prev</button>
                    <button onClick={() => {
                        if ( avatar != {} ) {
                            return Alert( 'Please Upload Your Professional Photo', 'Human Resources Management Office requires you to upload your distinguisable professional photo', 'error' )
                        }

                        props.data( avatar )

                        // history.push( 'home' )
                        // $( '.modal-backdrop' ).hide();
                    }} className='btn btn-outline-success mx-2 px-md-5'>Apply</button>
                </div>
            </div>

        </div>
    )
}
