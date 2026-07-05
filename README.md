# Bialuna Collection CMS Website

Bu sürüm, ürün/fotoğraf yönetimi kolay olsun diye Decap CMS admin paneliyle hazırlandı.

## Bu sürümde neler var?

- Mobil uyumlu butik tasarım
- WhatsApp sipariş yönlendirmesi
- Instagram linki: `bialunacolection`
- `/admin` paneli
- Admin panelinden ürün ekleme, ürün silme, ürün pasife alma, fotoğraf yükleme, fiyat/açıklama değiştirme, WhatsApp numarası değiştirme

## Yerelde çalıştırma

```bash
npm install
npm run start
```

Tarayıcıda:

```text
http://localhost:8080
```

## Netlify ile canlıya alma

1. GitHub'da yeni bir repo oluştur.
2. Bu klasördeki dosyaları repo içine yükle.
3. Netlify hesabına gir.
4. `Add new site` > `Import an existing project` seç.
5. GitHub reposunu bağla.
6. Build ayarları:
   - Build command: `npm run build`
   - Publish directory: `_site`
7. Deploy et.

## Admin panelini açma

Netlify deploy sonrası:

1. Netlify Site Settings > Identity bölümünden Identity'yi aktif et.
2. Registration ayarını invite-only yap.
3. Kendi e-posta adresini davet et.
4. Git Gateway'i aktif et.
5. Site adresine `/admin` ekleyerek giriş yap.

Örnek:

```text
https://site-adin.netlify.app/admin/
```

## WhatsApp numarası

Admin panelinde `Site Ayarları` bölümünden değiştirilebilir.

Format:

```text
905349881451
```

Başında `+` koyma. Türkiye için `90` ile başlamalıdır.

## Fotoğraf değiştirme

Admin panelinde:

```text
Ürünler > Ürünü seç > Ürün fotoğrafı > Upload
```

Ürünü silersen veya `Aktif mi?` alanını kapatırsan ürün siteden kalkar.

## Not

Bu yapı veritabanı gerektirmez. Ürünler ve fotoğraflar GitHub deposunda tutulur, Netlify yayına alır.


## Hızlı önizleme

GitHub/Netlify öncesi siteyi görmek için:

```text
preview.html
```

dosyasına çift tıkla.

Bu dosya sadece hızlı görsel kontrol içindir. Canlıya alma için tüm klasörü GitHub'a yüklemen gerekir.
