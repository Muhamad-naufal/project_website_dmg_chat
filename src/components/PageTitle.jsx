import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | DMG Chat</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;

//  Now, we can use this component in our pages to set the title of the page.
