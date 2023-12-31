# Daftar produk yang dimiliki oleh Pak Andi
produk = [
    {"Nama": "TV", "Kategori": "elektronik", "Harga": 1000},
    {"Nama": "headphone", "Kategori": "elektronik", "Harga": 200},
    {"Nama": "baju", "Kategori": "fashion", "Harga": 50},
    {"Nama": "gitar", "Kategori": "musik", "Harga": 300},
    {"Nama": "sepatu", "Kategori": "olahraga", "Harga": 80},
    {"Nama": "kamera", "Kategori": "elektronik", "Harga": 600}
]

# Data pelanggan
pelanggan = [
    {"Nama": "Rina", "Minat": ["elektronik", "musik"], "Beli": ["TV", "headphone"]},
    {"Nama": "Budi", "Minat": ["fashion", "musik"], "Beli": ["baju", "gitar"]},
    {"Nama": "Hartono", "Minat": ["olahraga", "elektronik"], "Beli": ["sepatu", "kamera"]}
]

# Fungsi untuk memberikan rekomendasi produk berdasarkan minat pelanggan
def rekomendasi_produk(nama_pelanggan):
    minat_pelanggan = [minat["Minat"] for minat in pelanggan if minat["Nama"] == nama_pelanggan][0]
    rekomendasi = []

    for p in produk:
        if p["Kategori"] in minat_pelanggan and p["Nama"] not in rekomendasi:
            rekomendasi.append(p["Nama"])

    return rekomendasi

# Memberikan rekomendasi produk untuk setiap pelanggan
for p in pelanggan:
    nama_pelanggan = p["Nama"]
    hasil_rekomendasi = rekomendasi_produk(nama_pelanggan)
    print(f"{nama_pelanggan}: {hasil_rekomendasi}")
