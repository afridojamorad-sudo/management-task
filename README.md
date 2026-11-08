# Mng-Task — Kelola Tugas Tim Tanpa Ribet

<div align="center">

![Platform](https://img.shields.io/badge/Platform-Mng--Task%20v2.1-ea580c?style=for-the-badge&logo=target)
![React](https://img.shields.io/badge/React%2018-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/Neon_PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

<p align="center">
  <b>Sistem Manajemen Tugas, Papan Kanban Interaktif, Alarm Pengingat, dan Otomasi Laporan Tim Berbasis Cloud.</b>
  <br />
  Diadaptasi langsung dengan standar desain premium <b>Mng-Task</b> (Deep Stone Charcoal & Warm Amber/Orange).
</p>

</div>

---

## 🌟 Fitur Utama (Key Features)

### 1. 📊 Executive & Personal Dashboard
- **Metrik 4 Kolom Real-Time**: Total tugas, tugas sedang berjalan (*in progress*), tugas terhambat (*blocked*), dan tugas selesai (*done*).
- **Distribusi Prioritas Visual**: Baris proporsi tugas mendesak (*urgent*), tinggi (*high*), sedang (*medium*), dan rendah (*low*).
- **Tugas Mendekati Tenggat**: Rekapitulasi otomatis tugas yang jatuh tempo hari ini atau besok.
- **Live Activity Feed**: Riwayat jejak audit (*audit trail*) pencatatan tugas dan aktivitas tim.

### 2. 📋 Papan Tugas Interaktif (Kanban & List View)
- **4 Status Workflow Standar**:
  1. `Todo` (Belum Dikerjakan)
  2. `In Progress` (Sedang Berjalan)
  3. `Blocked` (Terhambat / Menunggu Review)
  4. `Done` (Selesai Sempurna)
- Tampilan ganda: **Papan Kanban Visual** & **Tabel Rincian Lengkap**.
- Filter multi-kondisi: Status, prioritas, kategori divisi, serta pencarian judul tugas instan.
- Quick status toggle: Ubah status tugas hanya dalam satu klik.

### 3. ⏰ Alarm & Pengingat Tenggat Waktu (Smart Reminders)
- Countdown otomatis menghitung sisa waktu hingga deadline.
- Indikator peringatan visual:
  - 🟢 **Aman**: Tenggat > 24 jam.
  - 🟡 **Besok**: Peringatan H-1.
  - 🟠 **Hari Ini**: Alert mendesak prioritas tinggi.
  - 🔴 **Overdue**: Penanda tugas yang melewati batas waktu.
- Centang selesai atau hapus pengingat dengan cepat.

### 4. 📑 Rekapitulasi Laporan Produktivitas (Reports)
- Statistik tingkat keberhasilan penyelesaian tugas (*completion rate %*).
- Sebaran tugas per kategori divisi/mata pelajaran.
- **Ekspor Dokumen**:
  - Unduh berkas **CSV** siap olah spreadsheet Excel.
  - **Cetak Laporan PDF** dengan tata letak dokumen resmi.

### 5. 👥 Manajemen Pengguna & Hak Akses (RBAC)
- Tiga tingkatan peran pengguna:
  - **Owner**: Pemilik sistem dengan akses mutlak dan supervisi tim.
  - **Admin**: Koordinator/supervisor yang membagi tugas dan memantau progres.
  - **Worker**: Anggota tim/staf pelaksana lapangan.
- Tambah anggota baru, ubah peran, dan kelola nomor kontak serta divisi.

### 6. 🌓 Dual Mode Tema (Dark & Light Mode)
- **Mode Gelap (Dark Mode)**: Warna canvas *Deep Stone Charcoal* (`#1c1917`) dengan aksen oranye menyala (`#ea580c`).
- **Mode Terang (Light Mode)**: Canvas hangat bersih (`#fafaf9`) dengan kontras tinggi.
- Preferensi tema otomatis tersimpan di browser tanpa efek kedipan (*zero page flash*).

---

## 🎨 Palet Desain & Tema (Design System)

Aplikasi dibangun menggunakan skema warna terkurasi khas **Mng-Task**:

```text
Canvas (Dark)   : #1c1917 (Deep Stone Charcoal)
Surface Card    : #292524 (Stone 800)
Border          : #44403c (Stone 700)
Primary Accent  : #ea580c (Amber Orange 600)
Accent Secondary: #f59e0b (Amber 500)
Success Status  : #16a34a (Emerald Green)
Blocked Status  : #dc2626 (Crimson Red)
Tipografi       : Plus Jakarta Sans (Display) & Inter (Body)
```

---

## 🚀 Panduan Memulai Cepat (Getting Started)

### 1. Kloning Repositori
```bash
git clone https://github.com/your-username/mng-task.git
cd mng-task
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Aplikasi di Komputer Lokal
```bash
npm run dev
```
Buka browser Anda di `http://localhost:3001` untuk mengakses aplikasi.

### 4. Akun Demo Bawaan (Quick Login)
Pada halaman login, tersedia tombol **Pilih Akun Demo Cepat**:
- **Owner**: `owner@mngtask.id` (Duta Afrido Jamora)
- **Admin**: `budi.santoso@sekolah.sch.id` (Budi Santoso, M.Pd.)
- **Worker**: `ahmad.fadhil@siswa.sch.id` (Ahmad Fadhil)

*Kata sandi demo*: `password123`

---

## 📁 Struktur Direktori

```text
mng-task/
├── public/                # Asset statis & favicon
├── src/
│   ├── components/
│   │   ├── auth/          # LoginPage split-screen mewah
│   │   ├── common/        # Sidebar (256px) & Sticky Header
│   │   ├── dashboard/     # Tab metrik 4 kolom & sebaran prioritas
│   │   ├── kanban/        # Papan Kanban 4 kolom & Tabel list
│   │   ├── reminders/     # Alarm reminder & countdown timer
│   │   ├── reports/       # Ekspor laporan CSV & cetak PDF
│   │   ├── settings/      # Pengaturan tema & preferensi akun
│   │   ├── tasks/         # Modal input & edit tugas cepat
│   │   └── users/         # Manajemen anggota tim & hak akses
│   ├── context/           # Global TaskContext & LocalStorage persistence
│   ├── types/             # TypeScript definitions & App config
│   ├── App.tsx            # Main auth gate & layout router
│   ├── main.tsx           # Entrypoint mounting
│   └── index.css          # Styling Tailwind & CSS variables
├── index.html             # HTML Shell dengan font Plus Jakarta Sans
├── package.json           # Dependensi & skrip Vite
├── tailwind.config.js     # Kustomisasi palet warna Stone-Orange
└── vite.config.ts         # Konfigurasi bundler Vite
```

---

## 📄 Lisensi
Didistribusikan di bawah lisensi **MIT License**. Bebas digunakan, dipelajari, dan dikembangkan untuk proyek produktivitas tim Anda.
