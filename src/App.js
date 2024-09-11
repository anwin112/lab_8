import React from 'react';
import Card from './component/Card';

const cardData = [
  {
    title: "BYD Seal",
    features: ["Range: 550 km", "Top Speed: 180 km/h", "Battery: 82 kWh"],
    image: "https://ev-database.org/img/auto/BYD_SEAL/BYD_SEAL-01.jpg",
  },
  {
    title: "BYD Seal",
    features: ["Range: 650 km", "Top Speed: 190 km/h", "Battery: 82 kWh"],
    image: "https://cdn.motor1.com/images/mgl/pbb830/s3/byd-seal.jpg",
  },
  {
    title: "BYD Seal",
    features: ["Range: 650 km", "Top Speed: 200 km/h", "Battery: 82 kWh"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPW8MrjbJDj9z2gebekvugjmbhFBqHBeiGX2pqZshYqsonI367S1ro0289Jmg_nczkrGM&usqp=CAU",
  },
  {
    title: "BYD Seagull",
    features: ["Range: 405 km", "Top Speed: 150 km/h", "Battery: 30 kWh"],
    image: "https://www.byd.com/content/dam/byd-site/us/newlist/byd-presents-several-new-models-at-auto-shanghai-2023/BYD-Seagull.jpg",
  },
  {
    title: "BYD Atto 3",
    features: ["Range: 420 km", "Top Speed: 160 km/h", "Battery: 60 kWh"],
    image: "https://www.electrive.com/media/2022/08/byd-atto-3-2022-01-min.png.webp",
  },
  // Add more card data as needed
];

const App = () => {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          features={card.features}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default App;
