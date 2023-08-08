import React from 'react'
import {useForm} from 'react-hook-form'
import {Alert, Fire} from '../../../../components/Alerts/Alert'
import {Auth} from '../../../../services/auth.service'

type Props = {
    show: Boolean
    hide: Function
    refresh: Function
}

type Inputs = {
    Type: any
    NextCreditdays: any
}

export default function AddLeave(props: Props) {
    const [disabled] = React.useState(false)

    const submit = async () => {
        const data: Inputs = {
            Type: $('#Type').val(),
            NextCreditdays: $('#NextCreditdays').val(),
        }

        Fire(
            'This will add leave settings',
            'Do you wish to add leave settings?',
            'info',
            () => {
                const auth = new Auth('leave-settings')
                auth.create(data)
                    .then(() => {
                        Alert(
                            'Leave Settings Added',
                            'Leave Settings has been successfully set up',
                            'success',
                        )
                        props.refresh()
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Something went wrong. Try Again',
                            'error',
                        )
                    })
            },
        )
    }

    return (
        <tr
            style={{display: props.show == false ? 'none' : 'table-row'}}
            className="my-4 p-5 m-0 col-md-12 row">
            <th>
                <div className="circle circle-sm bg-light">
                    <i className="fe fe-tool text-muted"></i>
                </div>
                <span className="dot dot-md bg-success mr-1"></span>
            </th>
            <td>
                <select id="Type" className="form-control">
                    <option>Vacation</option>
                    <option>Sick</option>
                </select>
            </td>
            <td>
                <input
                    id="NextCreditdays"
                    type="text"
                    className="form-control"
                />
            </td>
            <th>
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                        submit()
                    }}
                    className="btn btn-dark">
                    {' '}
                    {disabled == true ? (
                        <div className="d-flex aic jcc">
                            <div
                                className="spinner-border spinner-border-sm  text-white"
                                role="status"
                            />
                        </div>
                    ) : (
                        'Submit'
                    )}
                </button>
            </th>
        </tr>
    )
}
