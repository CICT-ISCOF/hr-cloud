import React from 'react'

export default function VolountaryWork() {
    
    const workExperience = [
        1,2,3,4,5,6,
    ]
    
    return (
        <div>
            <div className="title ">
                <i className="text-white main">
                    V. VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE / VOLUNTARY ORGANIZATION/S
                </i>
            </div>
            <div className="box row sub-title m-0 p-0 m-0 p-0">
                <div className="col-md-5 row sub-title m-0 p-0 d-flex aic jcc nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">29. &nbsp;NAME & ADDRESS OF ORGANIZATION <br />(Write in full)</p>
                </div>
                
                <div className="col-md-2 m-0 p-0 row sub-title m-0 p-0 d-flex aic jcc nbl nbr nbb nbt">
                    <div className="row p-0 m-0">
                        <p className="m-0 mb-0 text-center fs-sm col-md-12 border-bottom p-1 nbt mt-0 " >
                            26.&nbsp;INCLUSIVE DATES <br /> 
                            (mm/dd/yyyy)
                        </p>
                        <p className="m-0 mb-0 text-center fs-sm col-md-6 box nbl nbr nbb nbt">&nbsp;From</p>
                        <p className="m-0 mb-0 text-center fs-sm col-md-6 box nbr nbb nbt">&nbsp;To</p>
                    </div>
                </div>
                
                <div className="col-md-1 row sub-title m-0 p-0 d-flex aic jcc nbr nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">&nbsp;NUMBER OF HOURS</p>
                </div>
                
                <div className="col-md-4 row sub-title m-0 p-0 d-flex aic jcc nbb nbt">
                    <p className="m-0 mb-0 pb-0 text-center fs-sm">&nbsp;DEPARTMENT / AGENCY / OFFICE / COMPANY <br />(Write in full/Do not abbreviate)</p>
                </div>
                {
                    workExperience.map(()=>(
                            <div className="col-md-12 row p-0 m-0">
                                <div className="col-md-5 row  m-0 p-0 d-flex aic nbr jcc bt bl br  p-1i bg-white">
                                    <p className="m-0 mb-0 pb-0 text-center fs-sm">
                                        N/A
                                    </p>
                                </div>
                                
                                <div className="col-md-2 m-0 p-0 row m-0 p-0 d-flex aic nbr jcc bt blp-1i bg-white">
                                    <div className="row p-0 m-0">
                                        <p className="m-0 mb-0 text-center fs-sm col-md-6  nbl nbr nbb nbt">N/A</p>
                                        <p className="m-0 mb-0 text-center fs-sm col-md-6  nbr nbb nbt">N/A</p>
                                    </div>
                                </div>  
                                
                                <div className="col-md-1 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                                    <p className="m-0 mb-0 pb-0 text-center fs-sm">N/A</p>
                                </div>
                                
                                <div className="col-md-4 row m-0 p-0 d-flex aic nbr jcc bt bl   p-1i bg-white">
                                    <p className="m-0 mb-0 pb-0 text-center fs-sm">N/A</p>
                                </div>
                            </div>
                   ))
                }
                   
                <div className="col-md-12 m-0 p-0 row border-bottom  cl sub-title  nbr nbb aic jcc d-flex bt" style={{flex:1,maxWidth:'100%'}}>
                    <p className="m-0 p-0 text-center d-flex aic jcc">
                        <i  className="text-center text-danger bold">(Continue on separate sheet if necessary)</i>
                    </p>
                </div>
            </div>
        </div>
    )
}
