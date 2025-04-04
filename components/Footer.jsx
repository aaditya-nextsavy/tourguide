import Link from "next/link";

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-content">
          <div className="header-logo">
            <div className="footer-title">
              <Link href="/">
                <h1>tour guide</h1>
              </Link>
            </div>
            <div className="footer-title">
              <p>Currency</p>
              <select
                className="footer-title-currency-dropdown  gap-[20px]"
                name="currency"
              >
                <option value={"usd"}>US Dollars</option>
                <option value={"inr"}>Indian Rupees</option>
                <option value={"aud"}>Australian Dollars</option>
                <option value={"cad"}>Canadian Dollars</option>
              </select>
            </div>
          </div>
          <div>
            <p>Company</p>
            <ul className="footer-links">
              <li>
                <Link href="about-us">About us</Link>
              </li>
              <li>
                <Link href="blogs">Blogs</Link>
              </li>
              <li>
                <Link href="press-room">press room </Link>
              </li>
              <li>
                <Link href="career">Career</Link>
              </li>
            </ul>

            <div></div>
          </div>

          <div>
            <p>Help</p>
            <ul className="footer-links">
              <li>
                <Link href="contact-us">Contact us</Link>
              </li>
              <li>
                <Link href="faqs">FAQs</Link>
              </li>
              <li>
                <Link href="terms-conditions">Terms and conditions</Link>
              </li>
              <li>
                <Link href="privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link href="stiemap">SiteMap</Link>
              </li>
            </ul>
          </div>
          <div>
          payments method possible
            
            <p className="flex text-[var(--color-text-light-gray)] text-[30px] m-[10px] gap-[10px]">
            
              <FaCcVisa />
<FaCcMastercard/>
<FaCcVisa />
<FaCcMastercard/>
<FaCcVisa />
              </p>
              <p className="flex text-[var(--color-text-light-gray)] text-[30px] m-[10px] gap-[10px]">
            
            <FaCcVisa />
<FaCcMastercard/>
<FaCcVisa />
<FaCcMastercard/>
<FaCcVisa />
            </p>


            
            </div>
        </div>

      <div className="footer-2">
      <div className="footer-2-left">
          Copyrights 2024 
     </div>
      <div className="footer-2-right-info">
          <p className="footer-2-right-info-icons">
          <Link href='www.x.com'><AiFillTwitterCircle />
          </Link>
          <Link href='www.meta'><FaFacebook/></Link>
          
          <Link href='www.pintrest.com'><FaPinterest/></Link>
          </p>
      </div>
      </div>


      </div>
    </footer>
  );
};

export default Footer;
