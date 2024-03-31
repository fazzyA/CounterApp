import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import productimage from "./images/product.png"
import { Link } from 'react-router-dom'
const Products = () => {
    return (
        <Row className='m-2 p-1'>
            <Col className='m-0 p-0'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productimage} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to="/singleproducts">Click me</Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='m-0 p-0'>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productimage} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to="/singleproducts">Click me</Link>
                    </Card.Body>
                </Card>

            </Col>
            <Col className='m-0 p-0'>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productimage} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to="/singleproducts">Click me</Link>
                    </Card.Body>
                </Card>

            </Col>
            <Col className='m-0 p-0'>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productimage} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to="/singleproducts">Click me</Link>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    )
}

export default Products