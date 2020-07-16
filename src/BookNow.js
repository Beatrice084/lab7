import React from 'react';
import './BookNow.css'
import Holes from './birdie.png'
import Cart from './golf-cart.png'
import { Pagination, PaginationItem, PaginationLink, InputGroup, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

// Source https://reactstrap.github.io/components/input-group/
// Source https://reactstrap.github.io/components/form/
const BookNow = (props) => {
  return (
    <div className='outsideDiv'>
        <div className='card'>
            <i className="fa fa-calendar icon" aria-hidden="true"></i>
            <p className="dateText">Pick a date</p>
            <FormGroup>
                <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                />
            </FormGroup>
        </div>
        <div>
            <i className="fa fa-clock-o icon"></i>
            <p className="dateText">Pick a time</p>
            <FormGroup>
                <Label for="exampleTime">Time</Label>
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
            <p className="dateText">Pick number of holes</p>
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
            <p className="dateText">Pick number of people</p>
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
            <p className="dateText">Pick number of carts</p>
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
            <p className="dateText">Enter your credit card information to reserve your tee time</p>
            <Form>
                <FormGroup>
                  <Label for="username">Full name (on the card)</Label>
                  <Input type="text" name="username" placeholder="Jason Doe" required class="form-control"></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="cardNumber">Card number</Label>
                  <Input id="cardNum" type="text" name="cardNumber" placeholder="Your card number" class="form-control" required></Input>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label><span class="hidden-xs">Expiration</span></Label>
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
  );
}

export default BookNow;