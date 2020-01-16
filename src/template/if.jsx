import React from 'react';

export default props => {
  if (!props.test) return false;

  return props.children;
}