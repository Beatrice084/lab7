import React from 'react';
import { Table } from 'reactstrap';

// Source https://reactstrap.github.io/components/table/
const MembershipTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Full Season Membership</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9 holes</td>
          <td>$500.00</td>
        </tr>
        <tr>
          <td>9 Holes with Cart</td>
          <td>$600.00</td>
        </tr>
        <tr>
          <td>18 holes</td>
          <td>$700.00</td>
        </tr>
        <tr>
          <td>18 Holes with Cart</td>
          <td>$850.00</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Special Memberships (18 Holes Only)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Children (10 years and under)</td>
          <td>$250.00</td>
        </tr>
        <tr>
          <td>Junior (under 18)</td>
          <td>$350.00</td>
        </tr>
        <tr>
          <td>Seniors (55+)</td>
          <td>$500.00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MembershipTable;