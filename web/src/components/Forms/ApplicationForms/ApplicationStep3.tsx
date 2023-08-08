import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {route} from '../../../constants/base'
import {Alert} from '../../Alerts/Alert'

type Props = {
    step3: Function
    makeStep: Function
}

export default function ApplicationStep3(props: Props) {
    const [files, setfiles] = React.useState([])

    function DropZone() {
        const onDrop = useCallback((acceptedFiles) => {
            setfiles(acceptedFiles)
        }, [])
        const {getRootProps, getInputProps, isDragActive} = useDropzone({
            onDrop,
        })

        return (
            <div className="card shadow mb-4 mt-5" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="card-body">
                    <form
                        action="/file-upload"
                        className="dropzone bg-light rounded-lg"
                        id="tinydash-dropzone">
                        <div className="dz-message needsclick">
                            <div className="circle circle-lg bg-primary">
                                <i className="fe fe-upload fe-24 text-white"></i>
                            </div>
                            <h5 className="text-muted m-5">
                                Drag & Drop your Resume, CV, Application Letter,
                                Personal Data Sheet and other Supporting
                                Documents Here
                            </h5>
                        </div>
                    </form>
                    <div
                        className="dropzone-previews mt-3"
                        id="file-previews"></div>
                    <div className="d-none" id="uploadPreviewTemplate">
                        <div className="p-2">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img
                                        data-dz-thumbnail
                                        src="#"
                                        className="avatar-sm rounded bg-light"
                                        alt=""
                                    />
                                </div>
                                <div className="col pl-0">
                                    <a
                                        className="text-muted font-weight-bold"
                                        data-dz-name></a>
                                    <p className="mb-0" data-dz-size></p>
                                </div>
                                <div className="col-auto">
                                    <a
                                        href=""
                                        className="btn btn-link btn-lg text-muted"
                                        data-dz-remove>
                                        <i className="dripicons-cross"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h3 className="mb-0">Attachments</h3>
            <p className="text-muted mt-0 m-0">
                Upload your CV or Resume, Application letter and other
                Supporting Documents
            </p>
            <h6 className="text-danger small m-0">
                *Important Notice! Personal Data Sheet is required is required.
                No PDS invalid application
            </h6>
            <a
                href={route + '/Personal-Data-Sheet.xlsx'}
                target="_blank"
                className="btn btn-success mt-2  ">
                <i className="fe fe-download"></i> &nbsp; Download Personal Data
                Sheet Form
            </a>
            <DropZone />

            <table
                className="table"
                style={{display: files.length == 0 ? 'none' : 'table'}}>
                <thead className="table-info">
                    <tr>
                        <th className="text-info"></th>
                        <th className="text-info">Name</th>
                        <th className="text-info">Type</th>
                        <th className="text-info">Size</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file: any, index) => (
                        <tr key={index}>
                            <td>
                                <i className="fe fe-file text-primary"></i>
                            </td>
                            <td>{file.name}</td>
                            <td>{file.type}</td>
                            <td>{file.size} kb</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="col-12 mb-5 d-flex align-items-center justify-content-center mt-5">
                <button
                    style={{display: files.length == 0 ? 'none' : 'block'}}
                    onClick={() => setfiles([])}
                    className="btn btn-outline-danger mx-2 px-md-5">
                    Clear Files
                </button>

                <button
                    onClick={() => props.makeStep(2)}
                    className="btn btn-outline-dark mx-2 px-md-5">
                    Prev
                </button>
                <button
                    onClick={() => {
                        if (files.length == 0) {
                            return Alert(
                                'No Supporting Documents Found',
                                'Please make sure to upload Supporting Documents for better hiring chances',
                                'error',
                            )
                        }
                        props.makeStep(4)
                        props.step3(files)
                    }}
                    className="btn btn-dark mx-2 px-md-5">
                    Next
                </button>
            </div>
        </div>
    )
}
