import React from 'react';

const imageSrc =
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
const backgroundImage = `url(${imageSrc})`;

const Landing = () => {
  return (
    <div className="wrap-landing">
      <h1>Welcom To Public Board</h1>
      <div className="bg-img" style={{ backgroundImage }}>
        <button type="submit" className="btn-landing">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Landing;
