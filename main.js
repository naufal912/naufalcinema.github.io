// Data film
const filmData = [
  { id: 1, judul: 'Film A', harga: 30000 },
  { id: 2, judul: 'Film B', harga: 32000 },
  { id: 3, judul: 'Film C', harga: 28000 },
];

// Inisialisasi rekomendasi film
const rekomendasiFilm = filmData[Math.floor(Math.random() * filmData.length)];

// Fungsi untuk menambahkan pilihan film ke dropdown
function tambahPilihanFilm() {
  const filmDropdown = document.getElementById('film');
  filmData.forEach((film) => {
    const option = document.createElement('option');
    option.value = film.id;
    option.textContent = film.judul;
    filmDropdown.appendChild(option);
  });
}

// Fungsi untuk menampilkan daftar film
function tampilkanDaftarFilm() {
  const filmList = document.getElementById('film-list');
  filmData.forEach((film) => {
    const li = document.createElement('li');
    li.textContent = `${film.judul} - Rp ${film.harga}`;
    filmList.appendChild(li);
  });
}

// Fungsi untuk menampilkan rekomendasi film
function tampilkanRekomendasiFilm() {
  const rekomendasi = document.getElementById('rekomendasi');
  rekomendasi.textContent = `Kami merekomendasikan Anda menonton "${rekomendasiFilm.judul}"!`;
}

// Fungsi untuk menghitung total harga tiket
function hitungTotalHarga(jumlahTiket, filmId) {
  const film = filmData.find((film) => film.id === Number(filmId));
  if (film) {
    return film.harga * jumlahTiket;
  }
  return 0;
}

// Event listener saat tombol "Pesan Tiket" ditekan
document.getElementById('pesan-tiket').addEventListener('click', function () {
  const filmDropdown = document.getElementById('film');
  const jumlahTiketInput = document.getElementById('jumlah-tiket');
  const totalHarga = hitungTotalHarga(jumlahTiketInput.value, filmDropdown.value);
  alert(`Anda memesan ${jumlahTiketInput.value} tiket untuk ${filmDropdown.options[filmDropdown.selectedIndex].text}. Total harga: Rp ${totalHarga}`);
});

// Memanggil fungsi-fungsi untuk inisialisasi
tambahPilihanFilm();
tampilkanDaftarFilm();
tampilkanRekomendasiFilm();
