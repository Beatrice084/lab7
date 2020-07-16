import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

//source https://reactstrap.github.io/components/jumbotron/
const WrittenDirections = (props) => {
  return (
      <div>
          <Jumbotron>
            {/* Directions copied from http://www.warkworthgolf.com/directions/ */}
            <h3>Written Directions</h3>
            <h5>From Toronto</h5>
            <p className="lead">Take Hwy 401 E to Brighton (Exit 509). Head north on County Rd 30 to County Rd 29 (approx 17 km). Turn left onto County Rd 29. Travel west on County Rd 29 for about 1 km to the golf course.</p>
            <hr className="my-2" />
            <h5>From Kingston</h5>
            <p className="lead">Take Hwy 401 W to Brighton (Exit 509). Head north on County Rd 30 to County Rd 29 (approx 17 km). Turn left onto County Rd 29. Travel west on County Rd 29 for about 1 km to the golf course.</p>
            <hr className="my-2" />
            <h5>From Highway 7</h5>
            <p className="lead">Follow signs to I-40 East to Nashville. Once on I-40 East, go North on Whitten Road (Exit 14) for 5 miles. Turn left on St. Elmo and go 1 mile to Altruria Road. Turn Right on Altruria and look for Quail Ridge 0.5 miles on the left.</p>
            <hr className="my-2" />
        </Jumbotron>
      </div>
  );
}

export default WrittenDirections;