import React from 'react'

const PropsChild = ({children}) => {
    // console.log(props);
    // console.log(props.children);
  return (
    <>
        <h1>PropsChild</h1>
        {/* {props.childres} */}
        {children}
    </>
  );
};

export default PropsChild;