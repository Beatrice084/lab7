import React from 'react';
import { Table } from 'reactstrap';

// Source https://reactstrap.github.io/components/tables/
const RatesTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>All Day</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9 holes</td>
          <td>$50.00</td>
        </tr>
        <tr>
          <td>18 holes</td>
          <td>$80.00</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Carts</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pull Cart</td>
          <td>$10.00</td>
        </tr>
        <tr>
          <td>Power Cart</td>
          <td>$25.00</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Open to 1pm</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9 holes</td>
          <td>$30.00</td>
        </tr>
        <tr>
          <td>18 holes</td>
          <td>$40.00</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>1pm to Close</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9 holes</td>
          <td>$25.00</td>
        </tr>
        <tr>
          <td>18 holes</td>
          <td>$35.00</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Special Pricing</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Children (10 years and under)</td>
          <td>$20.00</td>
        </tr>
        <tr>
          <td>Juniors (under 18)</td>
          <td>$22.00</td>
        </tr>
        <tr>
          <td>Senior (55+)</td>
          <td>$22.00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RatesTable;