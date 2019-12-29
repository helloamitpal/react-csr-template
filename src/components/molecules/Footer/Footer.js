import React from 'react';

import translate from '../../../locale';

import './footer.scss';

const Footer = () => (
  <footer className="page-footer red">
    <div className="footer-copyright">
      <p className="container">{translate('common.copyright')}</p>
    </div>
  </footer>
);

export default Footer;
