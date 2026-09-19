import React, { useEffect } from 'react';

export default function Tracker() {
  useEffect(() => {
    // 1. Fetch the visitor's public IP
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
        // This prints their IP address in the Vercel/Browser logs
        console.log("Visitor IP Captured:", data.ip);
        
        // 2. Redirect them to your homepage after 1 second so they suspect nothing
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      })
      .catch(err => {
        window.location.href = '/';
      });
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Loading content...</h2>
      <p style={{ color: '#888' }}>Please wait...</p>
    </div>
  );
}