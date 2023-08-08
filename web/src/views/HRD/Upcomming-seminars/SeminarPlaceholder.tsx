import React, {FC} from 'react'
import ShimmerEffect from '../../../components/Shimmer/ShimmerEffect'

type Props = {
    show: Boolean
}
const SeminarPlaceholder: FC<Props> = (props) => {
    const rows = [1, 2, 3, 4, 5, 6]
    return (
        <div
            className="p-5 row col-md-12"
            style={{display: props.show === true ? 'table-row' : 'none'}}>
            {rows.map((_: any, i: number) => (
                <div
                    key={i}
                    className="row col-md-12  card-body card ml-2 mr-2 mb-3 shadow">
                    <div className="w-25">
                        <ShimmerEffect type="title" />
                    </div>
                    <div className="w-50">
                        <ShimmerEffect type="line" />
                    </div>
                    <div className="w-25">
                        <ShimmerEffect type="line" />
                    </div>
                    <br />
                    <div className="w-25">
                        <ShimmerEffect type="line" />
                    </div>
                    <br />
                    <div className="w-50 d-flex">
                        <ShimmerEffect type="seminar-square" />
                    </div>
                    <br />
                    <div className="w-50 d-flex">
                        <ShimmerEffect type="circle" />
                        <ShimmerEffect type="circle" />
                        <ShimmerEffect type="circle" />
                    </div>
                    <br />
                </div>
            ))}
        </div>
    )
}
export default SeminarPlaceholder
