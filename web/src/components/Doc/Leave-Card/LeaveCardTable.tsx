import React from 'react'
import {toDate} from '../../../helpers'
import LargeModal from '../../Modals/LargeModal'
import LeaveModal from './LeaveModal'

type LeaveCard = {
    id: any
    Year: any
    Month: any
    Particulars1: any
    Particulars2: any
    VacationEarned: any
    SickEarned: any
    ServiceCreditEarned: any
    WithPayVacation: any
    WithPayLeave: any
    WithPayServiceCredit: any
    BalanceVacation: any
    BalanceLeave: any
    BalanceServiceCredit: any
    WithoutPayVacation: any
    WithoutPayLeave: any
    DateAndActionTaken1: any
    DateAndActionTaken2: any
}

export default function LeaveCardTable(props: {
    data: any[]
    refresh: Function
}) {
    const {data} = props

    const [modal, setmodal] = React.useState(<div></div>)

    return (
        <>
            <div className="d-flex aic jcc " style={{flexDirection: 'column'}}>
                <div className="bg-white card-body shadow docs service-record">
                    <p className="text-center m-0">
                        Republic of the Philippines
                    </p>
                    <p className="text-center m-0 bold text-primary">
                        ILOILO STATE COLLEGE OF FISHERIES{' '}
                    </p>
                    <p className="text-center m-0"> MAIN POBLACION CAMPUS</p>
                    <p className="text-center m-0">
                        Poblacion, Barotac Nuevo, Iloilo
                    </p>
                    <br />
                    <p className="text-center m-0 bold">EMPLOYEE LEAVE CARD</p>
                    <br />
                    <div className="row">
                        <div className="col-md-5 row">
                            <div className="col-md-2"> Name: </div>
                            <div className="col-md-10">
                                <p className="underlined text-left bold">
                                    {data[0].user.First} {data[0].user.Middle}{' '}
                                    {data[0].user.Last}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 row">
                            <div className="col-md-4">Date of Birth:</div>
                            <div className="col-md-8">
                                <p className="underlined text-left bold">
                                    {data[0].employee.DOB}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 row">
                            <div className="col-md-2">Position:</div>
                            <div className="col-md-10">
                                <p className="underlined text-left bold">
                                    {data[0].employee.Position}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 row">
                            <div className="col-md-4">
                                First day of Service:
                            </div>
                            <div className="col-md-8">
                                <p className="underlined text-left bold">
                                    {toDate(data[0].employee.FirstDay)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td className="text-center p-2" colSpan={2}>
                                    PERIOD
                                </td>
                                <td className="text-center p-2" rowSpan={2}>
                                    PARTICULARS
                                </td>
                                <td className="text-center p-2" colSpan={4}>
                                    VACATION LEAVE
                                </td>
                                <td className="text-center p-2" colSpan={4}>
                                    SICK LEAVE
                                </td>
                                <td className="text-center p-2" rowSpan={2}>
                                    Date and <br /> Action Taken
                                    <br /> on <br />
                                    Application <br />
                                    for Leave
                                </td>
                                <td className="text-center p-2"></td>
                                <td className="text-center p-2" colSpan={3}>
                                    SERVICE CREDIT
                                </td>
                                <td className="text-center p-2" rowSpan={2}>
                                    Date and <br /> Action Taken
                                    <br /> on Application
                                    <br /> for Leave
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2">YEAR</td>
                                <td className="p-2">MONTH</td>
                                <td className="p-2">Earned</td>
                                <td className="p-2">
                                    Absence Undertime W/ Pay
                                </td>
                                <td className="p-2">Balance</td>
                                <td className="p-2">
                                    Absence Undertime W/o Pay
                                </td>
                                <td className="p-2">Earned</td>
                                <td className="p-2">
                                    Absence Undertime W/ Pay
                                </td>
                                <td className="p-2">Balance</td>
                                <td className="p-2">
                                    Absence Undertime W/o Pay
                                </td>
                                <td className="p-2">PARTICULARS</td>
                                <td className="p-2">Earned</td>
                                <td className="p-2">
                                    Absence Undertime W/ Pay
                                </td>
                                <td className="p-2">Balance</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={5}></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td className="p-3"></td>
                                <td></td>
                            </tr>
                            {props.data.map((leave: LeaveCard, index: any) => (
                                <React.Fragment key={index}>
                                    <tr key={index}>
                                        <td className="p-2">{leave.Year}</td>
                                        <td className="p-2">{leave.Month}</td>
                                        <td className="p-2">
                                            {leave.Particulars1}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.VacationEarned}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.WithPayVacation}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.BalanceVacation}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.WithoutPayVacation}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.SickEarned}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.WithPayLeave}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.BalanceLeave}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.WithoutPayLeave}
                                        </td>
                                        <td className="p-2">
                                            {leave.DateAndActionTaken1}
                                        </td>
                                        <td className="p-2">
                                            {leave.Particulars2}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.ServiceCreditEarned}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.WithPayServiceCredit}
                                        </td>
                                        <td className="p-2 text-right">
                                            {leave.BalanceServiceCredit}
                                        </td>
                                        <td className="p-2">
                                            {leave.DateAndActionTaken2}
                                        </td>
                                        <td>
                                            <button
                                                className="btn fe fe-24 fe-edit"
                                                type="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                <span className="text-muted sr-only">
                                                    Action
                                                </span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <button
                                                    onClick={() => {
                                                        setmodal(
                                                            <LeaveModal
                                                                refresh={() => {
                                                                    props.refresh()
                                                                }}
                                                                leave={leave}
                                                            />,
                                                        )
                                                    }}
                                                    data-toggle="modal"
                                                    data-target=".large-modal"
                                                    role="butoon"
                                                    className="dropdown-item">
                                                    Edit
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <LargeModal>{modal}</LargeModal>
        </>
    )
}
