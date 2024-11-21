import PropTypes from 'prop-types';
import { delay, motion } from 'framer-motion';

const CircularProgress = ({ classes = '', size = '' }) => {
  return (
    <div
      role='progressbar'
      className={`circular-progress ${size} ${classes}`}
    ></div>
  );
};

CircularProgress.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.string,
};

const LinearProgress = ({ classes = '' }) => {
  const progressbarVariants = {
    start: { scaleY: 0 },
    end: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.2,
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  };
  const activeIndicatorVariants = {
    start: { translateX: '-100%' },
    end: {
      translateX: '100%',
    },
  };
  return (
    <motion.div
      initial='start'
      animate='end'
      exit='exit'
      role='progressbar'
      variants={progressbarVariants}
      className={`linear-progress ${classes}`}
    >
      <motion.div
        variants={activeIndicatorVariants}
        transition={{ duration: 1.5, repeat: Infinity, ease: [0.2, 0, 0, 1] }}
        className='active-indicator'
      ></motion.div>
    </motion.div>
  );
};

LinearProgress.propTypes = {
  classes: PropTypes.string,
};

export { CircularProgress, LinearProgress };
