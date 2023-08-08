import React from 'react'
import {Alert, Fire} from '../../../components/Alerts/Alert'
import Competencies from './Competencies'
import ContactClinets from './ContactClinets'
import {useForm} from 'react-hook-form'
import {Auth} from '../../../services/auth.service'

type Inputs = {
    Position: string
    ItemNumber: string
    SalaryGrade: string
    GovernmentalUnit: string
    Class: string
    Department: string
    Bureau: string
    Division: string
    Workstation: string
    Present: string
    Previous: string
    SalaryAuthorized: string
    OtherCompensation: string
    ImmediateSupervisor: string
    NextHigherSupervisor: string
    Executive: string
    Supervisors: string
    NonSupervisors: string
    Staff: string
    GeneralPublic: string
    OtherAgencies: string
    Others: string
    Unit: string
    Job: string
    Experience: string
    Training: string
    Eligibility: string
    Machine: string
    Education: string
}

export default function AddVancancy() {
    const [addForm, setaddForm] = React.useState([1])
    const [addDuties, setaddDuties] = React.useState([1])
    const {register, handleSubmit} = useForm<Inputs>()
    const [disabled, setdisabled] = React.useState(false)

    let directlySupervised: any = []
    let coreCompentency: any = []
    let dutiesAndResponsibilities: any = []

    const submit = async (data: Inputs) => {
        for (let i = 0; i < addDuties.length; i++) {
            let object: any = {}
            object[`PercentageofWorkingTime1${i}`] = $(
                '#' + `PercentageofWorkingTime1${i}`,
            ).val()
            object[`PercentageofWorkingTime2${i}`] = $(
                '#' + `PercentageofWorkingTime2${i}`,
            ).val()
            object[`DutiesAndResponsibilities1${i}`] = $(
                '#' + `DutiesAndResponsibilities1${i}`,
            ).val()
            object[`DutiesAndResponsibilities2${i}`] = $(
                '#' + `DutiesAndResponsibilities2${i}`,
            ).val()
            object[`CompetencyLevel${i}`] = $('#' + `CompetencyLevel${i}`).val()
            dutiesAndResponsibilities.push(object)
        }

        for (let i = 0; i < addForm.length; i++) {
            let supervised = $('.DirectlySupervised' + i + ' input')
            let object: any = {}
            for (let index in supervised) {
                if (supervised[index].id == undefined) {
                    break
                }
                object[supervised[index].id] = $(
                    '#' + supervised[index]['id'],
                ).val()
            }
            directlySupervised.push(object)
        }

        for (let i = 0; i < 2; i++) {
            let competency = $('.Competencies' + i + ' textarea')
            let object: any = {}
            for (let index in competency) {
                if (competency[index].id == undefined) {
                    break
                }
                object[competency[index].id] = $(
                    '#' + competency[index]['id'],
                ).val()
            }
            coreCompentency.push(object)
        }

        const form = Object.assign(data, {
            DirectlySupervised: directlySupervised,
            DutiesAndResponsibilities: dutiesAndResponsibilities,
            CoreCompentency: coreCompentency,
            Executive: $('input[name="Executive"]:checked').val(),
            GeneralPublic: $('input[name="GeneralPublic"]:checked').val(),
            Supervisors: $('input[name="Supervisors"]:checked').val(),
            OtherAgencies: $('input[name="OtherAgencies"]:checked').val(),
            NonSupervisors: $('input[name="NonSupervisors"]:checked').val(),
            Staff: $('#input[name="taff"]:checked').val(),

            Others: $('input[name="Others"]').val(),
        })
        Fire(
            'Post Vacancy',
            'Are you sure you want to Post Vacancy?',
            'info',
            () => {
                const api = new Auth('vacancies')
                setdisabled(true)
                api.create(form)
                    .then(() => {
                        Alert(
                            'Vacncy Succesfully Posted',
                            `New Vacancy has been created on the Human Resource Management Office's Landing Page`,
                            'success',
                        )
                        directlySupervised = []
                        coreCompentency = []
                        dutiesAndResponsibilities = []
                        setdisabled(false)
                    })
                    .catch(() => {
                        Alert(
                            'Error',
                            'Something went wrong. Try Again',
                            'error',
                        )
                        setdisabled(false)
                    })
            },
        )
    }

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
                <div className="card shadow mb-4">
                    <div className="card-header">
                        <strong className="card-title">Vacancy form</strong>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Position/Title
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Position')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Item Number
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('ItemNumber')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Salary Grade
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('SalaryGrade')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Governmental Unit
                                    <span className="text-info">
                                        {' '}
                                        (optional)
                                    </span>
                                </label>
                                <div className="col-sm-9">
                                    <select
                                        {...register('GovernmentalUnit')}
                                        className="form-control">
                                        <option>Province</option>
                                        <option>City </option>
                                        <option>Municipality </option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Class
                                    <span className="text-info">
                                        {' '}
                                        (optional)
                                    </span>
                                </label>
                                <div className="col-sm-9">
                                    <select
                                        {...register('Class')}
                                        className="form-control">
                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                        <option>6th</option>
                                        <option>Special</option>
                                    </select>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Department, Corporation or Agency / Local
                                    Govt.
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Department')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Bureau OR Office
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Bureau')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Department / Branch / Dviision
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Division')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Workstation / Place of Work
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Workstation')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Present Approp Act
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Present')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Previous Approp Act
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Previous')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Salary Authorized
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('SalaryAuthorized')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Other Compensation
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('OtherCompensation')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Position Title of Immediate Supervisor
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('ImmediateSupervisor')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Position Title, and Item of Those Directly
                                    Supervised
                                </label>
                                <div className="col-sm-9">
                                    <button
                                        onClick={() => {
                                            setaddForm([...addForm, 1])
                                        }}
                                        type="button"
                                        className="btn btn-outline-primary mb-5">
                                        Add
                                    </button>

                                    <button
                                        onClick={() => {
                                            setaddForm([1])
                                        }}
                                        type="button"
                                        className="btn btn-outline-danger ml-2 mb-5">
                                        Clear All
                                    </button>
                                    {addForm.map((value, index) => (
                                        <div
                                            key={index}
                                            className={`row mb-4 DirectlySupervised${index}`}>
                                            <div className="col-md-6">
                                                <label>POSITION TITLE</label>
                                                <input
                                                    id={`Position${index}`}
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <h6 className="text-danger-lighter mt-2 small">
                                                    * This field is required
                                                </h6>
                                            </div>
                                            <div className="col-md-6">
                                                <label>ITEM NUMBER</label>
                                                <input
                                                    id={`ItemNumber${index}`}
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <h6 className="text-danger-lighter mt-2 small">
                                                    * This field is required
                                                </h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group row mt-5">
                                <label className="col-sm-3 col-form-label">
                                    Machine, Equipement, Tools, etc., Used
                                    regularly in performance of work
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        {...register('Machine')}
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <h5 className="col-12 text-center col-form-label  bold mb-0">
                                17. CONTACTS / CLIENTS / STAKEHOLDERS
                            </h5>
                            <h6 className="text-danger-lighter mb-2 small text-center">
                                * All fields are required
                            </h6>

                            <div className="col-md-12 row p-1 mt-2 card mb-5">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th className="text-info">
                                                Internal
                                            </th>
                                            <th className="text-center text-info">
                                                Occasional
                                            </th>
                                            <th className="text-center text-info">
                                                Frequent
                                            </th>
                                            <th className="text-info">
                                                External
                                            </th>
                                            <th className="text-center text-info">
                                                Occasional
                                            </th>
                                            <th className="text-center text-info">
                                                Frequent
                                            </th>
                                        </tr>
                                    </thead>
                                    <ContactClinets />
                                </table>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Unit or Section
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        {...register('Unit')}
                                        type="text"
                                        className="form-control"
                                    />
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Job Summary
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        {...register('Job')}
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row mt-5">
                                <label className="col-sm-3 col-form-label bold">
                                    Qualifications
                                    <br />
                                    <h6 className="text-info mt-2 small">
                                        Fields should be separated with comma/s
                                        (,)
                                    </h6>
                                </label>
                                <div className="col-sm-9"></div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Education
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        {...register('Education')}
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Experience
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        {...register('Experience')}
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">
                                    Training
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        {...register('Training')}
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row mb-5">
                                <label className="col-sm-3 col-form-label">
                                    Eligibility
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        {...register('Eligibility')}
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row Competencies0">
                                <label className="col-sm-2 col-form-label">
                                    Core Competencies
                                </label>
                                <div className="col-sm-4">
                                    <textarea
                                        id="Name0"
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                                <label className="col-sm-2 col-form-label">
                                    Competency Level
                                </label>
                                <div className="col-sm-4">
                                    <textarea
                                        id="CompetencyLevel1"
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <div className="form-group row Competencies1">
                                <label className="col-sm-2 col-form-label">
                                    Leadership Competencies
                                </label>
                                <div className="col-sm-4">
                                    <textarea
                                        id="Name1"
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                                <label className="col-sm-2 col-form-label">
                                    Competency Level
                                </label>
                                <div className="col-sm-4">
                                    <textarea
                                        id="CompetencyLevel2"
                                        className="form-control"></textarea>
                                    <h6 className="text-danger-lighter mt-2 small">
                                        * This field is required
                                    </h6>
                                </div>
                            </div>

                            <h5 className="col-12 text-center col-form-label  bold mb-0">
                                Statement of Dutioes and Responsibilitiese
                                (Technical Competencies)
                            </h5>

                            <div className="col-md-12 row p-1 mt-0 card mb-5">
                                <table className="table ">
                                    <thead>
                                        <tr>
                                            <th className="text-success">
                                                Percentage of Working Time{' '}
                                            </th>
                                            <th className="text-success">
                                                (State the duties and
                                                responsibilities here:)
                                            </th>
                                            <th className="text-success">
                                                Competency Level
                                            </th>
                                            <th className="text-success">
                                                <button
                                                    onClick={() => {
                                                        setaddDuties([
                                                            ...addDuties,
                                                            1,
                                                        ])
                                                    }}
                                                    type="button"
                                                    className="btn btn-success ">
                                                    Add{' '}
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        setaddDuties([])
                                                    }}
                                                    type="button"
                                                    className="btn btn-light ml-2">
                                                    Clear All
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>

                                    {addDuties.map((value, index) => (
                                        <Competencies
                                            key={index}
                                            data={index}
                                        />
                                    ))}
                                </table>
                            </div>

                            <div className="form-group mb-5 d-flex aic jcc">
                                <button
                                    disabled={disabled}
                                    className="btn btn-dark float-right">
                                    {disabled == true ? (
                                        <div className="d-flex aic jcc">
                                            <div
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                            />
                                        </div>
                                    ) : (
                                        'Post Vacancy'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
