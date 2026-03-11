import React from "react";
import Logo from "../assets/images/logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import AppStoreBadge from "../assets/images/appstoreBadge.svg";
import GooglePlayBadge from "../assets/images/googlePlayBadge.svg";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#FBFBFB] mt-32  py-10">
      <div className="w-[75%] flex justify-between">
        <div className="w-[20%] flex flex-col gap-6">
          <img src={Logo} alt="" className="w-[80%]" />
          <p className="text-[12px] text-[#808080] w-[80%]">
            © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 w-[80%]">
            <FaXTwitter size={20} color="#808080" />
            <FaFacebookSquare size={20} color="#808080" />
            <FaInstagram size={20} color="#808080" />
            <FaLinkedinIn size={20} color="#808080" />
          </div>
          <div className="flex gap-6 w-[85%]">
            <img src={GooglePlayBadge} alt="" className="w-[45%]" />
            <img src={AppStoreBadge} alt="" className="w-[45%]" />
          </div>
        </div>
        <div className="w-[18%] flex flex-col gap-4">
          <h1 className="text-xl">Account</h1>
          <h2 className="text-[#808080] text-[14px]">Open demat account</h2>
          <h2 className="text-[#808080] text-[14px]">Minor demat account</h2>
          <h2 className="text-[#808080] text-[14px]">NRI demat account</h2>
          <h2 className="text-[#808080] text-[14px]">HUF demat account</h2>
          <h2 className="text-[#808080] text-[14px]">Commodity</h2>
          <h2 className="text-[#808080] text-[14px]">Dematerialisation</h2>
          <h2 className="text-[#808080] text-[14px]">Fund transfer</h2>
          <h2 className="text-[#808080] text-[14px]">MTF</h2>
        </div>
        <div className="w-[18%] flex flex-col gap-4">
          <h1 className="text-xl">Support</h1>
          <h2 className="text-[#808080] text-[14px]">Contact us</h2>
          <h2 className="text-[#808080] text-[14px]">Support portal</h2>
          <h2 className="text-[#808080] text-[14px]">
            How to file a complaint?
          </h2>
          <h2 className="text-[#808080] text-[14px]">
            Status of your complaints
          </h2>
          <h2 className="text-[#808080] text-[14px]">Bulletin</h2>
          <h2 className="text-[#808080] text-[14px]">Circular</h2>
          <h2 className="text-[#808080] text-[14px]">Z-Connect blog</h2>
          <h2 className="text-[#808080] text-[14px]">Downloads</h2>
        </div>
        <div className="w-[18%] flex flex-col gap-4">
          <h1 className="text-xl">Company</h1>
          <h2 className="text-[#808080] text-[14px]">About</h2>
          <h2 className="text-[#808080] text-[14px]">Philosophy</h2>
          <h2 className="text-[#808080] text-[14px]">Press & media</h2>
          <h2 className="text-[#808080] text-[14px]">Careers</h2>
          <h2 className="text-[#808080] text-[14px]">Zerodha Cares (CSR)</h2>
          <h2 className="text-[#808080] text-[14px]">Zerodha.tech</h2>
          <h2 className="text-[#808080] text-[14px]">Open source</h2>
          <h2 className="text-[#808080] text-[14px]">Referral program</h2>
        </div>
        <div className="w-[18%] flex flex-col gap-4">
          <h1 className="text-xl">Quick links</h1>
          <h2 className="text-[#808080] text-[14px]">Upcoming IPOs</h2>
          <h2 className="text-[#808080] text-[14px]">Brokerage charges</h2>
          <h2 className="text-[#808080] text-[14px]">Market holidays</h2>
          <h2 className="text-[#808080] text-[14px]">Economic calendar</h2>
          <h2 className="text-[#808080] text-[14px]">Calculators</h2>
          <h2 className="text-[#808080] text-[14px]">Markets</h2>
          <h2 className="text-[#808080] text-[14px]">Sectors</h2>
          <h2 className="text-[#808080] text-[14px]">Gift Nifty</h2>
        </div>
      </div>
      <div className="w-[75%] mt-12 flex flex-col gap-4">
        <p className="text-[#9B9B9B] text-[12px]">
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
          Registration no.: INZ000031633 CDSL/NSDL: Depository services through
          Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints pertaining to securities
          broking please write to{" "}
          <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
            complaints@zerodha.com
          </span>
          , for DP related to{" "}
          <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
            dp@zerodha.com
          </span>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          Procedure to file a complaint on{" "}
          <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
            SEBI SCORES
          </span>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
            Smart Online Dispute Resolution
          </span>{" "}
          |{" "}
          <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
            Grievances Redressal Mechanism
          </span>
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          India's largest broker based on networth as per NSE.{" "}
          <span className="text-[#387ED1] hover:text-black cursor-pointer transition-all ease-in-out duration-200">
            NSE broker factsheet
          </span>
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>

        <p className="text-[#9B9B9B] text-[12px]">
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>
      </div>
      <div className="w-[55%] flex mt-12 justify-between">
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">NSE</button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">BSE</button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">MCX</button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">
          Terms & conditions
        </button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">
          Policies & procedures
        </button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">Privacy policy</button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">Disclosure</button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">
          For investor's attention
        </button>{" "}
        <button className="text-[#9B9B9B] text-[12px] hover:text-[#387ED1] transition-all ease-in-out duration-200">Investor charter</button>
      </div>
    </div>
  );
};

export default Footer;
