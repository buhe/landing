import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Apps
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose your favorite app and explore it with pleasure.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Yamler.png"
                    width={100}
                    height={100}
                    alt="Yamler"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Yamler
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    You can select a file or create a file.
                  </li>
                  <li className="relative check custom-list my-2">
                    You can preview the whole file.
                  </li>
                  <li className="relative check custom-list my-2">
                    You can add new keys, in an array or another dictionary.
                  </li>
                  <li className="relative check custom-list my-2">
                    You can use dictionaries and arrays as containers.
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12"> */}
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    Free
                  </p> */}
                  {/* <ButtonOutline>Select</ButtonOutline>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/CC.png"
                  width={100}
                  height={100}
                  alt="Convict Conditioning Pro"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Convict Conditioning{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Recommend the next action with AI technology
                </li>
                <li className="relative check custom-list my-2">
                    From Fitness coach Hare highly recommended Style tough, we need is to have the power of App!
                </li>
                <li className="relative check custom-list my-2">
                    From Fitness coach James highly recommended When we talk about health , we actually talking about will.
                </li>
                <li className="relative check custom-list my-2">
                    From Fitness coach teacher che highly recommended
                </li>
              </ul>
              {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12"> */}
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                  $9 <span className="text-black-500">/ mo</span>
                </p> */}
                {/* <ButtonOutline>Select</ButtonOutline>
              </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/KubeCat.png"
                  width={100}
                  height={100}
                  alt="KubeCat"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                KubeCat{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                    Inspect logs of any containers in realtime!
                </li>
                <li className="relative check custom-list my-2">
                    View / Update almost any resources via YAML.
                </li>
                <li className="relative check custom-list my-2">
                    Support managing multiple clusters.
                </li>
                <li className="relative check custom-list my-2">
                    Supported authentication providers, Kube Config, AWS IAM Authenticator (EKS), Aliyun etc.
                </li>
              </ul>
              {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $12 <span className="text-black-500">/ mo</span>
                </p>

                <ButtonOutline>Select</ButtonOutline>
              </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/InvestDash.png"
                    width={100}
                    height={100}
                    alt="InvestDash"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Invest Dash
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    All assets at a glance.
                  </li>
                  <li className="relative check custom-list my-2">
                    Analyze your assets using the classic algorithm of 100 minus age.
                  </li>
                  <li className="relative check custom-list my-2">
                    Trends in Individual Assets.
                  </li>
                  <li className="relative check custom-list my-2">
                    Automatically calculate exchange rates for assets, Units of individual assets can be different from the total.
                  </li>
                  <li className="relative check custom-list my-2">
                    Trends in the amount of assets and the amount of each type of asset.
                  </li>
                  <li className="relative check custom-list my-2">
                    Export asset details as a file, protecting your data with biometrics.
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12"> */}
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    Free
                  </p> */}
                {/* <ButtonOutline>Select</ButtonOutline>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/PrivateLibrary.png"
                    width={100}
                    height={100}
                    alt="PrivateLibrary"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Private Library{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    You can browse the eBook in Calibre.
                  </li>
                  <li className="relative check custom-list my-2">
                    Monitor the health status of Calibre content services in real time.
                  </li>
                  <li className="relative check custom-list my-2">
                    You can sort e-books based on different criteria.
                  </li>
                  <li className="relative check custom-list my-2">
                    View the details of the eBook.
                  </li>
                  <li className="relative check custom-list my-2">
                    Different libraries can be switched, just like a real bookshelf.
                  </li>
                  <li className="relative check custom-list my-2">
                    You can switch between different content servers.
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12"> */}
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                  $9 <span className="text-black-500">/ mo</span>
                </p> */}
                {/* <ButtonOutline>Select</ButtonOutline>
              </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/AISummary.png"
                    width={100}
                    height={100}
                    alt="AISummary"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  AI Summary{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect Anyware{" "}
                  </li>
                  <li className="relative check custom-list my-2">
                    Get New Features{" "}
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $12 <span className="text-black-500">/ mo</span>
                </p>

                <ButtonOutline>Select</ButtonOutline>
              </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Pagily.png"
                    width={100}
                    height={100}
                    alt="Pagily"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Pagily
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12"> */}
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    Free
                  </p> */}
                {/* <ButtonOutline>Select</ButtonOutline>
                </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/BilibiliSummary.png"
                    width={100}
                    height={100}
                    alt="BilibiliSummary"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  B 站 AI 总结{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect Anyware{" "}
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12"> */}
                {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                  $9 <span className="text-black-500">/ mo</span>
                </p> */}
                {/* <ButtonOutline>Select</ButtonOutline>
              </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Writer.png"
                    width={100}
                    height={100}
                    alt="Writer"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  帮你写作文{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect Anyware{" "}
                  </li>
                  <li className="relative check custom-list my-2">
                    Get New Features{" "}
                  </li>
                </ul>
                {/* <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $12 <span className="text-black-500">/ mo</span>
                </p>

                <ButtonOutline>Select</ButtonOutline>
              </div> */}
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        {/* <div className="flex flex-col w-full my-16"> */}
          {/* <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Huge Global Network of Fast VPN{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper> */}
          {/* <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper> */}
          {/* <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper> */}
        {/* </div> */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
