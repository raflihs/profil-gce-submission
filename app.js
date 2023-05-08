const express = require('express');
const app = express();

// Menggunakan middleware untuk mengakses file di folder public
app.use(express.static('public'));

// Routing untuk halaman index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Jalankan server
app.listen(8001, function () {
  console.log('Server is listening on port 8001');
});
