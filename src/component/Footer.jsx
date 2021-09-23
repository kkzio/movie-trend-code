import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return(
    <footer className='text-grey'>
      <p style={{ textAlign: 'center' }}>Copyright ⓒ { year }</p>
    </footer>
  );
};

export default Footer;
