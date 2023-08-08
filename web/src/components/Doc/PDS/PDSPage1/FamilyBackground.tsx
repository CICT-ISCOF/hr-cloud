import React from 'react'
import {toDate} from '../../../../helpers'
import * as interfaces from '../PDSInterface'
import EducationalBackground1 from './EducationalBackground'

export default function FamilyBackground(props: {
    FamilyBackgroundData: interfaces.FamilyBackground
    Children: interfaces.Children[]
    Elementary: interfaces.EducationalBackground
    Secondary: interfaces.EducationalBackground
    College: interfaces.EducationalBackground
    Vocational: interfaces.EducationalBackground
    GraduateStudies: interfaces.EducationalBackground
}) {
    const family_background = props.FamilyBackgroundData
    const children = props.Children
    const elementary = props.Elementary
    const secondary = props.Secondary
    const college = props.College
    const vocational = props.Vocational
    const graduateStudies = props.GraduateStudies

    function Blanks() {
        let element: any = []
        for (let i = 0; i < 12 - children.length; i++) {
            element.push(
                <>
                    <div className="col-md-7 m-0 p-0 row border-bottom br cl">
                        <p className="m-0 p-0 pl-2 pt-1 bold underlined">N/A</p>
                    </div>
                    <div className="col-md-5 m-0 p-0 row border-bottom  cr nbr">
                        <p className="m-0 p-0 pl-2 pt-1 bold underlined">N/A</p>
                    </div>
                </>,
            )
        }
        return element
    }

    return (
        <div>
            <div className="title  ">
                <i className="text-white main">II. FAMILY BACKGROUND</i>
            </div>
            <div className="border-bottom br row m-0 p-0 nbl">
                {/* left  */}
                <div
                    className="col-md-7 m-0 p-0 row "
                    style={{flex: '0 0 61.2%', maxWidth: '100%'}}>
                    <div className="col-md-6 sub-title m-0 p-0 ll nbl nbl nbb">
                        <p className="m-0 mb-2 mt-1 p-1 pl-3">
                            &nbsp; 22. SPOUSE'S SURNAME
                        </p>
                        <p className="m-0 mb-2 ml-3 p-1 pl-3">
                            &nbsp; FIRST NAME
                        </p>
                        <p className="m-0 mb-2 ml-3 p-1 pl-3">
                            &nbsp; MIDDLE NAME
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row lr">
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.SpouseLast}
                            </p>
                        </div>
                        <div className="col-md-12 m-0 p-0 row border-bottom br ">
                            <div className="col-md-7  pt-2 m-0 p-0 pl-2 bold underlined">
                                {family_background.SpouseFirst}{' '}
                            </div>
                            <div className="col-md-5 m-0 p-0  sub-title nbr nbt nbb">
                                <p className="m-0 pl-2">
                                    NAME EXTENSION (JR., SR)
                                </p>
                                <div className="m-0 bold p-0 underlined text-center">
                                    {family_background.SpouseExt}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.SpouseMiddle}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 sub-title m-0 p-0 ll nbl nbl nbb  ">
                        <p className="m-0 mb-0 p-1 pl-3 p-1 pl-3">
                            &nbsp;OCCUPATION
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row  lr">
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.Occupation}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 sub-title m-0 p-0 ll nbl nbl nbb">
                        <p className="m-0 mb-0 p-1  pl-3 p-1 pl-3">
                            &nbsp;EMPLOYER/BUSINESS NAME
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row lr">
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.BusinessName}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 sub-title m-0 p-0 ll nbl nbb nbb">
                        <p className="m-0 mb-0 p-1  pl-3 p-1 pl-3">
                            &nbsp;BUSINESS ADDRESS
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row  lr">
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.BusinessAddress}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 sub-title m-0 p-0 ll nb nbb nbl">
                        <p className="m-0 mb-0 p-1  pl-3 p-1 pl-3">
                            &nbsp;TELEPHONE NO.
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row  lr">
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.Telephone}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 sub-title m-0 p-0 ll nbl ">
                        <p className="m-0 mb-2 mt-1 p-1 pl-3">
                            &nbsp; 24. FATHERS'S SURNAME
                        </p>
                        <p className="m-0 mb-2 ml-3 p-1 pl-3">
                            &nbsp; FIRST NAME
                        </p>
                        <p className="m-0 mb-2 ml-3 p-1 pl-3">
                            &nbsp; MIDDLE NAME
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row  lr">
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.FatherLast}
                            </p>
                        </div>
                        <div className="col-md-12 m-0 p-0 row border-bottom br ">
                            <div className="col-md-7  pt-2 m-0 p-0 pl-2 bold underlined">
                                {family_background.FatherFirst}{' '}
                            </div>
                            <div className="col-md-5 m-0 p-0  sub-title nbr nbt nbb">
                                <p className="m-0 pl-2">
                                    NAME EXTENSION (JR., SR)
                                </p>
                                <div className="m-0 bold p-0 underlined text-center">
                                    {family_background.FatherExt}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 m-0 p-0 row border-bottom br">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.FatherMiddle}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 sub-title m-0 p-0 ll nbl nbr nbt">
                        <p className="m-0 mb-2 mt-1 p-1 pl-3">
                            &nbsp; 25. MOTHERS'S SURNAME
                        </p>
                        <p className="m-0 mb-2 ml-3 p-1 pl-3">
                            &nbsp; FIRST NAME
                        </p>
                        <p className="m-0 mb-2 ml-3 p-1 pl-3">
                            &nbsp; MIDDLE NAME
                        </p>
                    </div>
                    <div className="col-md-6 m-0 p-0 row lr nbt">
                        <div className="col-md-12 m-0 p-1 pl-3 row border-bottom br nbl sub-title nbt"></div>
                        <div className="col-md-12 m-0 p-0 row border-bottom br bl">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.MotherFirst}
                            </p>
                        </div>
                        <div className="col-md-12 m-0 p-0 row border-bottom br bl">
                            <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                {family_background.MotherMiddle}
                            </p>
                        </div>
                    </div>
                </div>
                {/* right  */}
                <div
                    className="col-md-5 m-0 p-0 row nbr"
                    style={{flex: '0 0 38.8%', maxWidth: '100%'}}>
                    <div className="col-md-7 sub-title border-bottom br m-0 p-0 pl-2 cl nbl nbr">
                        <p className="m-0 pt-2" style={{fontSize: '.35rem'}}>
                            23. NAME of CHILDREN (Write full nbl name and list
                            all nbl)
                        </p>
                    </div>
                    <div className="col-md-5 sub-title border-bottom  m-0 p-0 pl-2 cr nbl nbr">
                        <p className="m-0 pt-2" style={{fontSize: '.35rem'}}>
                            DATE OF BIRTH (mm/dd/yyyy){' '}
                        </p>
                    </div>
                    {children.map((data, index) => (
                        <React.Fragment key={index}>
                            <div className="col-md-7 m-0 p-0 row border-bottom br cl">
                                <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                    {data.Name}
                                </p>
                            </div>
                            <div className="col-md-5 m-0 p-0 row border-bottom   nbr">
                                <p className="m-0 p-0 pl-2 pt-1 bold underlined">
                                    {toDate(data.DOB)}
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                    {Blanks()}

                    <div
                        className="col-md-12 m-0 p-0 row border-bottom  cl sub-title nbl nbt nbr nbb"
                        style={{flex: 1, maxWidth: '100%'}}>
                        <p className="m-0 p-0 pl-2 pt-1 pb-1 text-center d-flex">
                            <i
                                style={{transform: 'translate(60px)'}}
                                className="text-center text-danger bold">
                                (Continue on separate sheet if necessary)
                            </i>
                        </p>
                    </div>
                </div>
            </div>
            <EducationalBackground1
                Elementary={elementary}
                Secondary={secondary}
                College={college}
                Vocational={vocational}
                GraduateStudies={graduateStudies}
            />
        </div>
    )
}
