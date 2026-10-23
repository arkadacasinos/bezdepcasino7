import Image from 'next/image'

const REF_URL = 'https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603'

export default function Page() {
  return (
    <div className="b7x9-root min-h-screen bg-[#0a0f1d] text-[#e2e8f0] flex flex-col font-sans">
      {/* Mobile Backdrop Scrim for CSS :target drawer */}
      <a
        href="#!"
        className="b7x9-scrim fixed inset-0 bg-black/75 z-40 transition-opacity md:hidden"
        aria-label="Закрыть меню"
      />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 w-full bg-[#0d1424] border-b border-[#1e293b] px-3 sm:px-6 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Mobile Burger link targeting #mobile-menu */}
          <a
            href="#mobile-menu"
            className="md:hidden p-2 rounded-lg bg-[#151f35] text-[#94a3b8] hover:text-white"
            aria-label="Открыть навигацию"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Brand Logo */}
          <a href={REF_URL} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">
              LUCKY<span className="text-blue-500">BEAR</span>
            </span>
          </a>

          {/* Quick Header Navigation Badges */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={REF_URL}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#162137] hover:bg-[#1e2d4a] text-xs font-semibold text-[#94a3b8] hover:text-white border border-[#233352] transition-colors"
            >
              <span>🎁</span>
              <span>Призовой пул</span>
            </a>
            <a
              href={REF_URL}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#162137] hover:bg-[#1e2d4a] text-xs font-semibold text-[#94a3b8] hover:text-white border border-[#233352] transition-colors"
            >
              <span>🕒</span>
              <span>История</span>
            </a>
            <a
              href={REF_URL}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#162137] hover:bg-[#1e2d4a] text-xs font-semibold text-[#94a3b8] hover:text-white border border-[#233352] transition-colors"
            >
              <span>🤍</span>
              <span>Избранное</span>
            </a>
            <a
              href={REF_URL}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#162137] hover:bg-[#1e2d4a] text-xs font-semibold text-[#94a3b8] hover:text-white border border-[#233352] transition-colors"
            >
              <span>🏷️</span>
              <span>Промокод</span>
            </a>
          </div>
        </div>

        {/* Right CTA / Language */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#162137] border border-[#233352] text-xs font-medium text-slate-300">
            <span className="w-4 h-3 inline-block rounded-xs overflow-hidden border border-slate-600 bg-white relative">
              <span className="block h-1 bg-white" />
              <span className="block h-1 bg-blue-600" />
              <span className="block h-1 bg-red-600" />
            </span>
            <span>RU</span>
          </div>
          <a
            href={REF_URL}
            className="px-4 sm:px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Зарегистрировать / Войти
          </a>
        </div>
      </header>

      {/* Main Layout Area: Sidebar Rail + Content Body */}
      <div className="flex flex-1 w-full relative">
        {/* Left Vertical Navigation Rail (Desktop + Mobile :target drawer) */}
        <aside
          id="mobile-menu"
          className="fixed md:sticky top-0 md:top-[57px] left-0 h-screen md:h-[calc(100vh-57px)] w-60 bg-[#0d1424] border-r border-[#1e293b] p-3 flex flex-col justify-between z-50 md:z-20 overflow-y-auto b7x9-scrollbar-none"
        >
          <div className="space-y-4">
            {/* Mobile close bar */}
            <div className="flex md:hidden items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="font-extrabold text-white text-base">LUCKYBEAR</span>
              <a href="#!" className="p-1.5 rounded-lg bg-[#1a253d] text-slate-400 hover:text-white" aria-label="Закрыть">
                ✕
              </a>
            </div>

            {/* Casino / Sport Switcher */}
            <div className="grid grid-cols-2 p-1 bg-[#151f35] rounded-xl border border-[#22314e]">
              <a
                href={REF_URL}
                className="py-1.5 text-center text-xs font-bold rounded-lg bg-blue-600 text-white shadow-sm"
              >
                Казино
              </a>
              <a
                href={REF_URL}
                className="py-1.5 text-center text-xs font-semibold rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                Спорт
              </a>
            </div>

            {/* Navigation Category Links */}
            <nav className="space-y-1">
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/30 text-xs font-bold shadow-sm"
              >
                <span className="text-sm">🏠</span>
                <span>Главная</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-[#16223b] hover:text-white text-xs font-semibold transition-colors"
              >
                <span className="text-sm">🍒</span>
                <span>Слоты</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-[#16223b] hover:text-white text-xs font-semibold transition-colors"
              >
                <span className="text-sm">⚡</span>
                <span>Быстрые игры</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-[#16223b] hover:text-white text-xs font-semibold transition-colors"
              >
                <span className="text-sm">🔥</span>
                <span>Популярные</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-[#16223b] hover:text-white text-xs font-semibold transition-colors"
              >
                <span className="text-sm">🎁</span>
                <span>Покупка Бонуса</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-[#16223b] hover:text-white text-xs font-semibold transition-colors"
              >
                <span className="text-sm">✨</span>
                <span>Новинки</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-[#16223b] hover:text-white text-xs font-semibold transition-colors"
              >
                <span className="text-sm">📺</span>
                <span>Live-игры</span>
              </a>
            </nav>

            <div className="pt-2 border-t border-[#1e293b] space-y-1">
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:bg-[#16223b] hover:text-white text-xs font-medium transition-colors"
              >
                <span>👥</span>
                <span>Пригласить</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:bg-[#16223b] hover:text-white text-xs font-medium transition-colors"
              >
                <span>⭐</span>
                <span>Бонусы</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:bg-[#16223b] hover:text-white text-xs font-medium transition-colors"
              >
                <span>💳</span>
                <span>Пополнить</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 hover:bg-[#16223b] hover:text-white text-xs font-medium transition-colors"
              >
                <span>👤</span>
                <span>Профиль</span>
              </a>
            </div>
          </div>

          {/* Social Links at Bottom of Sidebar */}
          <div className="pt-4 border-t border-[#1e293b] flex items-center justify-between text-slate-400 text-xs">
            <div className="flex items-center gap-2">
              <a href={REF_URL} className="w-7 h-7 rounded-lg bg-[#162137] hover:bg-blue-600 hover:text-white flex items-center justify-center font-bold transition-colors">
                VK
              </a>
              <a href={REF_URL} className="w-7 h-7 rounded-lg bg-[#162137] hover:bg-black hover:text-white flex items-center justify-center font-bold transition-colors">
                X
              </a>
              <a href={REF_URL} className="w-7 h-7 rounded-lg bg-[#162137] hover:bg-pink-600 hover:text-white flex items-center justify-center font-bold transition-colors">
                TG
              </a>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">v7.4</span>
          </div>
        </aside>

        {/* Center / Main Content Container */}
        <main className="flex-1 w-full min-w-0 p-3 sm:p-5 lg:p-6 space-y-6">
          {/* First Screen: Hero Banners Grid (exact layout from screenshot 2) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Main Big Banner (Left 8 Cols): Bonus up to 360% */}
            <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#121b33] via-[#0f172a] to-[#0a0f1d] border border-[#223253] p-6 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[400px] shadow-2xl">
              {/* Background gradient decorative glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-sm sm:max-w-md space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
                  Горячее предложение 2026
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                  Бонус до{' '}
                  <span className="b7x9-text-gradient-blue text-4xl sm:text-6xl block mt-1 drop-shadow-md">
                    360%
                  </span>
                  за депозит!
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm pt-2 leading-relaxed">
                  Активируйте лучший бездепозитный бонус за регистрацию и получайте до 360% на первые пополнения с моментальным выводом!
                </p>
              </div>

              {/* Character Illustration on right side */}
              <div className="absolute right-0 bottom-0 w-52 sm:w-80 md:w-96 h-[85%] pointer-events-none z-0 opacity-80 sm:opacity-100">
                <Image
                  src="/images/hero-woman.png"
                  alt="Девушка с кубком победы в казино"
                  fill
                  priority
                  className="object-contain object-right-bottom"
                />
              </div>

              {/* Call to action button */}
              <div className="relative z-10 pt-4">
                <a
                  href={REF_URL}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-[1.03] transition-all"
                >
                  <span>Забрать 360% бонус</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Two stacked cards */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {/* Top Right Card: 5,000,000 R */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#16213a] to-[#0d1526] border border-[#233454] p-5 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] hover:border-blue-500/50 transition-all shadow-lg"
              >
                <div className="relative z-10 max-w-[65%]">
                  <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    ЕЖЕДНЕВНО РАЗЫГРЫВАЕТСЯ БОЛЕЕ
                  </div>
                  <div className="text-2xl sm:text-3xl font-black b7x9-text-gradient-gold mt-1">
                    5,000,000 ₽
                  </div>
                  <div className="inline-block mt-2 px-2.5 py-1 rounded-md bg-[#212f4c] text-slate-300 text-[11px] font-semibold">
                    Акция Lucky Bonus
                  </div>
                </div>

                <div className="absolute right-2 bottom-2 w-32 sm:w-36 h-32 sm:h-36 pointer-events-none">
                  <Image
                    src="/images/promo-roulette.png"
                    alt="Колесо фортуны и призы"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              {/* Bottom Right Card: Free Spins waiting */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#16213a] to-[#0d1526] border border-[#233454] p-5 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] hover:border-blue-500/50 transition-all shadow-lg"
              >
                <div className="relative z-10 max-w-[60%] space-y-1">
                  <div className="text-lg sm:text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                    Твои FS уже ждут
                  </div>
                  <div className="text-slate-400 text-[11px] leading-snug">
                    Просто зарегистрируйся и получи бездепозитный бонус за регистрацию!
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/30">
                      Получить FS
                    </span>
                  </div>
                </div>

                <div className="absolute right-1 bottom-1 w-32 sm:w-36 h-32 sm:h-36 pointer-events-none">
                  <Image
                    src="/images/promo-brunette.png"
                    alt="Девушка с фриспинами"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </section>

          {/* Filter Bar with Categories + Search + Providers */}
          <section className="flex flex-wrap items-center justify-between gap-3 p-2 bg-[#0e1628] rounded-2xl border border-[#1e2a42]">
            <div className="flex items-center gap-1.5 overflow-x-auto b7x9-scrollbar-none py-1 px-1">
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/20 whitespace-nowrap"
              >
                <span>▦</span>
                <span>Все</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141e33] hover:bg-[#1a2742] text-slate-300 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <span>🍒</span>
                <span>Слоты</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141e33] hover:bg-[#1a2742] text-slate-300 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <span>⚡</span>
                <span>Быстрые игры</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141e33] hover:bg-[#1a2742] text-slate-300 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <span>🔥</span>
                <span>Популярные</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141e33] hover:bg-[#1a2742] text-slate-300 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <span>🎁</span>
                <span>Покупка Бонуса</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#141e33] hover:bg-[#1a2742] text-slate-300 text-xs font-semibold whitespace-nowrap transition-colors"
              >
                <span>✨</span>
                <span>Новинки</span>
              </a>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <a
                href={REF_URL}
                className="p-2 rounded-xl bg-[#141e33] text-slate-400 hover:text-white border border-[#23314e] transition-colors"
                aria-label="Поиск слотов"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141e33] text-slate-300 text-xs font-semibold border border-[#23314e] hover:bg-[#1a2742] transition-colors"
              >
                <span>⚙️</span>
                <span>Провайдеры</span>
                <span className="text-[10px] text-slate-500">▼</span>
              </a>
            </div>
          </section>

          {/* Slots Showcase Gallery (matching Screenshot 2: Gemstones Gold, 3 Coin Peacock, Wild Bandito, Crown Coins, etc.) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍒</span>
                <span className="font-extrabold text-base sm:text-lg text-white">Популярные слоты с бездепом</span>
              </div>
              <a
                href={REF_URL}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>Все</span>
                <span>→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {/* Slot 1 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-gemstones.png"
                    alt="Слот Gemstones Gold"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-amber-300 tracking-wide uppercase">
                      Gemstones Gold
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">PG SOFT</div>
                  </div>
                </div>
              </a>

              {/* Slot 2 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-peacock.png"
                    alt="Слот 3 Coin Peacock"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-amber-300 tracking-wide uppercase">
                      3 Coin Peacock
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">3 OAKS</div>
                  </div>
                </div>
              </a>

              {/* Slot 3 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-bandito.png"
                    alt="Слот Wild Bandito"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-amber-300 tracking-wide uppercase">
                      Wild Bandito
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">PG SOFT</div>
                  </div>
                </div>
              </a>

              {/* Slot 4 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-crown.png"
                    alt="Слот Crown Coins"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-amber-300 tracking-wide uppercase">
                      Crown Coins
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">ENDORPHINA</div>
                  </div>
                </div>
              </a>

              {/* Slot 5 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-garuda.png"
                    alt="Слот Fortune Garuda"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-amber-300 tracking-wide uppercase">
                      Fortune Garuda
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">PRAGMATIC</div>
                  </div>
                </div>
              </a>

              {/* Slot 6 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-bonanza.png"
                    alt="Слот Sweet Bonanza 2500"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-pink-300 tracking-wide uppercase">
                      Sweet Bonanza
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">PRAGMATIC</div>
                  </div>
                </div>
              </a>

              {/* Slot 7 */}
              <a
                href={REF_URL}
                className="group relative rounded-2xl overflow-hidden bg-[#111a2f] border border-[#1e2a42] hover:border-blue-500 transition-all hover:scale-[1.04] shadow-md flex flex-col"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/slots-cowgirl.png"
                    alt="Слот Wild Bounty Showdown"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 inset-x-2 text-center">
                    <div className="text-[11px] font-black text-amber-300 tracking-wide uppercase">
                      Wild Bounty
                    </div>
                    <div className="text-[9px] text-slate-400 font-semibold">PG SOFT</div>
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Quick Registration CTA Banner */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xl sm:text-2xl font-black text-white">
                Заберите свой <span className="text-blue-400">бездепозитный бонус за регистрацию</span> прямо сейчас!
              </div>
              <p className="text-slate-300 text-xs sm:text-sm">
                Никаких скрытых условий — моментальная выдача бездепа, бесплатные вращения и вывод на любую карту.
              </p>
            </div>
            <a
              href={REF_URL}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm whitespace-nowrap shadow-xl shadow-blue-600/30 hover:scale-105 transition-all"
            >
              Активировать бездеп
            </a>
          </section>

          {/* =========================================================================
              SEO ARTICLE: 1600-2000 WORDS OF DETAILED RUSSIAN CONTENT WITH TARGET KEYS
              Semantic pure HTML, every key in H2 headings and paragraphs, reorderable.
             ========================================================================= */}
          <article className="b7x9-article space-y-8 pt-6 border-t border-[#1e2a42]">
            {/* Section 1 */}
            <section id="section-bezdepozitnye-bonusy" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепозитные бонусы: что это такое и как получить реальные деньги без риска</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  В современном гемблинге <strong>бездепозитные бонусы</strong> представляют собой один из наиболее востребованных и эффективных инструментов привлечения как новичков, так и опытных игроков. Главная ценность, которой обладают бездепозитные бонусы, заключается в абсолютном отсутствии финансового риска для самого пользователя: вам не требуется пополнять собственный баланс или вводить реквизиты банковских карт, чтобы приступить к настоящей игре на реальные деньги.
                </p>
                <p>
                  Виртуальные азартные клубы начисляют такие подарки в качестве приветственного жеста. Используя бездепозитные бонусы, каждый гость заведения получает полноценную возможность протестировать самые популярные сертифицированные игровые автоматы, изучить волатильность выбранных аппаратов, оценить качество службы круглосуточной технической поддержки и скорость работы финансового отдела. При этом выигрыш, полученный в результате успешной игровой сессии, после выполнения несложных правил отыгрыша можно беспрепятственно вывести на любую платежную систему, будь то банковская карта МИР, электронный кошелек или криптовалютный адрес.
                </p>
                <p>
                  Сегодня надежные и лицензированные площадки предлагают бездепозитные бонусы в различных удобных вариациях: в виде подарочных денежных сумм на бонусный счет, бесплатных вращений (фриспинов) для топовых барабанных слотов или специализированных билетов на участие в турнирах с многомиллионными призовыми фондами.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-bezdepozitnyj-bonus" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепозитный бонус в онлайн казино: пошаговая инструкция активации</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Для того чтобы успешно активировать <strong>бездепозитный бонус</strong>, игроку достаточно выполнить несколько элементарных шагов, занимающих не более двух минут времени. Прежде всего необходимо перейти по официальной безопасной ссылке на сайт проверенного азартного клуба. Правильный бездепозитный бонус активируется автоматически сразу после подтверждения созданной учетной записи.
                </p>
                <p>
                  Стандартная процедура включает заполнение короткой формы с указанием адреса электронной почты или номера мобильного телефона, выбор надежного пароля и предпочитаемой валюты счета. Как только вы подтвердите контактные данные, бездепозитный бонус мгновенно отобразится в персональном кабинете в разделе доступных поощрений. В некоторых случаях администрация клуба может попросить указать актуальный промокод, который мгновенно открывает повышенный пакет бесплатных вращений.
                </p>
                <p>
                  Важно помнить, что каждый бездепозитный бонус сопровождается индивидуальными правилами использования. Среди ключевых параметров следует обращать внимание на вейджер (коэффициент оборота ставок), максимальный размер допустимой ставки во время отыгрыша, перечень разрешенных слотов и срок действия специального предложения.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-bezdepozitnyj-bonus-za-registraciyu" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепозитный бонус за регистрацию: мгновенный старт без вложений</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Наиболее популярной разновидностью приветственных вознаграждений по праву считается <strong>бездепозитный бонус за регистрацию</strong>. Это классический вариант поощрения, который создается специально для новых пользователей, впервые открывающих счет на выбранной игровой платформе. Получая бездепозитный бонус за регистрацию, игрок моментально переходит в статус полноправного участника клуба со всеми сопутствующими привилегиями программы лояльности.
                </p>
                <p>
                  В отличие от стандартных депозитных предложений, бездепозитный бонус за регистрацию не обязывает пользователя рисковать своими накоплениями. Вы можете сразу запустить слоты от мировых гигантов индустрии — NetEnt, Pragmatic Play, Endorphina, Play&apos;n GO или PG Soft — делая реальные ставки за счет средств онлайн-казино. Вся выигранная сумма аккумулируется на бонусном счете и готова к дальнейшему отыгрышу по прозрачным и честным условиям.
                </p>
                <p>
                  Грамотный выбор площадки, предоставляющей щедрый бездепозитный бонус за регистрацию, позволяет на старте сформировать солидный банкролл и получить яркий заряд азартных эмоций без малейшего психологического давления.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-bezdepozitnye-bonusy-za-registraciyu" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепозитные бонусы за регистрацию: рейтинг лучших предложений 2026 года</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Каждый сезон эксперты гемблинг-индустрии анализируют рынок и формируют свежий перечень, в который входят исключительно проверенные <strong>бездепозитные бонусы за регистрацию</strong> с быстрыми выплатами и лояльными вейджерами. Отбор операторов проводится по строжайшим критериям: наличие официальной международной лицензии (Кюрасао, Мальта, Анжуан), оригинальность игрового софта, скорость обработки заявок на вывод средств и отсутствие скрытых комиссий.
                </p>
                <p>
                  В 2026 году топовые бездепозитные бонусы за регистрацию чаще всего предоставляются в виде пакетов от 50 до 200 бесплатных вращений в популярных автоматах, таких как Sweet Bonanza, Gates of Olympus, Gemstones Gold или Crown Coins. Выбирая надежные бездепозитные бонусы за регистрацию, пользователи получают гарантию честного генератора случайных чисел (RNG) и защиту персональных данных по современным протоколам шифрования SSL.
                </p>
                <p>
                  Перед тем как активировать найденные бездепозитные бонусы за регистрацию, обязательно ознакомьтесь с лимитами на максимальный кешаут: честные клубы позволяют выводить от 2 000 до 15 000 рублей чистого выигрыша, полученного исключительно с подарочных вращений.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-bezdep" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездеп: сленг игроков и главное секретное оружие начинающих</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  В сообществе азартных игроков термин <strong>бездеп</strong> давно стал синонимом умного и безопасного входа в любую игровую сессию. Опытные гемблеры часто рекомендуют: если вы хотите проверить отдачу конкретного автомата или познакомиться с новой игорной площадкой, первым делом заберите актуальный бездеп. Это убережет ваш личный бюджет от опрометчивых трат на этапе знакомства с интерфейсом.
                </p>
                <p>
                  По своей сути бездеп представляет собой уникальный кредит доверия от игорного заведения. Казино берет все финансовые риски на себя, оплачивая ваши вращения в слотах. Если вам улыбнется удача и аппарат выдаст бонусную игру с умножением x1000 или x5000, полученный бездеп трансформируется в настоящую крупную сумму, готовую к переводу на вашу карту.
                </p>
                <p>
                  С каждым годом бездеп становится все более технологичным: сегодня для его получения нередко достаточно просто авторизоваться через Telegram или подтвердить номер через быстрый звонок-сброс, после чего средства моментально поступают на баланс.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-bezdepy" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепы нового поколения: какие форматы доступны сегодня</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Современные <strong>бездепы</strong> существенно отличаются от тех предложений, которые существовали на заре развития онлайн-казино. Если раньше клубы ограничивались скромными символическими суммами с нереалистичными условиями отыгрыша, то сегодня качественные бездепы предлагают максимально прозрачные и выполнимые правила.
                </p>
                <p>
                  В зависимости от механики начисления, бездепы классифицируются на несколько ключевых категорий:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                  <li><strong>Фриспины без депозита:</strong> серия бесплатных спинов с фиксированной ставкой на хитовых автоматах от ведущих провайдеров.</li>
                  <li><strong>Денежные средства на счет:</strong> фиксированная сумма (например, 1 000 или 2 500 рублей), которую можно самостоятельно распределять между различными игровыми категориями.</li>
                  <li><strong>Бездепы по промокодам:</strong> эксклюзивные поощрения для подписчиков социальных сетей и читателей профильных информационных порталов.</li>
                  <li><strong>Подарки на день рождения:</strong> ежегодные персональные бездепы для постоянных верифицированных клиентов без обязательного депозита.</li>
                </ul>
                <p>
                  Изучая различные бездепы, всегда обращайте внимание на показатель RTP (возврат игроку) тех слотов, в которых разрешено использовать подарочные средства. Высокий RTP (от 96% и выше) в разы увеличивает математические шансы на успешное закрытие вейджера.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-bezdep-bonusy" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездеп бонусы: тонкости отыгрыша и секреты быстрого вывода</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Многие начинающие пользователи задаются вопросом: действительно ли можно обналичить <strong>бездеп бонусы</strong> или это всего лишь рекламный ход? Практика сотен тысяч успешных выводов доказывает, что бездеп бонусы абсолютно реальны, если строго соблюдать регламент выбранного клуба и понимать базовые математические принципы отыгрыша.
                </p>
                <p>
                  Главный параметр, определяющий сложность конвертации средств — это вейджер (обозначается как «x»). Например, если ваши бездеп бонусы принесли 1 000 рублей выигрыша при вейджере x30, общая сумма сделанных ставок в разрешенных автоматах должна составить 30 000 рублей. При этом вовсе не обязательно проигрывать эту сумму — учитываются как выигрышные, так и не выигрышные вращения. В аппаратах с низкой или средней волатильностью баланс держится стабильно, позволяя без труда прокрутить необходимый объем.
                </p>
                <p>
                  Опытные игроки рекомендуют использовать бездеп бонусы исключительно в сертифицированных клубах, где таймер отыгрыша составляет не менее 48–72 часов. Это позволяет играть в комфортном темпе, не совершая поспешных и неоправданных ставок.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-bezdep-bonus" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездеп бонус для мобильных устройств: играйте со смартфона в один клик</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  С развитием мобильных технологий более 85% азартных развлечений переместились на экраны смартфонов и планшетов. Именно поэтому современный <strong>бездеп бонус</strong> идеально оптимизирован под запуск на устройствах под управлением iOS и Android. Чтобы активировать мобильный бездеп бонус, не требуется устанавливать громоздкие сторонние программы — адаптивная мобильная версия сайта открывается прямо в вашем мобильном браузере.
                </p>
                <p>
                  Более того, многие передовые бренды начисляют специальный бездеп бонус тем пользователям, которые скачивают официальное мобильное приложение или подключают Telegram-бота клуба. Такие мобильные подарки часто сопровождаются пониженным вейджером и дают право на участие в закрытых закрытых турнирах выходного дня.
                </p>
                <p>
                  Интерфейс слотов на смартфоне полностью сохраняет все функции десктопной версии: быструю прокрутку, покупку бонусных раундов, автоигру и мгновенную связь с оператором саппорта прямо из панели управления.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-bezdepy-za-registraciyu" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепы за регистрацию с выводом на карту: как не допустить ошибок</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Когда игрок выбирает <strong>бездепы за регистрацию</strong>, его конечной целью является получение реального выигрыша и его беспрепятственный вывод на личную платежную карту. Чтобы заявка на вывод была одобрена финансовым отделом в течение нескольких минут, важно изначально соблюдать правила честной игры.
                </p>
                <p>
                  Существуют три фундаментальных правила, которые необходимо помнить, когда вы активируете бездепы за регистрацию:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 pl-2">
                  <li><strong>Один аккаунт на одного человека:</strong> строжайше запрещено создавать дублирующие учетные записи (мультиаккаунтинг). Попытка получить бездепы за регистрацию повторно с одного IP-адреса или на родственников приведет к немедленной блокировке всех профилей.</li>
                  <li><strong>Достоверные персональные данные:</strong> при заполнении профиля указывайте только реальные ФИО, дату рождения и номер телефона, соответствующие вашим документам.</li>
                  <li><strong>Соблюдение лимитов ставок:</strong> во время отыгрыша запрещено превышать максимально установленный размер спина (обычно до 300–500 рублей), иначе система может аннулировать накопленный результат.</li>
                </ol>
                <p>
                  Соблюдение этих элементарных требований гарантирует, что ваши бездепы за регистрацию принесут исключительно положительные эмоции и честно заработанные выплаты.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="section-bezdep-za-registraciyu" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездеп за регистрацию без первого взноса: реальность или миф?</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Среди новичков нередко бытует скептическое мнение относительно того, что <strong>бездеп за регистрацию</strong> дается просто так. Однако для игорного заведения это не благотворительность, а вполне просчитанная маркетинговая стратегия. Предоставляя щедрый бездеп за регистрацию, казино привлекает лояльную аудиторию, демонстрирует безупречное качество своего сервиса и скорость финансовых транзакций.
                </p>
                <p>
                  Клуб рассчитывает на долгосрочные отношения с клиентом: убедившись в честности отдачи и надежности платформы, игрок с высокой долей вероятности вернется снова, чтобы наслаждаться любимыми слотами. Именно поэтому лицензионным казино выгодно, чтобы вы получили свой первый выигрыш через бездеп за регистрацию и убедились в моментальной обработке вашей заявки на выплату.
                </p>
                <p>
                  Таким образом, бездеп за регистрацию является абсолютно прозрачным и взаимовыгодным инструментом сотрудничества между игроком и авторитетным гемблинг-оператором.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section id="section-bezdepozitnyj-bonus-kazino" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепозитный бонус казино: критерии выбора безопасного заведения</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Далеко не каждый найденный на просторах интернета <strong>бездепозитный бонус казино</strong> заслуживает внимания игрока. Чтобы не столкнуться с мошенническими скриптовыми сайтами с подкрученной отдачей, важно ориентироваться на проверенные критерии отбора. Настоящий, выгодный бездепозитный бонус казино предлагается только теми заведениями, которые работают по официальной международной лицензии от авторитетных регуляторов.
                </p>
                <p>
                  Проверить подлинность площадки можно по наличию кликабельного валидатора лицензии в футере сайта. Надежное заведение, где доступен бездепозитный бонус казино, всегда обеспечивает круглосуточную поддержку на русском языке, мгновенно отвечает в онлайн-чате и поддерживает все популярные методы ввода и вывода средств: СБП (Система быстрых платежей), банковские карты МИР, Visa, Mastercard, а также стейблкоины USDT, Bitcoin и Ethereum.
                </p>
                <p>
                  Также обратите внимание на ассортимент представленных провайдеров: качественный бездепозитный бонус казино позволяет вращать барабаны в играх от таких флагманов, как Evolution Gaming, Pragmatic Play, Amatic, Hacksaw Gaming и Nolimit City.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section id="section-bezdepy-v-kazino" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепы в казино: сравнение бесплатных вращений и денежных начислений</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Когда гемблер изучает доступные <strong>бездепы в казино</strong>, перед ним неизменно встает выбор между двумя основными форматами подарка: бесплатными спинами (Free Spins) и фиксированными бонусными рублями на баланс. Оба варианта обладают собственными уникальными преимуществами.
                </p>
                <p>
                  Бесплатные вращения, входящие в бездепы в казино, обычно привязаны к конкретному хитовому слоту. Их плюс заключается в фиксированной стоимости каждого раунда и возможности сорвать огромный куш в призовой игре с множителями. В свою очередь, прямые денежные бездепы в казино дарят пользователю полную свободу выбора: вы можете самостоятельно регулировать ставку на спин, переходить из классических автоматов в настольные игры (рулетка, блэкджек, баккара) или тестировать краш-игры нового поколения, такие как Aviator или JetX.
                </p>
                <p>
                  Выбирайте тот вариант, который максимально соответствует вашему индивидуальному стилю игры и уровню азартных амбиций.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-bezdepy-kazino" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бездепы казино для постоянных клиентов: программа лояльности и кэшбэк</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Ошибочно полагать, будто эксклюзивные <strong>бездепы казино</strong> предназначаются исключительно для вновь прибывших гостей. В передовых клубах существует многоуровневая программа VIP-лояльности, в рамках которой регулярные бездепы казино начисляются активным игрокам на еженедельной и ежемесячной основе.
                </p>
                <p>
                  По мере накопления очков опыта за ставки пользователь повышает свой статус — от «Новичка» до «Бриллиантового VIP». При переходе на каждый новый уровень игроку выдаются персональные бездепы казино с минимальным вейджером (вплоть до x1 или вовсе без отыгрыша), а также увеличивается процент бездепозитного еженедельного кэшбэка — возврата до 20% от суммы неудачных ставок за прошедший период.
                </p>
                <p>
                  Кроме того, индивидуальные менеджеры регулярно рассылают персональные промокоды и секретные бездепы казино в личных сообщениях и Telegram-рассылках для постоянных игроков.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section id="section-bonus-kazino" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бонус казино: как выжать максимум из каждого промо-предложения</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Любой квалифицированный <strong>бонус казино</strong> требует продуманного и дисциплинированного подхода. Не стоит бездумно запускать первый попавшийся слот на максимальную ставку: грамотное управление банкроллом — это залог стабильного успеха и регулярных выводов средств.
                </p>
                <p>
                  Чтобы эффективно отыграть предоставленный бонус казино, придерживайтесь стратегии дробных ставок. Оптимальный размер ставки для отыгрыша вейджера составляет от 0.5% до 1.5% от текущего бонусного баланса. Это позволяет сгладить дисперсию, переждать серию пустых спинов и дождаться высокооплачиваемой бонусной функции слота.
                </p>
                <p>
                  Также перед запуском игры убедитесь, что данный автомат не входит в список запрещенных для отыгрыша: в надежных заведениях список игр с 100% зачетом ставок подробно указан в пользовательском соглашении.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section id="section-bonusy-v-kazino" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span className="text-blue-500">#</span>
                <span>Бонусы в казино: полное руководство по акциям и специальным событиям</span>
              </h2>
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Подводя итог, современные <strong>бонусы в казино</strong> открывают перед игроками беспрецедентные возможности для комфортной, увлекательной и прибыльной игры. От бездепозитных подарков за регистрацию до гигантских депозитных пакетов со скидками до 360% — индустрия азарта предлагает решения на любой вкус и кошелек.
                </p>
                <p>
                  Используя бонусы в казино с умом, соблюдая правила ответственной игры и выбирая только лицензированные клубы с безупречной репутацией, вы получаете стопроцентный шанс превратить подарочные фриспины в реальные денежные выплаты на карту.
                </p>
                <p>
                  Не откладывайте удачу на потом — зарегистрируйтесь прямо сейчас, заберите свой эксклюзивный подарок и сделайте первый победный спин на лучших слотах мирового гемблинга!
                </p>
              </div>
            </section>
          </article>

          {/* Bottom Call to Action Box */}
          <section className="mt-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121c35] via-[#10182b] to-[#0a0f1d] border-2 border-blue-500/30 text-center space-y-4 shadow-2xl">
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Готовы начать игру с реальным выводом?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Забирайте свой приветственный бездепозитный бонус казино прямо сейчас, вращайте слоты без риска и выводите чистый выигрыш на карту!
            </p>
            <div className="pt-2">
              <a
                href={REF_URL}
                className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-base sm:text-lg shadow-2xl shadow-blue-600/50 hover:scale-105 transition-all"
              >
                <span>Получить бездепозитный бонус</span>
                <span>🚀</span>
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Footer Area with Hashtags Anchor Navigation */}
      <footer className="w-full bg-[#080c17] border-t border-[#1a243a] p-6 sm:p-10 space-y-8 mt-12">
        {/* Top Footer Navigation / Brand */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href={REF_URL} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
              LB
            </div>
            <span className="font-extrabold text-white tracking-wider text-base">
              LUCKY<span className="text-blue-500">BEAR</span> CASINO
            </span>
          </a>
          <div className="text-xs text-slate-500 text-center sm:text-right">
            Официальный информационный портал бездепозитных бонусов казино онлайн © 2026
          </div>
        </div>

        {/* Footer Hashtags constructed from all target keywords */}
        <div className="space-y-3 pt-4 border-t border-[#141d30]">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Тематическая навигация по ключевым фразам:
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="#section-bezdepozitnye-bonusy"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепозитные_бонусы
            </a>
            <a
              href="#section-bezdepozitnyj-bonus"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепозитный_бонус
            </a>
            <a
              href="#section-bezdepozitnyj-bonus-za-registraciyu"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепозитный_бонус_за_регистрацию
            </a>
            <a
              href="#section-bezdepozitnye-bonusy-za-registraciyu"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепозитные_бонусы_за_регистрацию
            </a>
            <a
              href="#section-bezdep"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездеп
            </a>
            <a
              href="#section-bezdepy"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепы
            </a>
            <a
              href="#section-bezdep-bonusy"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездеп_бонусы
            </a>
            <a
              href="#section-bezdep-bonus"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездеп_бонус
            </a>
            <a
              href="#section-bezdepy-za-registraciyu"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепы_за_регистрацию
            </a>
            <a
              href="#section-bezdep-za-registraciyu"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездеп_за_регистрацию
            </a>
            <a
              href="#section-bezdepozitnyj-bonus-kazino"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепозитный_бонус_казино
            </a>
            <a
              href="#section-bezdepy-v-kazino"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепы_в_казино
            </a>
            <a
              href="#section-bezdepy-kazino"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бездепы_казино
            </a>
            <a
              href="#section-bonus-kazino"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бонус_казино
            </a>
            <a
              href="#section-bonusy-v-kazino"
              className="px-3 py-1.5 rounded-lg bg-[#11192b] hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-[#1d2943] text-xs font-medium transition-colors"
            >
              #бонусы_в_казино
            </a>
          </div>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="text-[11px] text-slate-600 leading-relaxed pt-2">
          Внимание: азартные игры предназначены исключительно для лиц, достигших 18 лет (или возраста совершеннолетия в вашей юрисдикции). Играйте ответственно и относитесь к гемблингу как к развлечению, а не способу заработка. Все рекламные предложения и бонусы предоставляются на условиях пользовательского соглашения.
        </div>
      </footer>
    </div>
  )
}
