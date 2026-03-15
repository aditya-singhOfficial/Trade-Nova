import React from "react";
import Hero from "../../components/products/Hero";
import LeftImage from "../../components/products/LeftImage";
import kiteURL from "../../assets/images/kite.png";
const Products = () => {
  const data = [
    {
      imageURL: kiteURL,
      productName: "Kite",
      productDescription:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
      tryDemo: true,
      learnMore: true,
      coin: false,
      kiteConnect: false,
      layout: "left",
    },
    {
      imageURL: kiteURL,
      productName: "Console",
      productDescription:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      tryDemo: false,
      learnMore: true,
      kiteConnect: false,
      coin: false,
      layout: "right",
    },
    {
      imageURL: kiteURL,
      productName: "Coin",
      productDescription:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
      tryDemo: true,
      learnMore: true,
      coin: true,
      kiteConnect: false,
      layout: "left",
    },
    {
      imageURL: kiteURL,
      productName: "Kite Connect API",
      productDescription:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
      tryDemo: false,
      learnMore: false,
      coin: false,
      kiteConnect: true,
      layout: "right",
    },
    {
      imageURL: kiteURL,
      productName: "Varsity mobile",
      productDescription:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
      tryDemo: false,
      learnMore: false,
      coin: false,
      kiteConnect: false,
      layout: "left",
    },
  ];
  return (
    <div>
      <Hero />
      <LeftImage />
    </div>
  );
};

export default Products;
