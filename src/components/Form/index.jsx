import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const MyFormComponent = ({ formDataIn }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //aca va la logica de envío del formulario
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {formDataIn.form.map((field, index) => {
                switch (field.element) {
                    case 'input':
                        return (
                            <Form.Group as={Row} key={index}>
                                <Form.Label column sm="2">
                                    {field.placeholder}
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        type={field.type} 
                                        required={field.required} 
                                        placeholder={field.placeholder} 
                                        onChange={(e) => handleChange(e, field.placeholder)} 
                                    />
                                </Col>
                            </Form.Group>
                        );
                    case 'datepicker':
                        //se debe implementar datepicker
                        return (
                            <Form.Group as={Row} key={index}>
                                <Form.Label column sm="2">
                                    {field.placeholder}
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        type="date" 
                                        required={field.required} 
                                        placeholder={field.placeholder} 
                                        onChange={(e) => handleChange(e, field.placeholder)} 
                                    />
                                </Col>
                            </Form.Group>
                        );
                    case 'selector':
                        return (
                            <Form.Group as={Row} key={index}>
                                <Form.Label column sm="2">
                                    {field.placeholder}
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        as="select" 
                                        required={field.required} 
                                        onChange={(e) => handleChange(e, field.placeholder)}
                                    >
                                        {field.values.map((option, idx) => (
                                            <option key={idx} value={option[1]}>{option[0]}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        );
                    case 'checkbox':
                        return (
                            <Form.Group as={Row} key={index}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check 
                                        type="checkbox" 
                                        label={field.placeholder} 
                                        required={field.required} 
                                        onChange={(e) => handleChange(e, field.placeholder)}
                                    />
                                </Col>
                            </Form.Group>
                        );
                    default:
                        return null;
                }
            })}
            <Button type="submit">{formDataIn.button[0]}</Button>
        </Form>
    );
};

export default MyFormComponent;
