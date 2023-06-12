import React from 'react';
import './button.css'

export const PrimaryButton: React.FC<{
  styles?:any, 
  children?:any,
  restProps?:any
}> = (props) => {
  const {
    styles,
    children,
    ...restProps
  } = props;

  return (
    <button 
      { ...restProps }
      className={'btn primary'}
      style={styles}
    >
      { children }
    </button>
  )
}

export default PrimaryButton