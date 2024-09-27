import React from 'react';

export function Footer(){
  return (
    <header>
      <img src="https://cdn-icons-png.flaticon.com/512/9725/9725722.png" alt="logo" className="logo" />
      <section>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" alt="Twitter" />
        </a>
      </section>
    </header>
  );
};