const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3112;

app.use(bodyParser.urlencoded({ extended: false })); 

//biodata siswa
app.get('/siswa/:nama', function(req, res) {
    var namaSiswa = req.params.nama;
    res.end('Menampilkan nama siswa: ' + namaSiswa);
});

app.post('/siswa', function(req, res) {
    var namaSiswa = req.body.nama;
    var lahir = req.body.lahir;
    var alamat = req.body.alamat;
    var telp = req.body.telp;
    var hobby = req.body.hobby;
    res.end('Biodata siswa baru, Nama Siswa: ' + namaSiswa + ', Tanggal Lahir: ' + lahir + ', Alamat: ' + alamat
                + ', No.Telp: ' + telp + ', Hobi: ' + hobby);
});

app.delete('/siswa/:nis', function(req, res) {
    var nis = req.params.nis;
    var namaSiswa = req.body.nama;
    res.end('Siswa Atas Nama ' + namaSiswa + ' dengan NIS ' + nis + ', telah terhapus');
});

app.put('/siswa/:nis', function(req, res) {
    var nis = req.params.nis;
    var namaSiswa = req.body.nama;
    res.end('Siswa ' + namaSiswa + ' dengan NIS ' + nis + ', telah terupdate');
});

//jadwal matapelajaran
app.get('/mapel/:hari', function(req, res) {
    var hari = req.params.hari;
    res.end('Menampilkan mata pelajaran hari: ' + hari);
});

app.post('/mapel/:hari', function(req, res) {
    var hari = req.params.hari;
    var mapel1 = req.body.mapel1;
    var mapel2 = req.body.mapel2;
    var mapel3 = req.body.mapel3;
    var mapel4 = req.body.mapel4;
    var mapel5 = req.body.mapel5;
    res.end('Menampilkan Mata Pelajaran Hari ' + hari + ': 1. ' + mapel1 + ', 2. ' + mapel2
                + ', 3. ' + mapel3 + ', 4. ' + mapel4 + ', 5. ' + mapel5);
});

app.delete('/mapel/:hari', function(req, res) {
    var hari = req.params.hari;
    res.end('Jadwal Mata Pelajaran ' + hari + ', telah terhapus');
});

app.put('/mapel/:hari', function(req, res) {
    var hari = req.params.hari;
    res.end('Jadwal Mata Pelajaran ' + hari + ', telah terupdate');
});

//server
app.listen(port, function() {
    console.log(`Terkoneksi server di ${port}`);
});