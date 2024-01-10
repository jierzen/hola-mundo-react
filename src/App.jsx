import './App.css'
import { linkData, currentDate, cardData, alertData, buttonData, tableData, modalWarningData, modalPrimaryData, userSession } from './components/DataComponents';
import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Alert from './components/Alert'
import Button from './components/Button'
import Table from './components/Table'
import Modal from './components/Modal'
import Calculadora from './components/Calculadora';
import UserProfile from './components/UserProfile'

function App(){
  const [showModalWarning, setShowModalWarning] = useState(false);
  const [showModalPrimary, setShowModalPrimary] = useState(false);
  

  return (
    <>
      <Navbar links={linkData}/>
      <UserProfile user={userSession} />
      <Header currentDate={currentDate}/>
      {
        cardData.map((card, index) => (
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
        ))
      }
      
      {
        buttonData.map((btn, index)=>(
          <Button
          key={`btn-${index}`}
          variant = {btn.variant}
          txtBtn = {btn.txtBtn}
          />
        ))
      }

      {
        alertData.map((alert, index) =>(
          <Alert
          key={`alert-${index}`}
          variant={alert.variant}
          msg={alert.msg}
          url={alert.url}
          txtUrl={alert.txtUrl}
          />
        ))
      }
      <Table data={tableData}/>
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

      <h1>Calculadora</h1>
      <Calculadora />

      
    

      <Footer author="Jorge Espinoza">
        <Navbar links={linkData}/>
      </Footer>
    </>
  )
}

export default App