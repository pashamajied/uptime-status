import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Based on <Link to="https://uptimerobot.com/" text="UptimeRobot" /> API，Checking frequency is 5 minutes</p>
        <p>&copy; 2022 <Link to="https://pashamajied.my.id/" text="pashamajied" /></p>
      </div>
    </div>
  );
}

export default Footer;
