import Image from "next/image"
import { Phone, MapPin, Clock, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export default function DiningRoomSite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Молодёжная</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Главная
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  О нас
                </a>
                <a
                  href="#menu"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Меню
                </a>
                <a
                  href="#gallery"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Фотогалерея
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Контакты
                </a>
              </div>
            </div>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              <Phone className="w-4 h-4 mr-2" />
              (4912) 24 38 01
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/kitchen-pattern.png')",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
          backgroundPosition: "0 0",
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Добро пожаловать
                  <span className="block text-gray-600">в столовую "Молодёжная"</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Уютное место для вкусного и сытного обеда. Домашняя атмосфера, качественная еда и доступные цены в
                  самом центре города.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                  Посмотреть меню
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Работаем ежедневно</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-12 rounded-2xl shadow-lg border-2 border-gray-100">
                <div className="text-center">
                  <Users className="w-16 h-16 text-gray-700 mx-auto mb-6" />
                  <div className="text-6xl font-bold text-gray-900 mb-4">
                    <AnimatedCounter target={60} duration={2500} />
                  </div>
                  <div className="text-2xl text-gray-600 font-medium">мест</div>
                  <div className="text-lg text-gray-500 mt-2">Вместимость зала</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Где мы находимся</h2>
            <p className="text-xl text-gray-600">Удобное расположение в центре города</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600">
                    г. Рязань, проезд Яблочкова, д. 6
                    <br />
                    (рядом с автобусной остановкой)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600 text-lg font-medium">(4912) 24 38 01</p>
                  <p className="text-sm text-gray-500">Городской телефон столовой</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gray-700 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Режим работы</h3>
                  <p className="text-gray-600">
                    Понедельник - Пятница: 8:00 - 18:00
                    <br />
                    Суббота - Воскресенье: 9:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Как нас найти</h3>
                <p className="text-gray-600">г. Рязань, проезд Яблочкова, д. 6</p>
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9F%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%20%D1%8F%D0%B1%D0%BB%D0%BE%D1%87%D0%BA%D0%BE%D0%B2%D0%BE,%206+(%D0%A1%D1%82%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F%20%22%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F%22)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Карта расположения столовой"
                  className="rounded-b-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=480&text=История+столовой"
                alt="Историческое фото столовой"
                width={480}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Наша история</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наша столовая работает уже более 25 лет, обслуживая жителей и гостей города. За это время мы стали
                неотъемлемой частью городской жизни, местом, где можно вкусно и сытно поесть в домашней атмосфере.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Мы гордимся тем, что сохраняем традиции домашней кухни, используя только свежие и качественные продукты.
                Наши повара готовят с душой, а персонал всегда рад видеть каждого посетителя.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">1000+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Меню</h2>
            <p className="text-xl text-gray-600">Домашняя кухня по доступным ценам</p>
          </div>

          <Card className="max-w-2xl mx-auto border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <Utensils className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Меню в разработке</h3>
              <p className="text-lg text-gray-600 mb-6">
                Мы работаем над созданием подробного меню с описанием всех наших блюд и актуальными ценами.
              </p>
              <p className="text-gray-600 mb-8">А пока вы можете узнать о наличии блюд и ценах по телефону:</p>
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                <Phone className="w-4 h-4 mr-2" />
                (4912) 24 38 01
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Фотогалерея</h2>
            <p className="text-xl text-gray-600">Посмотрите, как выглядит наша столовая</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Обеденный зал", "Кухня", "Витрина с блюдами", "Интерьер", "Рабочее место повара", "Общий вид"].map(
              (title, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(title)}`}
                    alt={title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Мы всегда рады вас видеть</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
                <p className="text-gray-600">
                  г. Рязань
                  <br />
                  проезд Яблочкова, д. 6
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                <p className="text-gray-600 font-medium text-lg">(4912) 24 38 01</p>
                <p className="text-sm text-gray-500">Городской телефон</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-gray-700 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Режим работы</h3>
                <p className="text-gray-600">
                  Пн-Пт: 8:00 - 18:00
                  <br />
                  Сб-Вс: 9:00 - 17:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Подробная карта проезда</h2>
            <p className="text-lg text-gray-600">г. Рязань, проезд Яблочкова, д. 6</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-[16/10]">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D0%9F%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%20%D1%8F%D0%B1%D0%BB%D0%BE%D1%87%D0%BA%D0%BE%D0%B2%D0%BE,%206+(%D0%A1%D1%82%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F%20%22%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F%22)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Подробная карта столовой"
              ></iframe>
            </div>
            <div className="p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Как добраться:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Автобусы: №1, №15, №22 до остановки "Проезд Яблочкова"</li>
                    <li>• Троллейбусы: №3, №7 до остановки "Проезд Яблочкова"</li>
                    <li>• Пешком от центра города: 15 минут</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Ориентиры:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Рядом с продуктовым магазином</li>
                    <li>• Напротив детской площадки</li>
                    <li>• В 5 минутах от остановки общественного транспорта</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Столовая "Молодёжная"</h3>
            <p className="text-gray-400 mb-6">Домашняя кухня в центре города</p>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300 text-lg">(4912) 24 38 01</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">© 2024 Столовая "Молодёжная". Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
