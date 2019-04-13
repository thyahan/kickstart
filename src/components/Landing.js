import React from 'react';
import withWrap from '../hocs/withWrap';
import landingImage from '../assets/images/landing-bg.jpg';

const backgroundImage = `
linear-gradient(
  to right bottom,
  rgba(126, 213, 111, 0.8),
  rgba(40, 180, 131, 0.8)
),
url(${landingImage})
`;

const Landing = () => {
  return (
    <>
      <div
        className="landing-bg-img"
        alt="landing background"
        style={{ backgroundImage }}
      >
        {/* <h1>Hola Kickstart</h1>
        <p>Best place you ever been</p> */}
      </div>
    </>
  );
};

export default withWrap(Landing);
