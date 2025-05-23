function generateQRCode() {
    const textInput = document.getElementById('textInput').value;
    const qrCodeCanvas = document.getElementById('qrCodeCanvas');
  
    if (textInput.trim() === '') {
      alert('Please enter some text or a URL');
      return;
    }
  
    QRCode.toCanvas(qrCodeCanvas, textInput, function (error) {
      if (error) {
        console.error(error);
        alert('Error generating QR Code');
      } else {
        console.log('QR Code generated successfully!');
      }
    });
  }
  