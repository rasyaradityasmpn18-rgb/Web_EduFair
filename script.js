document.addEventListener("DOMContentLoaded", function() {
    // Membaca parameter dari URL (Contoh: ?to=Budi&kategori=Perusahaan)
    const urlParams = new URLSearchParams(window.location.search);
    const namaTamu = urlParams.get('to');
    const kategoriTamu = urlParams.get('kategori');

    if (namaTamu) {
        document.getElementById('nama-tamu').innerText = namaTamu;
    }
    
    if (kategoriTamu) {
        document.getElementById('kategori-tamu').innerText = kategoriTamu;
    }

    // Handle form RSVP agar mengirim data ke WhatsApp Panitia
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const statusKehadiran = document.getElementById('kehadiran').value;

            // GANTI NOMOR INI dengan nomor WhatsApp Anda (format 62, tanpa tanda +)
            const nomorPanitia = "6285694427969"; 

            // Format pesan konfirmasi yang dikirim ke WhatsApp
            const pesanKonfirmasi = `Halo Panitia Edu Fair 2026,\n\nSaya ${namaTamu} (${kategoriTamu}) menyampaikan konfirmasi kehadiran:\n👉 *${statusKehadiran}*`;
            
            // Membuka WhatsApp otomatis
            const waUrl = `https://wa.me/${nomorPanitia}?text=${encodeURIComponent(pesanKonfirmasi)}`;
            window.open(waUrl, '_blank');
        });
    }
});