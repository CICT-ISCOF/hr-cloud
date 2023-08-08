import React, {FC} from 'react'
import ShimmerEffect from '../../components/Shimmer/ShimmerEffect'

type Props = {
    show: Boolean
}
const AwardListPlaceholder: FC<Props> = (props) => {
    const rows = [1, 2, 3, 4, 5, 6]
    return (
        <div
            className="pb-3 timeline-item item-success col-md-12"
            style={{display: props.show === true ? 'table-row' : 'none'}}>
            {rows.map((_: any, i: number) => (
                <div
                    key={i}
                    className="row col-md-12  card-body card  ml-2 mr-2 mb-3 "
                    style={{border: 'none'}}>
                    <ShimmerEffect type="title" />
                    <ShimmerEffect type="line" />
                    <ShimmerEffect type="line" />
                    <div className="w-25">
                        <ShimmerEffect type="line" />
                    </div>
                    <br /> <br />
                    <div className="w-50 d-flex">
                        <ShimmerEffect type="seminar-square" />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default AwardListPlaceholder
