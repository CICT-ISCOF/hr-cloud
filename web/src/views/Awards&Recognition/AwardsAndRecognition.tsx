import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Alert, Fire } from '../../components/Alerts/Alert'
import { useForm } from 'react-hook-form';
import { Auth } from '../../services/auth.service';


type Inputs = {
    employee_id: any
    title: any
    description: any
}

export default function AwardsAndRecognition() {

    const { register, handleSubmit } = useForm<Inputs>();
    const userData: any = localStorage.getItem( 'user' )

    React.useEffect( () => {
        getEmployees()
    }, [] )

    const [ employees, setEmployees ] = React.useState( [] )
    async function getEmployees() {
        const api = new Auth( 'employees' );
        api.fetch( {} ).then( ( data: any ) => {
            setEmployees( data )
        } )
    }

    const [ files, setfiles ] = React.useState( [] )
    function DropZone() {
        const onDrop = useCallback( acceptedFiles => {
            setfiles( acceptedFiles )
        }, [] )

        const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } )
        return (
            <div className='card shadow mb-4 mt-5' {...getRootProps()}>
                <input id="awards" accept="image/*" {...getInputProps()} />
                <div className='card-body'>
                    <form action='/file-upload' className='dropzone bg-light rounded-lg' id='tinydash-dropzone'>
                        <div className='dz-message needsclick'>
                            <div className='circle circle-lg bg-dark'>
                                <i className='fe fe-upload fe-24 text-white'></i>
                            </div>
                            <h5 className='text-muted mt-4'>Drop files here or click to upload</h5>
                        </div>
                    </form>
                    <div className='dropzone-previews mt-3' id='file-previews'></div>
                    <div className='d-none' id='uploadPreviewTemplate'>
                        <div className='p-2'>
                            <div className='row align-items-center'>
                                <div className='col-auto'>
                                    <img data-dz-thumbnail src='#' className='avatar-sm rounded bg-light' alt='' />
                                </div>
                                <div className='col pl-0'>
                                    <a
                                        className='text-muted font-weight-bold'
                                        data-dz-name></a>
                                    <p className='mb-0' data-dz-size></p>
                                </div>
                                <div className='col-auto'>
                                    <a href='' className='btn btn-link btn-lg text-muted' data-dz-remove>
                                        <i className='dripicons-cross'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const submit = async ( data: any ) => {
        data[ 'files' ] = files
        console.log( data[ 'files' ] )
        const formData = new FormData()
        for ( let key in data ) {
            if ( key !== 'files' ) {
                formData.append( key, data[ key ] )
            }
        }
        let i = 0;
        for ( let index of data[ 'files' ] ) {
            formData.append( `files${ i }`, index )
            i += 1
        }
        Fire( 'Add an Award?', 'Are you sure you want to add an award to this employee?', 'info', () => {
            const api = new Auth( 'awards' );
            api.create( formData )
                .then( () => {
                    Alert( 'Award Added', 'Award of the employee has been successfully record', 'success' )
                    // setfiles( [] )
                } )
                .catch( () => {
                    Alert( 'Error', 'Something went Wrong', 'error' )
                } )
        } )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-6">
                <div className="card-deck">
                    <div className="card shadow mb-4">
                        <div className="card-header p-3">
                            <h2 className="card-title mt-2 mb-0">Award Form</h2>
                        </div>
                        <div className="card-body">
                            <div className="col-md-12 row">
                                <div className="col-md-12">
                                    <DropZone />
                                </div>
                                <div className="col-md-12 ">
                                    <form encType="multipart/form-data" onSubmit={handleSubmit( submit )}>
                                        <div className="card-body ">
                                            <div className="form-group col-md-12 mt-1">
                                                <label >Employee</label>
                                                <select className="form-control bg-light" >
                                                    {
                                                        employees.map( ( employee: any, index: any ) => (
                                                            <option value={employee.user.id} key={index}>
                                                                {employee.user.First} {employee.user.Middle} {employee.user.Last}
                                                            </option>
                                                        ) )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label >Award Title</label>
                                                <input  {...register( 'title' )} className="form-control bg-light" type="text" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label >Description</label>
                                                <textarea  {...register( 'description' )} className="form-control bg-light" />
                                            </div>
                                            <input type="hidden" value={JSON.parse( userData ).id}  {...register( 'employee_id' )} />
                                            <div className="form-group col-md-12 d-flex aic jcc mt-5">
                                                <button className="btn btn-outline-dark float-right">Save Award</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
