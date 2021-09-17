import React, { FC } from 'react';
import './Footer.css';

const Footer:FC = () => {
  return (
     <footer className="py-4">
       <div className="container text-center py-3">
         <div className="copyright">&copy; 2021 - All Right Reserved</div>
       </div>
     </footer>
  );
};

export default Footer;
