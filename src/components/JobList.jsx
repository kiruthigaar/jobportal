import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const JobList = () => {
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(true)
    const [search, setSearch] = useState('')


    const [jobs, setJobs] = useState(["Front End developer", "Devops Developer", "PHP developer", "Data Processing Officer", "Sales Executive"])

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState({})
    const handleClose = () => setShow(false);

    const handleShow = (val) => {
        console.log(val)
        const info = (function () {
            switch (val) {
                case "Front End developer": return {
                    'job title': 'front end developer',
                    'name of the company': 'cognizant',
                    'Experience Required': 2,
                    'Skills Required': 'HTML, CSS, reactjs',
                    'description': 'Develop functional and appealing web and mobile sites and applications with a focus on usability.'
                }
                case "Devops Developer": return {
                    'job title': 'Devops Developer',
                    'name of the company': 'wipro',
                    'Experience Required': 5,
                    'Skills Required': 'Coding and scripting, Communication and collaboration',
                    'description': 'DevOps is the combination of cultural philosophies, practices, and tools that increases an organization ability to deliver applications and services at high velocity.'
                }
                case "PHP developer": return {
                    'job title': 'PHP developer',
                    'name of the company': 'HCL',
                    'Experience Required': 1,
                    'Skills Required': 'Ajax, jQuery, and MySQL',
                    'description': 'PHP (Hypertext Processor) is a general-purpose scripting language and interpreter that is freely available and widely used for web development'
                }
                case "Data Processing Officer": return {
                    'job title': 'Data Processing Officer',
                    'name of the company': 'TCS',
                    'Experience Required': 1,
                    'Skills Required': 'Communication skills, Critical thinking, Data management',
                    'description': ' provide administrative support for organizing, transferring, processing, and storing data.'
                }
                case "Sales Executive": return {
                    'job title': 'Sales Executive',
                    'name of the company': 'ACCENTURE',
                    'Experience Required': 1,
                    'Skills Required': 'Problem solving, Negotiate deals, Interpersonal skills',
                    'description': 'Sales executives understand how to communicate with potential business partners about deals and close sales'
                }
            }
        })();

        setTitle(info)
        setShow(true)
    };

    const handleApply = (index) => {
        setToggle(false)
        navigate(`/applyForm/${jobs[index]}`)
    }


    let applied = useSelector(state => state.applied)

    const handleAppliedJOb = (e) => {
        e.preventDefault()
        navigate('/viewdetails/')
    }

    const filteredJobs = jobs.filter(job =>
        job.toLowerCase().includes(search.toLowerCase())
      );


    return (
        <div>
            <Container>
                <h1 style={{ textAlign: "center" }}>JOB PORTAL</h1>

                <input type="text" className="search-input" placeholder='search' value = {search} onChange={(e) => setSearch(e.target.value)}/>

                <ul >
                    {filteredJobs.map((val, index) => {
                        return (
                            <div style={{ display: "flex", padding: "30px" }} key = {index}>
                                <li key={index} style={{ padding: "10px", cursor: "pointer", display: "flex", width: "305px" }} onClick={() => handleShow(val)}><a href='#'>{val}</a></li>

                                {applied[(applied.length) - 1] === val ? <button className="applyforjob_btn" onClick={handleAppliedJOb}>Applied</button> : <button className="applyforjob_btn" onClick={() => handleApply(index)}>Apply For Job</button>}<br></br>
                            </div>
                        )
                    })}
                </ul>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title['job title']}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Job Title: {title['job title']}<br></br>
                        Name of the company: {title['name of the company']}<br></br>
                        Experience Required: {title['Experience Required']}<br></br>
                        Skills Required : {title['Skills Required']}<br></br>
                        Job Description : {title['description']}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        </div>
    )
}

export default JobList
