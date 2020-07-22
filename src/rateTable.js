import React from 'react';
import { Table } from 'reactstrap';
import {useTranslation} from "react-i18next";


// Source https://reactstrap.github.io/components/tables/
const RatesTable = (props) => {
  const [t, i18n] = useTranslation('common');

  return (
    <Table>
      <thead>
        <tr>
          <th>{t('rateTable.allDay')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('rateTable.9')}</td>
          <td>{t('rateTable.50')}</td>
        </tr>
        <tr>
          <td>{t('rateTable.18')}</td>
          <td>{t('rateTable.80')}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>{t('rateTable.carts')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('rateTable.pull')}</td>
          <td>{t('rateTable.10')}</td>
        </tr>
        <tr>
          <td>{t('rateTable.power')}</td>
          <td>{t('rateTable.25')}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>{t('rateTable.open')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('rateTable.9')}</td>
          <td>{t('rateTable.30')}</td>
        </tr>
        <tr>
          <td>{t('rateTable.18')}</td>
          <td>{t('rateTable.40')}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>{t('rateTable.close')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('rateTable.9')}</td>
          <td>{t('rateTable.25')}</td>
        </tr>
        <tr>
          <td>{t('rateTable.18')}</td>
          <td>{t('rateTable.35')}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>{t('rateTable.pricing')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('rateTable.children')}</td>
          <td>{t('rateTable.20')}</td>
        </tr>
        <tr>
          <td>{t('rateTable.juniors')}</td>
          <td>{t('rateTable.22')}</td>
        </tr>
        <tr>
          <td>{t('rateTable.senior')}</td>
          <td>{t('rateTable.22')}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RatesTable;