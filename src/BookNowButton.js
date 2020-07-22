import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BookNow from './BookNow.js'
import {useTranslation} from "react-i18next";

const BookNowButton = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [t, i18n] = useTranslation('common');

    return (
        <div>
        <Button className='AddressButton' color="primary" onClick={toggle}>{t('bookNowButton.now')}</Button>{' '}
        <Modal isOpen={modal} toggle={toggle} className='modalClass'>
            <ModalHeader toggle={toggle}>{t('bookNowButton.book')}</ModalHeader>
            <ModalBody>
            <BookNow/>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>{t('bookNowButton.register')}</Button>
            <Button color="secondary" onClick={toggle}>{t('bookNowButton.close')}</Button>
            </ModalFooter>
        </Modal>
        </div>
  );
}

export default BookNowButton;