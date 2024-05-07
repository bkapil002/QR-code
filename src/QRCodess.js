import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodess = () => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const newText = e.target.value;
    const encodedText = newText.replace(/ /g, '%20');
    setText(encodedText);
  };

  return (
    <div style={{justifyItems : '' , alignItems :"center" , textAlign:'center'}}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
      />
      {text && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
};

export default QRCodess;
