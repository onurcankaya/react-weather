import React from 'react';

export default ({temp, location}) => {
  return (
    <div>
      <p>It is {temp} degrees in {location}</p>
    </div>
  );
};
