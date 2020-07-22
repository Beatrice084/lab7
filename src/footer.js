import React from 'react';
import { Table, Col, Row } from 'reactstrap';
import {useTranslation} from "react-i18next";

const Footer = (props) => {
  const [t, i18n] = useTranslation('common');
  return (
    <Row>
        <Col>
            <h6>{t('footer.hoo')}</h6>
            <div>{t('footer.m_f')}</div>
            <div>{t('footer.sat')}</div>
            <div>{t('footer.sun')}</div>
        </Col>
        <Col>
            <h6>Contact</h6>
            <div><i class="fa fa-phone" aria-hidden="true"></i>1800-600-9999</div>
            <div><i class="fa fa-envelope-o" aria-hidden="true"></i>AconitumGolf@aconitum.ca</div>
            <div><i class="fa fa-facebook-official" aria-hidden="true"></i>{t('footer.facebook')}</div>
        </Col>
    </Row>
  );
}

export default Footer;