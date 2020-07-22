import React from 'react';
import { Table } from 'reactstrap';
import {useTranslation} from "react-i18next";


// Source https://reactstrap.github.io/components/table/
const MembershipTable = (props) => {
  const [t, i18n] = useTranslation('common');

  return (
    <Table>
      <thead>
        <tr>
          <th>{t('membershipTable.title')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('membershipTable.9')}</td>
          <td>{t('membershipTable.500')}</td>
        </tr>
        <tr>
          <td>{t('membershipTable.9Cart')}</td>
          <td>{t('membershipTable.600')}</td>
        </tr>
        <tr>
          <td>{t('membershipTable.18')}</td>
          <td>{t('membershipTable.700')}</td>
        </tr>
        <tr>
          <td>{t('membershipTable.18Cart')}</td>
          <td>{t('membershipTable.850')}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>{t('membershipTable.special')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{t('membershipTable.title')}</td>
          <td>{t('membershipTable.250')}</td>
        </tr>
        <tr>
          <td>{t('membershipTable.junior')}</td>
          <td>{t('membershipTable.350')}</td>
        </tr>
        <tr>
          <td>{t('membershipTable.senior')}</td>
          <td>{t('membershipTable.550')}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MembershipTable;