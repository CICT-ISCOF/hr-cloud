import React, {useState} from 'react'
import LoginNav from '../../headers/LoginNav'
import Login from '../../views/Main/Login'
import ApplicationForm from '../Forms/ApplicationForms/ApplicationForm'
import FullScreenModal from '../Modals/FullScreenModal'
import Descriptions from '../../views/Main/Vacancies/Descriptions'
import Vacancies from './Vacancies'
import {Auth} from '../../services/auth.service'

export default function LandingUI() {
    const styles = {
        headline: {
            fontWeight: 900,
            fontSize: '4rem',
        },
    }

    const [vacancies, setVacancies]: any = useState([])

    React.useEffect(() => {
        getVacancies()
    }, [])

    function getVacancies() {
        const auth = new Auth('vacancies')
        auth.fetch({}).then((data: any) => {
            setVacancies(data)
        })
    }

    const [modal, setModal] = React.useState(<div></div>)

    return (
        <div>
            <LoginNav
                modal={() => {
                    setModal(<Login />)
                }}
            />
            <div className="wrapper bg-light">
                <div
                    style={{
                        height: '100vh',
                        width: '99vw',
                        background: 'rgba(0,0,0,0.76)',
                        position: 'absolute',
                        zIndex: 0,
                    }}></div>
                <div
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '20vh',
                        width: '100%',
                    }}>
                    <h1
                        className="text-center p-5 text-white h1"
                        style={styles.headline}>
                        Get hired and work for
                        <br />
                        IloIlo State College of Fisheries
                    </h1>
                    <div className="w-100 text-center">
                        <button
                            onClick={() => {
                                $([
                                    document.documentElement,
                                    document.body,
                                ]).animate(
                                    {
                                        scrollTop: 860,
                                    },
                                    500,
                                )
                            }}
                            className="btn btn-dark ml-4">
                            <h1 className="text-white pt-2 pl-5 pr-5 h3">
                                Apply Now
                            </h1>
                        </button>
                        <button
                            onClick={() => {
                                setModal(<Login />)
                            }}
                            data-toggle="modal"
                            data-target=".modal-full"
                            className="btn btn-light ml-4">
                            <h1 className="pt-2 pl-5 pr-5 h3">
                                Login as Applicant
                            </h1>
                        </button>
                    </div>
                </div>
                <img
                    style={{height: '100vh', width: '99vw'}}
                    src="http://localhost:3000/bg/1.jpg"
                />
                <h2
                    className="text-center bg-info p-5 text-white mt-0"
                    style={styles.headline}>
                    Available Vacancies
                </h2>
                <div className="row">
                    {vacancies.map((vacancy: any, index: any) => (
                        <Vacancies
                            key={index}
                            data={vacancy}
                            modal={(modal: any) => {
                                setModal(
                                    modal == 'descriptions' ? (
                                        <Descriptions data={vacancy} />
                                    ) : (
                                        <ApplicationForm data={vacancy} />
                                    ),
                                )
                            }}
                        />
                    ))}
                </div>
                <br />
                <br />
                <br />
            </div>

            <FullScreenModal>{modal}</FullScreenModal>
        </div>
    )
}
