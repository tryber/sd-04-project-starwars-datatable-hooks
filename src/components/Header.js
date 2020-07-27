import React from 'react';
// import Filters from './Filters';

const Header = () => {
  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={(e) => alert(e.target.value)} />
      {/* <Filters /> */}
    </div>
  );
};

export default Header;
