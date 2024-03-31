import React from 'react'
import Header from './Header'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup'

function Signup() {
    const [validated, setValidated] = useState(false);
    const SignupSchema = Yup.object().shape({
        fname: Yup.string()
          .min(3, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lname: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        city: Yup.string()
            .required(),
        email: Yup.string().email('Invalid email').required('Required'),
      });
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            username: "",
            city: "",
        },
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
            //backend
        },
        validationSchema: SignupSchema

    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container >
            <Header />
            <Form noValidate validated={validated} onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="fname"
                            onChange={formik.handleChange}
                            value={formik.values.fname}
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>{formik.errors.fname && formik.touched.fname ? formik.errors.fname : ""}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="lname"
                            placeholder="Last name"
                            onChange={formik.handleChange}
                            value={formik.values.lname}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}

                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="City"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        name="city" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </Container>
    );

}

export default Signup;
