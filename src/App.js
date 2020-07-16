import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar'
import ThreeCards from './ThreeCards.js'
import BookNow from './BookNow.js'
import WrittenDirections from './WrittenDirections.js'
import photo from './manGolfing.jpg'
import AddressPhoto from './golfCourseAddressPhoto.jpg'
import Footer from './footer.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// source golfCourseAddressPhoto https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="App">
      <NavBar/>
      <div className='titleContainer'>
        <h1 className='titleImageText'>Welcome to Aconitum Golf Course!</h1>
        <Button className='titleButton' color="success"><i class="fa fa-phone" aria-hidden="true"></i>1800-600-9999</Button>{' '}
        <img className='titleImage' src={photo} alt="Person golfing"></img>
      </div>
      <div className='titleContainer'>
        <h1 className='AddressText'>700 GreenWay Road, Ottawa, ON</h1>
        <Button className='AddressButton' color="primary" onClick={toggle}>Book Now!</Button>{' '}
        <Modal isOpen={modal} toggle={toggle} className='modalClass'>
            <ModalHeader toggle={toggle}>Book a Tee Time</ModalHeader>
            <ModalBody>
              <BookNow/>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Register</Button>
            <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
        <img className='titleImage' src={AddressPhoto} alt="Person golfing"></img>
      </div>
      <ThreeCards/>
      <WrittenDirections/>
      <Footer/>
      <div>Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
