import React, {FC} from 'react'
import ShimmerEffect from '../../../components/Shimmer/ShimmerEffect'

type Props = {
    show: Boolean
}

const ApplicantPlaceholders: FC<Props> = (props) => {
    const rows = [1, 2, 3, 4, 5, 6]
    return (
        <>
            {rows.map((_: any, i: any) => (
                <tr
                    key={i}
                    style={{
                        display: props.show === true ? 'table-row' : 'none',
                    }}>
                    <td>
                        <div className="avatar avatar-sm">
                            <ShimmerEffect type="circle" />
                        </div>
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                        <ShimmerEffect type="line" />
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                        <ShimmerEffect type="line" />
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                        <ShimmerEffect type="line" />
                    </td>
                    <td>
                        <ShimmerEffect type="title" />
                        <ShimmerEffect type="line" />
                    </td>
                    <td className=" text-center">
                        <ShimmerEffect type="line" />
                    </td>
                    <td className="text-right">
                        <ShimmerEffect type="line" />
                    </td>
                    <td className="text-right">
                        <ShimmerEffect type="line" />
                    </td>
                    <td className="text-right">
                        <ShimmerEffect type="line" />
                    </td>
                </tr>
            ))}
        </>
    )
}

export default ApplicantPlaceholders
