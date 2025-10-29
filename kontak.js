document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // biar nggak reload
  alert("Pesan kamu sudah terkirim! 💌");
  this.reset(); // reset form
});
