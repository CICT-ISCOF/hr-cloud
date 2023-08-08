import React, {FC} from 'react'
import ShimmerEffect from '../../../components/Shimmer/ShimmerEffect'

type Props = {
    show: Boolean
}

export default function ShowAssignatoryPlaceholder(props: Props) {
    const rows = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {rows.map((i) => (
                <tr
                    key={i}
                    style={{
                        display: props.show === true ? 'table-row' : 'none',
                    }}
                    className="text-center">
                    <td>
                        <ShimmerEffect type="line" />
                    </td>
                    <td>
                        <div className="avatar avatar-sm">
                            <ShimmerEffect type="circle" />
                        </div>
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                    </td>
                    <td className="d-flex aic jcc">
                        <ShimmerEffect type="circle" />
                        <ShimmerEffect type="circle" />
                        <ShimmerEffect type="circle" />
                        <ShimmerEffect type="circle" />
                        <ShimmerEffect type="circle" />
                    </td>
                    <td>
                        <ShimmerEffect type="line" />
                    </td>
                    <td>
                        <ShimmerEffect type="line" />
                    </td>
                </tr>
            ))}
        </>
    )
}
