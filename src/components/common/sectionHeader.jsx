import React from 'react';
import Typography from './typography';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <Typography variant="h3" className="section-header-title">
        {title}
      </Typography>
      <Typography className="section-header-description">
        {description}
      </Typography>
    </div>
  );
};

export default SectionHeader;
