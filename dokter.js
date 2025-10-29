const jadwal = [
  { nama: "dr. Zaskia cantik.", spesialis: "Facial & Perawatan Kulit", hari: "Senin", jam: "09.00 - 15.00" },
  { nama: "dr. Andri chool.", spesialis: "Laser Treatment", hari: "Selasa", jam: "10.00 - 16.00" },
  { nama: "dr. Nazwa Nabila.", spesialis: "Body Care", hari: "Rabu", jam: "08.30 - 14.30" },
  { nama: "dr. Juaanbl.", spesialis: "Facial & Whitening", hari: "Kamis", jam: "09.00 - 15.00" },
  { nama: "dr. PutraPutri.", spesialis: "Anti-Aging", hari: "Jumat", jam: "09.00 - 14.00" },
];

function showAll() {
  const tbody = document.getElementById("jadwalBody");
  tbody.innerHTML = "";
  jadwal.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.nama}</td>
        <td>${d.spesialis}</td>
        <td>${d.hari}</td>
        <td>${d.jam}</td>
      </tr>
    `;
  });
}

function showToday() {
  const hariIni = new Date().toLocaleDateString("id-ID", { weekday: "long" });
  const today = jadwal.filter(d => d.hari.toLowerCase() === hariIni.toLowerCase());
  const tbody = document.getElementById("jadwalBody");
  tbody.innerHTML = "";

  if (today.length > 0) {
    today.forEach(d => {
      tbody.innerHTML += `
        <tr>
          <td>${d.nama}</td>
          <td>${d.spesialis}</td>
          <td>${d.hari}</td>
          <td>${d.jam}</td>
        </tr>
      `;
    });
  } else {
    tbody.innerHTML = `<tr><td colspan="4">Tidak ada jadwal dokter untuk hari ini.</td></tr>`;
  }
}

// tampilkan semua saat pertama dibuka
showAll();
