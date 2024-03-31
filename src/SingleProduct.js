import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import image from './images/product.png'
const SingleProduct = () => {
    return (
        <>
        <Header />
        <Row>
            <Col><img src={image} /></Col>
            <Col>
                <div>My product</div>
                <div>Lorem ispum is my compionent</div>
            </Col>
        </Row></>
    )
}

export default SingleProduct