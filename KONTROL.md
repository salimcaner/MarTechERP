# Node.js Kurulum Kontrolü

## Adım 1: PowerShell'i YENİDEN AÇ
⚠️ **ÖNEMLİ:** Mevcut PowerShell penceresini kapatın ve yeni bir tane açın!

## Adım 2: Kontrol Komutları
Yeni PowerShell'de şu komutları çalıştırın:

```powershell
node --version
npm --version
```

### ✅ Başarılı ise:
Her ikisi de versiyon numarası gösterecek (örn: `v18.17.0` ve `9.6.7`)

### ❌ Hala çalışmıyorsa:

#### Seçenek 1: Bilgisayarı Yeniden Başlat
PATH değişikliklerinin etkili olması için bilgisayarı yeniden başlatın.

#### Seçenek 2: Kurulumu Kontrol Et
1. Windows tuşu + R → `appwiz.cpl` yazın → Enter
2. "Node.js" arayın
3. Eğer görünüyorsa kurulum tamamlanmış demektir
4. Eğer görünmüyorsa kurulumu tekrar yapın

#### Seçenek 3: PATH'i Manuel Kontrol Et
1. Windows tuşu + R → `sysdm.cpl` yazın → Enter
2. "Advanced" sekmesi → "Environment Variables"
3. "System variables" altında "Path" seçin → Edit
4. Şu yol var mı kontrol edin: `C:\Program Files\nodejs\`
5. Yoksa "New" → ekleyin → OK

## Adım 3: Projeyi Çalıştır
Node.js çalışıyorsa:

```powershell
cd frontend
npm install
npm run dev
```

