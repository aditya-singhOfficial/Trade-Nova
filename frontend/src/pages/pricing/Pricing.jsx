import React from "react";
import Hero from "../../components/pricing/Hero";
import Brokerage from "../../components/pricing/Brokerage";
import OpenAccount from '../../components/OpenAccount'
const Pricing = () => {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
};

export default Pricing;
