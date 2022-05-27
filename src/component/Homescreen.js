import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Video from './Video'

const Homescreen = () => {
  return (
      <>
 <Container>
        <Row>
        {[...new Array(20)].map(() => (
          <Col>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
   </>

  )
}

export default Homescreen