import PropTypes from 'prop-types';

const Menu = ({ classes = '', children }) => {
  return <nav className={`menu ${classes}`}>{children}</nav>;
};

Menu.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.any,
};

export { Menu };
