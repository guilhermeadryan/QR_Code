function GerarQRCode() {
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode
}

function GerarQRCode2() {
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode
}


function ImprimirQRCode() {
    var inputUsuario2 = document.querySelector('textarea').value;
    var GoogleChartAPI2 = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';
    var conteudoQRCode2 = GoogleChartAPI2 + encodeURIComponent(inputUsuario2);
    document.querySelector('#QRCodeImage').src = conteudoQRCode2
}