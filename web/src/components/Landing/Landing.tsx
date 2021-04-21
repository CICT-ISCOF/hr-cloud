import React from 'react'
import Login from '../../views/Login'
import ApplicationForm from '../Forms/ApplicationForm'
import FullScreenModal from '../Modals/FullScreenModal'
import Descriptions from '../Vacancies/Descriptions'
import Vacancies from './Vacancies'

export default function LandingUI() {
    const styles = {
        headline: {
            fontSize: '2rem',
            fontWeight: 400
        }
    }

    let array = [ 1, 2, 2, 3, 3, 4, 5, 56, 6, 7, 123, 12, 321 ]

    return (
        <div>
            <div className="wrapper ">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="text-center p-3" style={styles.headline}>
                    Welcome to ISCOF professional community!
                 <br />
                Get hired and work for
            <br />
            IloIlo State College of Fisheries</h1>
                <hr />
                <br />
                <h2 className="text-center"><strong>Available Vacancies  </strong></h2>
                <br />
                <br />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {array.map( () => ( <Vacancies /> ) )}
                    </div>
                </div>
            </div>
            <FullScreenModal Component={
                // <Login />
                // <Descriptions />
                <ApplicationForm />
            } />
        </div>
    )


}


