// Function to generate the QR code with location request
function generateQRCode() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const locationRequestURL = `https://www.google.com/maps?q=${latitude},${longitude}`;

            // Create a QR code with the location request URL
            const qrCodeContainer = document.getElementById("qrcode");
            qrCodeContainer.innerHTML = "";

            const qrcode = new QRCode(qrCodeContainer, {
                text: locationRequestURL,
                width: 140,
                height: 140
            });
        });
    } else {
        alert("Geolocation is not supported in this browser.");
    }
}