# 📦 Smart Inventory Management System

Bu proje, modern fabrika ve depo envanter takibi için geliştirilmiş **Full-Stack** bir uygulamadır. **Angular 17+** ve **.NET 8** teknolojilerini birleştirerek, **SignalR** üzerinden gerçek zamanlı veri akışı sağlar.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![.NET 8](https://img.shields.io/badge/.NET%208-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Özellikler

- **📊 Canlı Dashboard:** SignalR (WebSocket) ile anlık sıcaklık ve sensör verisi takibi.
- **⚡ Gerçek Zamanlı Bildirimler:** Kritik seviyeler ve işlem durumları (Toast Notification) anında ekrana yansır.
- **🛠️ Cihaz Yönetimi (CRUD):** - Modal (Popup) mimarisi ile sayfa yenilemeden hızlı ekleme/güncelleme.
  - Akıllı validasyonlar (Örn: Mükerrer seri numarası kontrolü).
- **🐳 Docker Entegrasyonu:** Veritabanı ve servislerin konteynerize edilmiş yapısı.
- **📱 Responsive Tasarım:** Mobil ve masaüstü uyumlu modern arayüz.

## 📸 Ekran Görüntüleri

Projenin arayüz akışı aşağıdadır:

### 1. Ana Liste Görünümü

Tüm cihazların listelendiği ve durumlarının (Aktif/Pasif) takip edildiği ana ekran.

![Cihaz Listesi](./images/list.png)

---

### 2. Cihaz Yönetimi (Modal)

Sayfa yenilenmeden açılan pop-up formlar ile hızlı veri girişi.

|                      Yeni Cihaz Ekleme                       |                          Cihaz Güncelleme                           |
| :----------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="./images/add.png" width="100%" alt="Ekleme Formu"> | <img src="./images/update.png" width="100%" alt="Güncelleme Formu"> |
|                 _Validasyonlu Ekleme Formu_                  |                    _Mevcut Verilerle Düzenleme_                     |

---

### 3. Durum Bildirimleri

Sistem durumuna göre kullanıcıya verilen anlık geri bildirimler.

|                    Kritik Hata / Yüksek Sıcaklık                     |                   Normal Durum / Başarılı İşlem                    |
| :------------------------------------------------------------------: | :----------------------------------------------------------------: |
| <img src="./images/critical.png" width="100%" alt="Kritik Bildirim"> | <img src="./images/normal.png" width="100%" alt="Normal Bildirim"> |

## ⚙️ Kurulum ve Başlatma (Hızlı Yöntem 🚀)

Proje, geliştirme ortamında **tek komutla** ayağa kalkacak şekilde yapılandırılmıştır.

### Ön Gereksinimler

- [Node.js](https://nodejs.org/) (v18+)
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (Veritabanı için gereklidir)

### Adım 1: Projeyi Klonlayın

```bash
git clone ""
cd SmartInventory
```
