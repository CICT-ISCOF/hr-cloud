import React from 'react'
import './ICPR.css'
import '../Doc.css'

type Props = {
    data: any
}

export default function ICPRPage2(props: Props) {
    return (
        <div className="bg-white landscape docs h-auto icpr">
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th className="bordered text-dark">OUTPUT</th>
                        <th className="bordered text-dark">
                            Success Indicators(Targets + Measures)
                        </th>
                        <th className="bordered text-dark">
                            Actual accomplishments
                        </th>
                        <th
                            className="bordered text-dark"
                            colSpan={4}
                            style={{border: 0}}>
                            <p className="text-center">Rating</p>
                            <div
                                className="row"
                                style={{
                                    flex: 1,
                                    transform: 'translateY(13px)',
                                }}>
                                <span
                                    className="col-md-3 qeta"
                                    style={{borderLeft: 0}}>
                                    {' '}
                                    Q{' '}
                                </span>
                                <span className="col-md-3 qeta"> E </span>
                                <span className="col-md-3 qeta"> T </span>
                                <span
                                    className="col-md-3 qeta"
                                    style={{borderRight: 0}}>
                                    {' '}
                                    A
                                </span>
                            </div>
                        </th>
                        <th className="text-center bordered text-dark">
                            Remarks
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr className="bordered">
                        <td colSpan={8}>
                            {' '}
                            <p className="mt-3 w-100">STRATEGIC PRIORITY</p>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.data.rating_details.map((data: any, index: any) => (
                        <tr
                            key={index}
                            className="bordered"
                            style={{
                                display:
                                    data.Type == 'StrategicPriority'
                                        ? ''
                                        : 'none',
                            }}>
                            <td className="bordered">{data.Output}</td>
                            <td className="bordered">
                                {data.SuccessIndicatiors}
                            </td>
                            <td className="bordered">
                                {data.ActualAccomplishments || ''}
                            </td>
                            <td className="bordered">{data.Q}</td>
                            <td className="bordered">{data.E}</td>
                            <td className="bordered">{data.T}</td>
                            <td className="bordered">{data.A}</td>
                            <td className="bordered">{data.Remarks || ''}</td>
                        </tr>
                    ))}
                </tbody>
                <thead className="bordered">
                    <tr>
                        <td colSpan={8}>
                            {' '}
                            <p className="mt-3 w-100">CORE FUNCTIONS</p>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.data.rating_details.map((data: any, index: any) => (
                        <tr
                            key={index}
                            className="bordered"
                            style={{
                                display:
                                    data.Type != 'StrategicPriority'
                                        ? ''
                                        : 'none',
                            }}>
                            <td className="bordered">{data.Output}</td>
                            <td className="bordered">
                                {data.SuccessIndicatiors}
                            </td>
                            <td className="bordered">
                                {data.ActualAccomplishments || ''}
                            </td>
                            <td className="bordered">{data.Q}</td>
                            <td className="bordered">{data.E}</td>
                            <td className="bordered">{data.T}</td>
                            <td className="bordered">{data.A}</td>
                            <td className="bordered">{data.Remarks || ''}</td>
                        </tr>
                    ))}
                </tbody>
                <br />
            </table>
            <table className="table">
                <thead>
                    <tr>
                        <td className="bordered" colSpan={8}>
                            {' '}
                            <p className="mt-3 w-100">
                                Comments and Recommendations for Development
                                Purposes
                            </p>
                        </td>
                    </tr>
                </thead>
                <thead className="table-light">
                    <tr>
                        <th className="bordered text-dark">Discussed with:</th>
                        <th className="bordered text-dark">Date</th>
                        <th className="bordered text-dark">Assessed by:</th>
                        <th className="bordered text-dark">Date</th>
                        <th className="bordered text-dark">
                            Final Rating by:{' '}
                        </th>
                        <th className="bordered text-dark">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center bold underlined bordered">
                            {props.data.DiscussedBy}
                        </td>
                        <td
                            className="text-center bold underlined bordered"
                            rowSpan={2}>
                            {props.data.DiscussedByDate}
                        </td>
                        <td className="text-center bold underlined bordered">
                            {props.data.AssessedBy}
                        </td>
                        <td
                            className="text-center bold underlined bordered"
                            rowSpan={2}>
                            {props.data.AssessedByDate}
                        </td>
                        <td className="text-center bold underlined bordered">
                            {props.data.FinalRating}
                        </td>
                        <td
                            className="text-center bold underlined bordered"
                            rowSpan={2}>
                            {props.data.FinalRatingDate}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-secodary bordered">Employee</td>
                        <td className="text-secodary bordered">Supervisor</td>
                        <td className="text-secodary bordered">
                            Head of Agency
                        </td>
                    </tr>
                </tbody>
                <thead>
                    <tr className="bordered">
                        <td colSpan={2}>Legend :</td>
                        <td className="bordered">Q-Quality</td>
                        <td className="bordered">E-Efficiency</td>
                        <td className="bordered">T-Timeless</td>
                        <td className="bordered">A-Average</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
