import React from 'react';
import { Table } from 'reactstrap';
import {useTranslation} from "react-i18next";


// Source https://reactstrap.github.io/components/tables/
const HeaderComponent = (props) => {
  const [t, i18n] = useTranslation('common');
  return (
    <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('fr')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
}

export default HeaderComponent;