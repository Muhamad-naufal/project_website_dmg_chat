import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ classes = '' }) => {
  return (
    <Link
      to='/'
      className={`min-w-max max-w-max h-[24px] ${classes}`}
    >
      <img
        width={133}
        height={24}
        src='/logo_tulisan.png'
        alt=''
      />
    </Link>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
};

export default Logo;
