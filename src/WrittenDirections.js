import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {useTranslation} from "react-i18next";


//source https://reactstrap.github.io/components/jumbotron/
const WrittenDirections = (props) => {
  const [t, i18n] = useTranslation('common');
  return (
      <div>
          <Jumbotron>
            {/* Directions copied from http://www.warkworthgolf.com/directions/ */}
            <h3>{t('directions.title')}</h3>
            <h5>{t('directions.toronto')}</h5>
            <p className="lead">{t('directions.torontoText')}</p>
            <hr className="my-2" />
            <h5>{t('directions.kingston')}</h5>
            <p className="lead">{t('directions.kingstonText')}</p>
            <hr className="my-2" />
            <h5>{t('directions.highway')}</h5>
            <p className="lead">{t('directions.highwayText')}</p>
            <hr className="my-2" />
        </Jumbotron>
      </div>
  );
}

export default WrittenDirections;