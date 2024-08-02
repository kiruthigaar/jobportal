import React from 'react'
import { Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'

const Pdfcontent = () => {
    let formValues = useSelector(state => state.formvalue)
    let CKEeditorValue = useSelector(state => state.formvalue)
  return (
    <div>
      <Form style={{ marginTop: '50px' }}>
          <Form.Group controlId="formFirstName">
            <Form.Label className='lableDetail'>First Name</Form.Label>
            <span className='details'>{formValues[0].First_name}</span>
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label className='lableDetail'>Last Name</Form.Label>
            <span className='details'>{formValues[0].Last_name}</span>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className='lableDetail'>Email</Form.Label>
            <span className='details'>{formValues[0].email}</span>
          </Form.Group>

          <Form.Group controlId="formSkills">
            <Form.Label className='lableDetail'>Skills</Form.Label>
            <span className='details'>{formValues[0].option}</span>
          </Form.Group>

          <Form.Group controlId="formAboutMe">
            <Form.Label className='lableDetail'>About Me</Form.Label>
            <span className='details'>{CKEeditorValue[1]}</span>
          </Form.Group>
        </Form>
    </div>
  )
}

export default Pdfcontent
