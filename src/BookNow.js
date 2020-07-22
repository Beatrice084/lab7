import React, { useState } from 'react';
import './BookNow.css'
import Holes from './birdie.png'
import Cart from './golf-cart.png'
import { Alert, Pagination, PaginationItem, PaginationLink, InputGroup, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import {useTranslation, withTranslation} from "react-i18next";
import DatePicker from "react-datepicker";
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import "react-datepicker/dist/react-datepicker.css";

// Source https://reactstrap.github.io/components/input-group/
// Source https://reactstrap.github.io/components/form/
// ReactDatepicker https://www.npmjs.com/package/react-datepicker

class BookNow extends React.Component{
  state = {
    startDate: new Date(),
    cardNumber: ""
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render () {
    const { t } = this.props;
    return (
    <div className='outsideDiv'>
        <div>
            <i className="fa fa-calendar icon" aria-hidden="true"></i>
            <p className="dateText">{t('bookNow.date')}</p>
            <FormGroup>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    minDate={moment().toDate()}
                />
            </FormGroup>
        </div>
        <div>
            <i className="fa fa-clock-o icon"></i>
            <p className="dateText">{t('bookNow.timePick')}</p>
            <FormGroup>
                <Label for="exampleTime">{t('bookNow.time')}</Label>
                <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
                />
            </FormGroup>
        </div>
        <div>
            <img className='flag' src={Holes} alt="flag icon"></img>
            <p className="dateText">{t('bookNow.holes')}</p>
            <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink>
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink>
                2
                </PaginationLink>
            </PaginationItem>
            </Pagination>
        </div>
        <div>
            <i className="fa fa-users icon"></i>
            <p className="dateText">{t('bookNow.people')}</p>
            <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </Input>
            </FormGroup>
        </div>
        <div>
            <img className='flag' src={Cart} alt="flag icon"></img>
            <p className="dateText">{t('bookNow.carts')}</p>
            <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink>
                1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink>
                2
                </PaginationLink>
            </PaginationItem>
            </Pagination>
        </div>
        <div>
            <i class="fa fa-credit-card icon" aria-hidden="true"></i>
            <p className="dateText">{t('bookNow.credit')}</p>
            <Form>
                <FormGroup>
                  <Label for="username">{t('bookNow.name')}</Label>
                  <Input type="text" name="username" placeholder="Jason Doe" required class="form-control"></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="cardNumber">{t('bookNow.number')}</Label>
                  <Input id="cardNum" type="text" name="cardNumber" placeholder="Your card number" class="form-control" required></Input>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label><span class="hidden-xs">{t('bookNow.exp')}</span></Label>
                            <InputGroup>
                                <Input type="number" placeholder="MM" name="" className="form-control" required></Input>
                                <Input type="number" placeholder="YY" name="" class="form-control" required></Input>
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                <i class="fa fa-question-circle"></i>
                            </Label>
                            <Input type="text" required class="form-control"></Input>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
  )};
}

const BookNowTranslated = withTranslation('common')(BookNow)
export default BookNowTranslated;