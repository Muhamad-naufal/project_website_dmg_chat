import React from 'react';
import { motion } from 'framer-motion';

const Skeleton = () => {
  const skeletonLines = [1, 2, 3];
  const skeletonVariants = {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const skeletonChildVariant = {
    start: { opacity: 0.5 },
    end: { opacity: 1 },
  };
  return (
    <motion.div
      variants={skeletonVariants}
      initial='start'
      animate='end'
    >
      {skeletonLines.map((item) => (
        <motion.div
          key={item}
          variants={skeletonChildVariant}
          className='skeleton'
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 0.5,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Skeleton;
