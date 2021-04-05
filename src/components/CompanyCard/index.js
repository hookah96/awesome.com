import React from 'react';
import { compContainer, infoCol, displayInfo } from './style';
import { companyInfo } from '../../utils/arraysForMapping/forCompanyCard';

const CompanyCard = ({ scrollToCompany }) => {
  const mapCompanyInfo = () => {
    return companyInfo.map((info, i) => (
      <div key={i} className={displayInfo}>
        <img src={info.icon} alt={info.text} />
        <p>{info.text}</p>
      </div>
    ));
  };

  return (
    <div className={compContainer} ref={scrollToCompany}>
      <h4>Our company</h4>
      <div className={infoCol}>{mapCompanyInfo()}</div>
    </div>
  );
};

export default CompanyCard;
