import '@fontsource-variable/inter'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark bg-[#0a0f1d] text-[#e2e8f0]">
      <head>
        <meta name="yandex-verification" content="5aad5f8df0030faf" />
        <meta charSet="utf-8" />
        <title>Безпозитные бонусы казино 2026: свежие бездепы за регистрацию и фриспины</title>
        <meta
          name="description"
          content="Эксклюзивные бездепозитные бонусы казино за регистрацию без первого взноса. Получите бездеп бонус, фриспины и лучшие бездепы казино онлайн с моментальным выводом выигрыша на карту прямо сейчас!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bezdepcasino7.vercel.app/" />
        <meta property="og:title" content="Бездепозитные бонусы казино 2026 — лучшие бездепы за регистрацию" />
        <meta
          property="og:description"
          content="Актуальный список: проверенные бездепозитные бонусы казино, фриспины за регистрацию и моментальный вывод реальных денег."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bezdepcasino7.vercel.app/" />
        <meta property="og:image" content="https://bezdepcasino7.vercel.app/images/hero-woman.png" />
        <meta property="og:site_name" content="LuckyBear Бездеп Казино" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Бездепозитные бонусы казино 2026: свежие бездепы за регистрацию" />
        <meta
          name="twitter:description"
          content="Заберите свой бездеп бонус за регистрацию в проверенном онлайн казино прямо сейчас."
        />
        <meta name="twitter:image" content="https://bezdepcasino7.vercel.app/images/hero-woman.png" />
        <meta name="theme-color" content="#0a0f1d" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased font-sans bg-[#0a0f1d] text-[#e2e8f0] min-h-screen">
        {children}
      </body>
    </html>
  )
}
