import React from 'react';

export default ({temp, location}) => {
  return (
    <div>
      <h4 className="text-center">It is {temp} °C in {location}</h4>
    </div>
  );
};
