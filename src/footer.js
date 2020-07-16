import React from 'react';
import { Table, Col, Row } from 'reactstrap';

const Footer = (props) => {
  return (
    <Row>
        <Col>
            <h6>Hours of Operation</h6>
            <div>Monday-Friday: 8am-Dusk</div>
            <div>Saturday: 7am-Dusk</div>
            <div>Sunday: 7:30am-Dusk</div>
        </Col>
        <Col>
            <h6>Contact</h6>
            <div><i class="fa fa-phone" aria-hidden="true"></i>1800-600-9999</div>
            <div><i class="fa fa-envelope-o" aria-hidden="true"></i>AconitumGolf@aconitum.ca</div>
            <div><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook Page</div>
        </Col>
    </Row>
  );
}

export default Footer;