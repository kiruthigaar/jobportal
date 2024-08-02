import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Basic() {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        terms: yup.bool().required().oneOf([true], "term must be accepted"),
    });
    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={values => console.log(values)}
                initialValues={{
                    firstName: ""
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name='firstname'
                                    placeholder="First name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstName}
                                />
                                {/* <ErrorMessage name='Firstname' /> */}

                            </Form.Group>
                            {/* <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name='Last_name'
                                    placeholder="Last name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Last_name}
                                />
                                <ErrorMessage name='Last_name' />

                            </Form.Group> */}
                            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        name='email'
                                        aria-describedby="inputGroupPrepend"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <ErrorMessage name='email' />

                                </InputGroup>
                            </Form.Group> */}
                            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Select the Skills</Form.Label>
                                <InputGroup hasValidation>
                                    <div>
                                        <Select
                                            options={options}
                                            value={selectedoptions}
                                            name='option'
                                            onBlur={handleBlur}
                                            onChange={handleSelectChange}
                                            isMulti={true}
                                        />
                                    </div>
                                    {touched.option && errors.option && errors.option}

                                </InputGroup>
                            </Form.Group> */}
                            {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>About Me</Form.Label>
                                <InputGroup hasValidation>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={{
                                            toolbar: [
                                                'undo', 'redo', '|',
                                                'heading', '|', 'bold', 'italic', '|',
                                                'link', 'insertTable', 'mediaEmbed', '|',
                                                'bulletedList', 'numberedList', 'indent', 'outdent'
                                            ],
                                            plugins: [
                                                Bold,
                                                Essentials,
                                                Heading,
                                                Indent,
                                                IndentBlock,
                                                Italic,
                                                Link,
                                                List,
                                                MediaEmbed,
                                                Paragraph,
                                                Table,
                                                Undo
                                            ],

                                        }}
                                    />
                                </InputGroup>
                            </Form.Group> */}
                        </Row>
                        <Button type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Basic;