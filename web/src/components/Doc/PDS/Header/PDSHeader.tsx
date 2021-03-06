import React from 'react'

export default function PDSHeader() {
    return (
        <div>
            <i><p className="m-0 bold">CS Form No. 212</p></i>
            <i><p className="m-0 bold">Revised 2017</p></i>
            <h2 className="text-center" style={{ fontWeight: 900, fontSize: '1.5rem', marginTop: '-6px', marginBottom: 0 }}>PERSONAL DATA SHEET</h2>
            <p className="m-0 bold mt-1">
                <i>
                    WARNING: Any misrepresentation made in the Personal Data Sheet and the Work Experience Sheet shall cause the filing of administrative/criminal case/s against the person concerned.
                </i>
            </p>
            <br />
            <p className="m-0 bold">
                <i>READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET (PDS) BEFORE ACCOMPLISHING THE PDS FORM.</i>
            </p>
            <div className="row">
                <div className="col-md-8" style={{ fontSize: '.5rem' }}>
                    Print legibly. Tick appropriate boxes ( <input type="checkbox" disabled style={{ transform: 'translateY(3px)' }} /> ) and use separate sheet if necessary. Indicate N/A if not applicable.  DO NOT ABBREVIATE.
                </div>
                <div className="col-md-4 row p-0 ml-2"  >
                    <div className="col-md-3 title p-t m-0 nbb" style={{ width: '100px' }}>1. CS ID No.
                    </div>
                    <div className="col-md-8 box nbr text-right p-t m-0" >(Do not fill up. For CSC use only)</div>
                </div>
            </div>
        </div>
    )
}
