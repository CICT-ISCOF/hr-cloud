import PDSHeader from './Header/PDSHeader'
import './PDS.css'
import '../Doc.css'
import PersonalInformation from './PDSPage1/PersonalInformation'
import PDSPage2 from './PDSPage2/PDSPage2'
import PDSPage3 from './PDSPage3/PDSPage3'
import PDSPage4 from './PDSPage4/PDSPage4'
import React, { useRef } from 'react';
import PrintComponents from 'react-print-components'
import { Auth } from '../../../services/auth.service'
import * as interfaces from './PDSInterface'

export default function PDS() {

    const [ data, setData ]: any = React.useState<interfaces.PDS>()
    const userData: any = localStorage.getItem( 'user' )

    React.useEffect( () => {
        getPDS()
    }, [] )

    function getPDS() {
        const api = new Auth( 'pds' )
        api.fetchOne( JSON.parse( userData ).id )
            .then( ( data ) => {
                setData( data )
                setComponent(
                    <div className="bg-white portrait-pds pds">
                        <div className="PDSBorder">
                            <PDSHeader />
                            <PersonalInformation
                                User={data.user}
                                PesonsalInformation={data.personal_information}
                                Resedential={data.residential_address}
                                Permanent={data.permanent_address}
                                FamilyBackground={data.family_background}
                                Children={data.children}
                                Elementary={data.elementary}
                                Secondary={data.secondary}
                                College={data.college}
                                Vocational={data.vocational}
                                GraduateStudies={data.graduate_studies}
                            />
                        </div>
                    </div>
                )
            } )
    }


    function changeTab( tab: number ) {
        if ( tab === 1 ) {
            setComponent(
                <div className="bg-white portrait-pds pds">
                    <div className="PDSBorder">
                        <PDSHeader />
                        <PersonalInformation
                            User={data.user}
                            PesonsalInformation={data.personal_information}
                            Resedential={data.residential_address}
                            Permanent={data.permanent_address}
                            FamilyBackground={data.family_background}
                            Children={data.children}
                            Elementary={data.elementary}
                            Secondary={data.secondary}
                            College={data.college}
                            Vocational={data.vocational}
                            GraduateStudies={data.graduate_studies}
                        />
                    </div>
                </div> )
            return
        }
        if ( tab === 2 ) {
            setComponent( <PDSPage2 /> )
            return
        }
        if ( tab === 3 ) {
            setComponent( <PDSPage3 /> )
            return
        }
        setComponent( <PDSPage4 /> )
    }


    const [ component, setComponent ]: any = React.useState( <div></div> )


    function ToBePrinted( props: any ) {
        return (
            <div className="d-flex aic jcc" style={{ flexDirection: 'column' }}>
                {component}
            </div >
        )
    }

    return (
        <div>
            <ul className="nav nav-pills d-flex aic jcc" id="pills-tab2" role="tablist">
                <li className="nav-item">
                    <p onClick={() => changeTab( 1 )} className="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C1</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 2 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C2</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 3 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C3</span>
                    </p>
                </li>
                <li className="nav-item">
                    <p onClick={() => changeTab( 4 )} className="nav-link" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <i className="fe fe-folder"></i>
                        <span>&nbsp;C4</span>
                    </p>
                </li>
            </ul>
            <PrintComponents
                trigger={
                    <button className="btn btn-dark mb-3 mt-5">
                        <i className=" fe fe-download"></i>
                        <span>&nbsp;Download Sheet</span>
                    </button>
                }>
                <ToBePrinted />
            </PrintComponents>
            <ToBePrinted />
        </div>
    )
}
