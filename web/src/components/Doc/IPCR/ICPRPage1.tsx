import React, { CSSProperties } from 'react'
import './ICPR.css'
import '../Doc.css'

export default function ICPRPage1() {
    
    
    return (
        <div className="bg-white landscape">
            <h6 className="text-center bold">OFFICE PERFORMANCE EVALUATION AND REVIEW (IPCR)</h6>
            <p>I, <span className="bold underlined" >Jamel Eid Yassin</span> of the <span className="bold underlined">College of Information Technology</span>
                , of ISCOF BAROTAC NUEVO CAMPUS commit to deliver and agree to be rated on the attainment of the following targets in accordance with the indicated measures for the period  <span className="bold underlined">January to June</span> <span className="bold underlined">2020.</span>
            </p>
            
            <div className="float-right assignatory">  
                <p className="underlined text-center">Ryan Agsaluna</p>
                <h6 className=" text-center ratee">Ratee</h6>
            </div>
            
            <table className="w-100 table" >
                <thead className="thead-dark">
                    <tr>
                        <th> Reviewed by:</th>
                        <th rowSpan={3}> Date</th>
                        <th> Approved by:</th>
                        <th rowSpan={3}> Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ><p className="underlined text-center">Ryan Agsaluna</p></td>
                        <td>11/14/2021</td>
                        <td><p className="underlined text-center">Ryan Agsaluna</p></td>
                        <td>11/14/2021</td>
                    </tr>
                </tbody>
                <tfoot>
                      <tr className="no-top-border">
                        <td className="text-secodary" >Immediate Supervisor</td>
                        <td className="text-secodary" ></td>
                        <td className="text-secodary" >Head of Office</td>
                        <td className="text-secodary" ></td>
                    </tr>
                </tfoot>
            </table>
            <br/>
           <div className="row">
               <div className="col-md-7"></div>
               <div className="col-md-5 ">
                    <div style={{border:'1px solid rgba(150,150,150,0.7)'}}className="rating card  p-3">
                    <p className="text-center">Rating Scale</p>
                    <p className="text-secodary">5- OUTSANDING</p>
                    <p className="text-secodary">4- VERY SATISFACTORY</p>
                    <p className="text-secodary">3- SATISFACTORY</p>
                    <p className="text-secodary">2- UNSATISFACTORY</p>
                    <p className="text-secodary">1-POOR</p>
                </div>
               </div>
           </div>
        </div>
    )
}
