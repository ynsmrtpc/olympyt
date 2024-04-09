# Olympyt Uygulaması

Bu Expo uygulaması, React Native kullanılarak geliştirilmiştir.

## Gereksinimler

- [Node.js](https://nodejs.org/) kurulu olmalıdır.
- [Android Studio](https://developer.android.com/studio?hl=tr) yüklü olmalıdır. (Android İçin)
- [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12/) yüklü olmalıdır. (IOS İçin - Yalnızca MACOS)

## Yükleme

Tüm gereksinimleri yüklemek için terminale aşağıdaki komutu girin:

```bash
yarn
```

## Uygulamayı Çalıştırma

Uygulamayı başlatmak için terminale aşağıdaki komutu girin:

```bash
npx expo start
```

Bu komut, Expo geliştirme ortamını başlatacaktır. Eğer Android veya iOS cihazda Expo Go uygulaması yüklü ise:

- **QR Kod ile Açma**: Expo Go uygulamasını açın ve tarayıcıyı kullanarak çıkan QR kodu tarayın.
- **IP Adresi ile Açma**: Expo CLI konsolunda çıkan IP adresini kopyalayın ve Expo Go uygulamasının "Projects" sekmesindeki "Enter Project ID or URL" alanına yapıştırın.

## Lokalde Çalıştırma

Lokalde uygulamayı çalıştırmak için:

1. Expo CLI ile başlattığınız terminal penceresinde:
   - Android simülasyonu için `a` tuşuna basın. Expo, lokalde bir Android simülasyonu başlatacaktır.
   - iOS simülasyonu için `i` tuşuna basın (yalnızca Mac kullanıyorsanız). Expo, lokalde bir iOS simülasyonu başlatacaktır.

2. Ayrıca, Expo Go uygulaması ile de uygulamayı test edebilirsiniz. Expo Go uygulamasını cihazınıza yükleyin ve QR kodu tarayarak veya IP adresi ile uygulamayı görüntüleyin.