import React from 'react'
import {useHistory} from 'react-router-dom'
import * as base from './../constants/base'

export default function SidebarComponent(props: {navs: any[]}) {
    const history = useHistory()
    return (
        <>
            {props.navs.map((nav: any, index) => (
                <React.Fragment key={index}>
                    {nav.Heading === undefined ? (
                        ''
                    ) : (
                        <p className="text-muted nav-heading mt-4 mb-1">
                            <span>{nav.Heading}</span>
                        </p>
                    )}
                    <li
                        style={{display: nav.title === undefined ? 'none' : ''}}
                        key={index}
                        className={`nav-item w-100 ${
                            base.route + nav.route === window.location.href
                                ? 'active'
                                : ''
                        }`}>
                        <a
                            onClick={() => history.push(nav.route)}
                            role="button"
                            className="nav-link">
                            <i className={`fe ${nav.icon}  fe-16`}></i>
                            <span className="ml-3 item-text">{nav.title}</span>
                        </a>
                    </li>
                </React.Fragment>
            ))}
        </>
    )
}
