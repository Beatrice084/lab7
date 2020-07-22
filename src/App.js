import React, { useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar'
import ThreeCards from './ThreeCards.js'
import BookNow from './BookNow.js'
import WrittenDirections from './WrittenDirections.js'
import photo from './manGolfing.jpg'
import AddressPhoto from './golfCourseAddressPhoto.jpg'
import Footer from './footer.js'
import BookNowButton from './BookNowButton.js'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useTranslation} from "react-i18next";
import HeaderComponent from './HeaderComponent.js'

// source golfCourseAddressPhoto https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80

function Welcome()
{
    const {t, i18n} = useTranslation('common');
    return <h1 className='titleImageText'>{t('app.welcome')}</h1>
}

function Address()
{
    const {t, i18n} = useTranslation('common');
    return <h1 className='AddressText'>{t('app.address')}</h1>
}

function Icons()
{
    const {t, i18n} = useTranslation('common');
    return <p>{t('app.icons')}</p>
}

class App extends React.Component {
  render() {return (
    <Suspense fallback="loading">
    <div className="App">
      <NavBar/>
      <div className='titleContainer'>
        <h1 className='titleImageText'><Welcome></Welcome></h1>
        <Button className='titleButton' color="success" onClick={this.changeLanguage} ><i class="fa fa-phone" aria-hidden="true"></i>1800-600-9999</Button>{' '}
        <img className='titleImage' src={photo} alt="Person golfing"></img>
      </div>
      <div className='titleContainer'>
        <h1 className='AddressText'><Address></Address></h1>
        <BookNowButton></BookNowButton>
        <img className='titleImage' src={AddressPhoto} alt="Person golfing"></img>
      </div>
      <ThreeCards/>
      <WrittenDirections/>
      <Footer/>
      <div>Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
    </Suspense>
  )};
}

export default App;
