import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Col className='text-center py-3'>
                    Copyright &copy; The Jersey Shop
                </Col>
            </Container>
        </footer>
    )
}

export default Footer
