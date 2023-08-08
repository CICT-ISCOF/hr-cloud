import React, {FC} from 'react'
import ShimmerEffect from '../../components/Shimmer/ShimmerEffect'

type Props = {
    show: Boolean
}

const SupervisorPlaceholder: FC<Props> = (props) => {
    const rows = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {rows.map((_: any, i: number) => (
                <tr
                    key={i}
                    style={{
                        display: props.show === true ? 'table-row' : 'none',
                    }}>
                    <td>
                        <ShimmerEffect type="title" />
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                    </td>
                    <td>
                        <ShimmerEffect type="circle" />
                    </td>
                    <td>
                        <ShimmerEffect type="line" />
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                    </td>
                </tr>
            ))}
        </>
    )
}
export default SupervisorPlaceholder
