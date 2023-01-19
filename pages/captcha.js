import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = () => {
  const [token, setToken] = useState('');

  const onChange = (value) => {
    setToken(value);
    console.log(`Token: ${value}`);
    // send token to localhost:1337 using fetch api
    fetch('http://localhost:1337/Public/captcha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: value,
        }),
    })
  };

  return (
    <ReCAPTCHA
      sitekey={"6LcPRAskAAAAACNRW5tQwNqpip2Z7tkZaOi5jQVW"}
      onChange={onChange}
    />
  );
};

export default Captcha;
