/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

// Source ratesPhoto www.ctvnews.ca/polopoly_fs/1.4698427.1574457362!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg
// Source membershipPhoto https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/08/15/5b744813604aa6360af72051_GettyImages-88751624.jpg.rend.hgtvcom.966.644.suffix/1573247291938.jpeg
// Source EventsPhoto https://collegeofgolf.keiseruniversity.edu/wp-content/uploads/2018/04/the-Best-Age-to-Start-Playing-Golf.jpg

import React, { useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EventsPhoto from './EventsPhoto.jpg'
import membershipPhoto from './membershipPhoto.jpeg'
import ratesPhoto from './ratesPhoto.jpg'
import RateTable from './rateTable.js'
import MembershipTable from './MembershipTable.js'
import {useTranslation} from "react-i18next";


const ThreeCards = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const [t, i18n] = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col>
            <div>
                {/* Source https://reactstrap.github.io/components/card/ */}
                <Card>
                    <CardImg top width="100%" src={ratesPhoto} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{t('threeCards.rates')}</CardTitle>
                    <CardText>{t('threeCards.rateText')}</CardText>
                    <Button onClick={toggle}>{t('threeCards.rates')}</Button>
                    {/* Source https://reactstrap.github.io/components/modals/ */}
                    <Modal isOpen={modal} toggle={toggle} className='modalClass'>
                        <ModalHeader toggle={toggle}>{t('threeCards.rates')}</ModalHeader>
                        <ModalBody>
                            <RateTable/>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    </CardBody>
                </Card>
            </div>
        </Col>
        <Col>
            <div>
                {/* Source https://reactstrap.github.io/components/card/ */}
                <Card>
                    <CardImg top width="100%" src={membershipPhoto} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{t('threeCards.membership')}</CardTitle>
                    <CardText>{t('threeCards.membershipText')}</CardText>
                    <Button onClick={toggle1}>{t('threeCards.membership')}</Button>
                    {/* Source https://reactstrap.github.io/components/modals/ */}
                    <Modal isOpen={modal1} toggle={toggle1} className='modalClass'>
                        <ModalHeader toggle={toggle1}>{t('threeCards.membership')}</ModalHeader>
                        <ModalBody>
                            <MembershipTable/>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="secondary" onClick={toggle1}>{t('threeCards.close')}</Button>
                        </ModalFooter>
                    </Modal>
                    </CardBody>
                </Card>
            </div>
        </Col>
        <Col>
            <div>
                {/* Source https://reactstrap.github.io/components/card/ */}
                <Card>
                    <CardImg top width="100%" src={EventsPhoto} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{t('threeCards.events')}</CardTitle>
                    <CardText>{t('threeCards.eventText')}</CardText>
                    <Button>{t('threeCards.events')}</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ThreeCards;