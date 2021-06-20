import React from 'react'
import { Alert, Fire } from '../../../../components/Alerts/Alert'
import FullScreenModal from '../../../../components/Modals/FullScreenModal'
import Pagination from '../../../../components/Table/Pagination'
import { Auth } from '../../../../services/auth.service'
import ApplicationForLeaveSheet from './CSCForm/ApplicationForLeaveSheet'
import LeavesPlaceholders from './Placeholders/LeavesPlaceholders'

export default function Leaves() {


    const [ add, setadd ] = React.useState( false )
    const [ modal, setModal ] = React.useState( <div></div> )

    const [ leave, setleave ]: any = React.useState( [] )

    React.useEffect( () => {
        getLeaves()
    }, [] )

    function getLeaves() {
        const api = new Auth( 'application-for-leave' )
        api.fetch( {} ).then( ( data ) => {
            setleave( data )
        } )
    }

    return (
        <div>
            <div className="col-md-12 my-4">
                <h2 className=" mb-1">Leaves</h2>
                <p className="mb-3 text-muted">Displaying List of Leaves in descending order</p>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="toolbar">
                            <form className="form">
                                <div className="form-row">
                                    <div className="form-group col-auto">
                                        <label className="sr-only">Search</label>
                                        <input type="text" className="form-control" id="search1" value="" placeholder="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <table className="table table-borderless table-hover">
                            <thead className="table-success">
                                <tr role="row">
                                    <th className="text-success"><i className="fe fe-user"></i></th>
                                    <th className="text-success">Name</th>
                                    <th className="text-success">Type</th>
                                    <th className="text-success">Days</th>
                                    <th className="text-success">With Pay</th>
                                    <th className="text-success">Commutation</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <LeavesPlaceholders show={leave.length !== 0 ? false : true} />
                                {
                                    leave.map( ( leave: any, index: number ) => (
                                        <tr>
                                            <th scope="col">
                                                <div className="avatar avatar-sm">
                                                    <img src={leave.user.Avatar} alt="..." className="avatar-img rounded-circle" />
                                                </div>
                                            </th>
                                            <td>
                                                <p className="mb-0 text-muted">
                                                    <strong>
                                                        {leave.user.Last} {leave.user.First} {leave.user.Middle}
                                                    </strong>
                                                </p>
                                                <p className="small mb-3"><span className="badge badge-success text-white p-1 br-2" style={{ fontWeight: 900, }}>{leave.employee.Position}</span></p>
                                            </td>
                                            <td>{leave.Spent}</td>
                                            <td>{leave.Days}</td>
                                            <td><span className="text-success">Yes</span></td>
                                            <td>{leave.Comutation}</td>
                                            <td>
                                                <button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="text-muted sr-only">Action</span>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button
                                                        onClick={() => {
                                                            console.log( leave )
                                                            setModal(
                                                                <ApplicationForLeaveSheet
                                                                    data={leave}
                                                                />
                                                            )
                                                        }}
                                                        data-toggle='modal'
                                                        data-target=".modal-full"
                                                        role="butoon" className="dropdown-item" >View Leave Details</button>
                                                    <button
                                                        onClick={() => {
                                                            Fire(
                                                                'Remove Leave Application?',
                                                                'Are you sure you want to remove this leave application?',
                                                                'warning',
                                                                () => {
                                                                    const api = new Auth( 'application-for-leave' )
                                                                    api.delete( leave.id ).then( ( data ) => {
                                                                        Alert( 'Application Removed', 'Leave application has been romved', 'success' )
                                                                        getLeaves()
                                                                    } )
                                                                        .catch( () => {
                                                                            Alert( 'Error!', 'Something went wrong. Try again', 'error' )

                                                                        } )
                                                                }
                                                            )
                                                        }}
                                                        role="butoon" className="dropdown-item" >Remove Application</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) )
                                }
                            </tbody>
                        </table>
                    </div >
                </div >
            </div >
            <FullScreenModal>
                {modal}
            </FullScreenModal>
        </div >
    )
}
