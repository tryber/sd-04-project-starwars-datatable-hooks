import React, { useEffect, useContext } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getSWAPI } from '../actions';

import { StarWarsContext } from '../context/StarWarsContext';

const GetSWAPI = () => {
  const context = useContext(StarWarsContext);

  useEffect(() => {
    context.functions.getSWAPI('planets');
  }, []);

  return <div />;
};

export default GetSWAPI;

// export default connect(null, { getSWAPI })(GetSWAPI);

// GetSWAPI.propTypes = {
//   getSWAPI: PropTypes.func.isRequired,
// };
