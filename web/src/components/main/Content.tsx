import React from 'react'
import Applicants from '../../views/Users/Applicants/Applicants'
import Settings from '../../views/Settings/Settings'

export default function Content( props: any ) {
    return (
        <div>
            <main role="main" className="main-content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <Settings />
                            {/* <Applicants /> */}



                            {/* {props.children} */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
