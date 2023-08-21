import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "AppJunkie420",
      image: "/assets/people-1.png",
      city: "New York",
      country: "United States",
      rating: "4.8",
      testimoni:
        "Yamler is an excellent app for tracking and managing personal finances. I have been using it for a few months now, and it has completely transformed the way I handle my money. The app's user-friendly interface makes it easy to input expenses and monitor budgets. It also provides detailed reports and visualizations, allowing me to analyze my spending habits and plan for the future. One of my favorite features is the ability to set financial goals and track my progress towards them. Overall, Yamler has helped me become more mindful of my finances and stay on top of my money goals. I highly recommend giving it a try!",
    },
    {
      name: "InvestingNinja",
      image: "/assets/people-2.png",
      city: "Paris",
      country: "France",
      rating: "4.4",
      testimoni:
        "InvestDash is a must-have app for anyone interested in tracking their investments and staying updated on the stock market. As an avid investor, I rely on this app to provide real-time market data, news, and portfolio analysis. The app's intuitive interface makes it easy to monitor my investments, set up watchlists, and receive personalized alerts. I also appreciate the app's comprehensive financial news section, which keeps me informed about market trends and helps me make informed investment decisions. InvestDash is a game-changer for any investor, and I cannot imagine managing my portfolio without it.",
    },
    {
      name: "CatLover23",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "KubeCat is a delightful app that brings the joy and cuteness of cats directly to your smartphone. As a cat lover, I couldn't resist downloading this app, and it has exceeded my expectations. KubeCat offers a large collection of high-quality cat photos, gifs, and videos that never fails to put a smile on my face. I also love the app's built-in cat soundboard, which allows me to play various cat sounds and entertain my own furry friends. The app's sleek design and easy navigation make it a pleasure to use. If you need a dose of cat cuteness in your life, KubeCat is the purr-fect app for you!",
    },
    // {
    //   name: "iezh Robert",
    //   image: "/assets/people-3.png",
    //   city: "Warsaw",
    //   country: "Poland",
    //   rating: "4.5",
    //   testimoni:
    //     "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    // },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
