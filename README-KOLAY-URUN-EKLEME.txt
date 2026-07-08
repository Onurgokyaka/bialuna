# Bialuna Kolay Ürün Ekleme Patch

Bu paket ürünleri artık tek dosyadan yönetmek için hazırlandı.

## Ne değişiyor?

Eski yöntem:
- Her ürün için ayrı `src/products/*.md` dosyası oluşturuluyordu.

Yeni yöntem:
- Tüm ürünler tek dosyada tutuluyor:

`src/_data/products.json`

Bundan sonra yeni ürün eklerken sadece:
1. Fotoğrafı `src/assets/uploads/` içine yükle.
2. `src/_data/products.json` dosyasına ürün satırını ekle.
3. Commit changes yap.

## GitHub'a nasıl yüklenecek?

ZIP içindeki `src` klasörünü GitHub repo köküne aynı yapıda yükle.

Bu iki dosya değişecek/eklenecek:

- `src/index.njk`
- `src/_data/products.json`

Eski `src/products/*.md` dosyaları kalsa da sorun olmaz. Bu patch'ten sonra ana sayfa ürünleri artık `products.json` dosyasından okur.

## Yeni ürün ekleme örneği

`src/_data/products.json` dosyasında son ürünün kapanışından sonra virgül koyup şu yapıyı ekleyebilirsin:

{
  "title": "Yeni Ürün Adı",
  "price": "₺280",
  "description": "Ürün açıklaması buraya yazılır.",
  "image": "/assets/uploads/yeni-urun-fotografi.jpg",
  "badge": "Yeni",
  "category": "Şal",
  "active": true,
  "paymentLink": ""
}

## Önemli kurallar

- Dosya adı ve image yolu birebir aynı olmalı.
- Görsel yolu `/assets/uploads/dosya-adi.jpg` şeklinde başlamalı.
- Ürünü gizlemek istersen `"active": false` yap.
- Fiyat değiştirirken sadece `"price": "₺..."` alanını değiştir.
- İleride ödeme linki gelirse `"paymentLink": "https://..."` alanına ekleyebiliriz.

## Not

Şu an ödeme butonu aktif edilmedi. Site görünümü bozulmasın diye sadece ürün yönetimi kolaylaştırıldı.
