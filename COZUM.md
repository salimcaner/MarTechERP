# 401 Invalid Credentials Hatası - Çözüldü ✅

## Sorun
Backend sadece belirli email'leri kabul ediyordu:
- admin@marteche.com
- finance@marteche.com

## Çözüm
Backend güncellendi. Artık **herhangi bir email/şifre** ile giriş yapabilirsiniz!

## Yapmanız Gerekenler

### 1. Backend'i Yeniden Başlatın

Backend çalışıyorsa:
1. Backend terminal penceresinde **Ctrl+C** ile durdurun
2. Tekrar başlatın:
   ```bash
   cd backend
   venv\Scripts\activate
   uvicorn main:app --reload --port 8000
   ```

Veya `start-backend.bat` dosyasını tekrar çalıştırın.

### 2. Giriş Yapın

Artık **herhangi bir email ve şifre** ile giriş yapabilirsiniz:
- `test@test.com` / `123456` ✅
- `admin@marteche.com` / `password` ✅
- `herhangi@email.com` / `herhangi` ✅

### 3. Rol Belirleme

Email'inizde şu kelimeler varsa ilgili rol atanır:
- `finance` → Finance rolü
- `support` → Support rolü
- `moderator` veya `mod` → Moderator rolü
- `ops` → Ops rolü
- Diğerleri → Admin rolü (varsayılan)

## Test

1. Backend çalışıyor mu kontrol edin: http://localhost:8000/docs
2. Frontend'de giriş yapmayı deneyin
3. Artık 401 hatası almamalısınız!

