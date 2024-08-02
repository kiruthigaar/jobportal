import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { appliedForm } from './slices/appliedSlice';
import { formValues, richTextValue } from './slices/formvalueSlice';
import { useParams } from 'react-router-dom'
import CustomCKEditor from './CustomCKEditor';
import TurndownService from 'turndown';
import { marked } from 'marked';
import Button from 'react-bootstrap/Button';
import parse from 'html-react-parser';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

import CustomSelect from './CustomSelect';

const ApplyForm = () => {

    const turndownService = new TurndownService();

    const { id } = useParams();
    const navigate = useNavigate()
    const ApplyDispatch = useDispatch()
    const valueDispatch = useDispatch()

    const loginSchema = Yup.object().shape({
        First_name: Yup.string().required('Required'),
        Last_name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email Adress').required('Required'),
        option: Yup.array().min(1, 'Select at least one fruit').required('Required'),
        content: Yup.string().required('Content is required'),
    })

    const options = [
        { value: "HTML", label: "HTML" },
        { value: "css", label: "css" },
        { value: "javascript", label: "javascript" },
        { value: "Angular", label: "Angular" },
        { value: "React", label: "React" },
        { value: "AWS", label: "AWS" },
        { value: "Agile Development", label: "Agile Development" },
        { value: "UI/UX design", label: "UI/UX design" },
        { value: "Data Analysis", label: "Data Analysis" },
        { value: "Data Entry", label: "Data Entry" },
    ]

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const handleBack = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div>
            <Container style={{ marginTop: "30px" }}>
                <h4>{id}</h4>
                <Formik
                    initialValues={{ First_name: '', Last_name: '', email: '', option: [], content: '' }}
                    validationSchema={loginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        const markdownContent = turndownService.turndown(values.content);
                        console.log('Markdown content:', markdownContent);
                        // const html = marked(markdownContent);
                        // console.log('html', html)
                        // const parsed = parse(html)
                        // console.log('parsed:', parsed);
                        // console.log(Array.isArray(parsed) ? parsed : [parsed])
                        const plainTextContent = stripHtmlTags(values.content);
                        console.log(values, plainTextContent)
                        ApplyDispatch(appliedForm(id))
                        valueDispatch(formValues(values))
                        valueDispatch(richTextValue(plainTextContent))
                        alert("Your application has been submitted successfully")
                        navigate("/")
                        setSubmitting(false)
                    }}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="Firstname" class="form-label">Firstname</label>
                                <Field type='First_name' name='First_name' class="form-control"></Field>
                                <ErrorMessage name='First_name' />
                            </div>
                            <div class="mb-3">
                                <label for="Lastname" class="form-label">Lastname</label>
                                <Field type='Last_name' name='Last_name' class="form-control"></Field>
                                <ErrorMessage name='Last_name' />
                            </div>
                            <div class="mb-3">
                                <label for="Email" class="form-label">Email</label>
                                <Field type='email' name='email' class="form-control"></Field>
                                <ErrorMessage name='email' />
                            </div>
                            <div class="mb-3">
                                <label for="skills" class="form-label">Select the skills</label>
                                <CustomSelect
                                    name="option"
                                    label="Select fruits"
                                    options={options}
                                />
                                <ErrorMessage name='option' />
                            </div>
                            <div>
                                <label for="aboutme" class="form-label">About Me</label>
                                <CustomCKEditor
                                    name="content"
                                    label="Content"
                                    dangerouslySetInnerHTML={{ __html: values }}
                                />
                                {/* <ReactQuill
                                    name="content"
                                    onChange={handleChange}
                                /> */}
                                <ErrorMessage name='content' />
                            </div>

                            <button type="submit" class="btn btn-primary" disabled={isSubmitting}>Submit</button>
                            <Button variant="secondary" onClick={handleBack} className="ml-2 btnDetails">
                                Back
                            </Button>
                        </form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default ApplyForm
