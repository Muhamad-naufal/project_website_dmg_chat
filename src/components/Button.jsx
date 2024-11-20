import PropTypes from 'prop-types';

const Button = ({
  classes = '',
  variant = 'filled',
  color = 'primary',
  children,
  ...rest
}) => {
  return (
    <button className={`btn ${variant} ${color} ${classes}`}>
      {children}
      <div className='state-layer'></div>
    </button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
