import React from 'react';

import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo__link" />
    </div>
  );
}

export default Logo;
