import React from 'react'
import Header from './Header'
import Offers from './Offers'
import Products from './Products'
import Footer from './Footer'
import "./App.css"

export default function App() {
  const products = [
  {
    name: 'Smartphone X100',
    price: 799,
    year: 2023,
    brand: "Samsung",
    image: "https://cdn1.ozone.ru/s3/multimedia-v/6400752679.jpg",
    desc: 'Experience the next level of mobile technology with the Smartphone X100. Sleek design, powerful processor, and an incredible camera.'
  },
  {
    name: 'Wireless Headphones Pro',
    price: 199,
    year: 2022,
    brand: "Sony",
    image: "https://audio-technica-shop.ru/image/cache/catalog/0708/naushniki-bluetooth-sony-mdr-zx220bt-bc-100000100973_5-1000x1000.jpg",
    desc: 'Immerse yourself in music with the Wireless Headphones Pro. Noise cancellation and superior sound quality for the best listening experience.'
  },{
    name: 'Gaming Laptop GX',
    price: 1299,
    year: 2024,
    brand: "Dell",
    image: "https://sm.pcmag.com/pcmag_uk/photo/default/dell-spider-man-03_dmfw.jpg",
    desc: 'Unleash your gaming potential with the Gaming Laptop GX. High-performance graphics and fast processing for the ultimate gaming experience.'
  },
  {
    name: 'Smartwatch S5',
    price: 249,
    year: 2023,
    brand: "Apple",
    image: "https://iphone24.ru/dbpics/19849.JPG",
    desc: 'Stay connected and track your fitness with the Smartwatch S5. Stylish design and advanced features to keep you on top of your game.'
  },
  {
    name: '4K Ultra HD TV',
    price: 899,
    year: 2023,
    brand: "LG",
    image: "https://видеомаркет.рф/images/detailed/20/cc3496aa-6448-4b0c-8ff0-b0dbcfd71c5a_imageid.jpg",
    desc: 'Enjoy your favorite shows and movies in stunning 4K resolution with the Ultra HD TV from LG. Crisp, clear picture with vibrant colors.'
  },
  {
    name: 'Bluetooth Speaker Mini',
    price: 49,
    year: 2021,
    brand: "JBL",
    image: "https://clearbusinessus.com/wp-content/uploads/2022/04/JBL-Mini-Speaker.jpg",
    desc: 'Take your music anywhere with the Bluetooth Speaker Mini. Compact size, big sound, and up to 12 hours of playtime on a single charge.'
  },
  {
    name: 'Digital Camera Z7',
    price: 599,
    year: 2022,
    brand: "Nikon",
    image: "https://avatars.mds.yandex.net/get-mpic/5359986/img_id9068570600068875043.jpeg/orig",
    desc: 'Capture stunning photos and videos with the Digital Camera Z7. 45.7 MP resolution and advanced autofocus for professional-quality images.'
  },
  {
    name: 'Electric Toothbrush Pro',
    price: 99,
    year: 2023,
    brand: "Oral-B",
    image: "image8.jpg",
    desc: 'Achieve a cleaner, healthier smile with the Electric Toothbrush Pro. Advanced cleaning technology and multiple modes for a personalized clean.'
  },
  {
    name: 'Coffee Maker Deluxe',
    price: 129,
    year: 2022,
    brand: "Breville",
    image: "image9.jpg",
    desc: 'Brew the perfect cup of coffee with the Coffee Maker Deluxe. Programmable settings and a sleek design for the modern kitchen.'
  },
  {
    name: 'Vacuum Cleaner Max',
    price: 299,
    year: 2024,
    brand: "Dyson",
    image: "image10.jpg",
    desc: 'Keep your home spotless with the Vacuum Cleaner Max. Powerful suction and advanced filtration for a deep, thorough clean.'
  },
  {
    name: 'Running Shoes Vortex',
    price: 120,
    year: 2023,
    brand: "Nike",
    image: "image11.jpg",
    desc: 'Run faster and further with the Running Shoes Vortex. Lightweight, comfortable, and designed for performance on any terrain.'
  },
  {
    name: 'Leather Wallet Classic',
    price: 60,
    year: 2023,
    brand: "Tommy Hilfiger",
    image: "image12.jpg",
    desc: 'Keep your essentials organized in style with the Leather Wallet Classic. Premium leather and a timeless design for the modern man.'
  },
  {
    name: 'Wireless Mouse MX',
    price: 79,
    year: 2024,
    brand: "Logitech",
    image: "image13.jpg",
    desc: 'Enhance your productivity with the Wireless Mouse MX. Ergonomic design, precise tracking, and customizable buttons for maximum efficiency.'
  },
  {
    name: 'Fitness Tracker Band',
    price: 99,
    year: 2023,
    brand: "Fitbit",
    image: "image14.jpg",
    desc: 'Monitor your health and fitness with the Fitness Tracker Band. Track steps, heart rate, sleep, and more with this sleek, easy-to-use device.'
  },
  {
    name: 'Smart Home Hub',
    price: 149,
    year: 2023,
    brand: "Google",
    image: "image15.jpg",
    desc: 'Control all your smart devices with the Smart Home Hub. Easy setup, voice control, and compatibility with a wide range of smart products.'
  },
  {
    name: 'E-reader Paperwhite',
    price: 139,
    year: 2023,
    brand: "Amazon",
    image: "image16.jpg",
    desc: 'Read your favorite books anytime, anywhere with the E-reader Paperwhite. High-resolution display, adjustable lighting, and weeks of battery life.'
  },
  {
    name: 'Portable Power Bank',
    price: 39,
    year: 2023,
    brand: "Anker",
    image: "image17.jpg",
    desc: 'Keep your devices charged on the go with the Portable Power Bank. Compact, lightweight, and capable of charging multiple devices simultaneously.'
  },
  {
    name: 'Noise-Cancelling Earbuds',
    price: 179,
    year: 2023,
    brand: "Bose",
    image: "image18.jpg",
    desc: 'Enjoy your music without distractions with the Noise-Cancelling Earbuds. Crystal clear sound, comfortable fit, and long battery life.'
  },
  {
    name: 'Smart Thermostat',
    price: 249,
    year: 2024,
    brand: "Nest",
    image: "image19.jpg",
    desc: 'Take control of your home’s temperature with the Smart Thermostat. Energy-saving features and remote control from your smartphone.'
  },
  {
    name: 'Electric Scooter RideX',
    price: 499,
    year: 2023,
    brand: "Xiaomi",
    image: "image20.jpg",
    desc: 'Commute in style with the Electric Scooter RideX. Lightweight, foldable design, and a long-lasting battery for up to 18 miles of range.'
  }];
  const offers = ["https://iphone24.ru/dbpics/19849.JPG","https://cdn1.ozone.ru/s3/multimedia-v/6400752679.jpg","https://audio-technica-shop.ru/image/cache/catalog/0708/naushniki-bluetooth-sony-mdr-zx220bt-bc-100000100973_5-1000x1000.jpg","https://sm.pcmag.com/pcmag_uk/photo/default/dell-spider-man-03_dmfw.jpg","https://iphone24.ru/dbpics/19849.JPG","https://видеомаркет.рф/images/detailed/20/cc3496aa-6448-4b0c-8ff0-b0dbcfd71c5a_imageid.jpg","https://clearbusinessus.com/wp-content/uploads/2022/04/JBL-Mini-Speaker.jpg","https://avatars.mds.yandex.net/get-mpic/5359986/img_id9068570600068875043.jpeg/orig","https://iphone24.ru/dbpics/19849.JPG","https://sm.pcmag.com/pcmag_uk/photo/default/dell-spider-man-03_dmfw.jpg",]
  const sponsors = ["LG", "Apple", "Samsung", "Vivo", 'Зэт Зэт Зэт Щовель ыыыыы плаки плкаи']
  return (
    <div id='root'>
      <Header/>
      <main className='root-main'>
        <Offers offers={offers} />
        <Products products={products} />
      </main>
      <Footer sponsors={sponsors} />
    </div>
  )
}
