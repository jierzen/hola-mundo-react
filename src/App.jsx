import './App.css'
import { linkData, currentDate, cardData, alertData, buttonData, tableData, modalWarningData, modalPrimaryData, userSession, formDataExample } from './components/DataComponents';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Alert from './components/Alert'
import Button from './components/Button'
import Table from './components/Table'
import Modal from './components/Modal'
import Calculadora from './components/Calculadora'
import UserProfile from './components/UserProfile'
import Form from './components/Form'

function App(){
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [showModalPrimary, setShowModalPrimary] = useState(false);
  
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar links={linkData}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserProfile user={userSession} />
        </Col>
      </Row>
      <Row>
        <Col>
        <Header currentDate={currentDate}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form formDataIn={formDataExample}/>
        </Col>
      </Row>
      {
        cardData.map((card, index) => (
          <Row key={`card-row-${index}`}>
            <Col md={4}>
              <Card
                key={`card-${index}`}
                title={card.title}
                imgUrl={card.imgUrl}
                description={card.description}
                bgColor={card.bgColor}
                widthCard={card.widthCard}
              >
              <Button
                variant={card.variant} 
                txtBtn={card.txtBtn} 
              />
              </Card>
            </Col>
          </Row>
        ))
      }
      {
        buttonData.map((btn, index)=>(
          <Row key={`btn-row-${index}`}>
            <Col md={4}>
              <Button
              key={`btn-${index}`}
              variant = {btn.variant}
              txtBtn = {btn.txtBtn}
              />
            </Col>
          </Row>
        ))
      }
      {
        alertData.map((alert, index) =>(
          <Row key={`alert-row-${index}`}>
            <Col md={4}>
              <Alert
              key={`alert-${index}`}
              variant={alert.variant}
              msg={alert.msg}
              url={alert.url}
              txtUrl={alert.txtUrl}
              />
            </Col>
          </Row>
        ))
      }
      <Row>
        <Col>
          <Table data={tableData}/>
        </Col>
      </Row>
      <Row>
        <Col>    
        <Button
            variant="danger"
            txtBtn="Abrir Modal Warning"
            onClick={() => setShowModalWarning(true)}
          />
          <Button
            variant="primary"
            txtBtn="Abrir Modal Primary"
            onClick={() => setShowModalPrimary(true)}
          />
          <Modal
            modalHeading={modalWarningData.modalHeading}
            modalTxt={modalWarningData.modalTxt}
            show={showModalWarning}
            onHide={() => setShowModal(false)}
            bgColor={modalWarningData.bgColor}
          >
            <Button variant="secondary" txtBtn="Cerrar" onClick={() => setShowModalWarning(false)} />
            <Button variant="primary" txtBtn="Guardar Cambios" onClick={() => setShowModalWarning(false)} />
          </Modal>
          <Modal
            modalHeading={modalPrimaryData.modalHeading}
            modalTxt={modalPrimaryData.modalTxt}
            show={showModalPrimary}
            onHide={() => setShowModalPrimary(false)}
            bgColor={modalPrimaryData.bgColor}
          >
            <Button variant="secondary" txtBtn="Cerrar" onClick={() => setShowModalPrimary(false)} />
            <Button variant="primary" txtBtn="Guardar Cambios" onClick={() => setShowModalPrimary(false)} />
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Calculadora</h1>
          <Calculadora />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer author="Jorge Espinoza">
            <Navbar links={linkData}/>
          </Footer>
        </Col>
      </Row>
    </Container>
  )
}

export default App