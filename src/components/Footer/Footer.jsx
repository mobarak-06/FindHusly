import { IoLocationSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full  bg-black">
      <div className="flex justify-between pt-16">
        <a>
          <p className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            FindHusly
          </p>
        </a>
        <div className="flex gap-5 text-white mb-10">
          <p>Follow Us:</p>
          <p>
            <FaFacebook size={20} />
          </p>
          <p>
            <FaInstagram size={20} />
          </p>
          <p>
            <FaTwitter size={20} />
          </p>
          <p>
            <FaPinterest size={20} />
          </p>
          <p>
            <FaYoutube size={20} />
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <footer className="footer text-base-content p-10">
            <aside>
              <p className="text-gray-400">
                Specializes in providing high-class tours for those <br /> in
                need. Contact Us
              </p>
              <p className="text-gray-300 flex gap-2">
                <IoLocationSharp size={20} /> 101 E 129th St, East Chicago, IN
                46312, US
              </p>
              <p className="text-gray-300 flex gap-2">
                <LuPhoneCall size={20} /> 1-333-345-6868
              </p>
              <p className="text-gray-300 flex gap-2">
                <MdOutlineMailOutline size={20} /> themesflat@gmail.com
              </p>
            </aside>
            <nav>
              <h6 className="footer-title text-white">Categories</h6>
              <a className="link link-hover text-gray-400">Pricing Plans</a>
              <a className="link link-hover text-gray-400">Our Services</a>
              <a className="link link-hover text-gray-400">About Us</a>
              <a className="link link-hover text-gray-400">Contact Us</a>
            </nav>
            <nav>
              <h6 className="footer-title text-white">Our Company</h6>
              <a className="link link-hover text-gray-400">Property For Sale</a>
              <a className="link link-hover text-gray-400">Property For Rent</a>
              <a className="link link-hover text-gray-400">Property For Buy</a>
              <a className="link link-hover text-gray-400">Our Agents</a>
            </nav>
            <nav>
              <h6 className="footer-title text-white">Newsletter</h6>
              <a className="link link-hover text-gray-400">Terms of use</a>
              <a className="link link-hover text-gray-400">Privacy policy</a>
              <a className="link link-hover text-gray-400">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </div>
      <hr />
      <div className="">
        <footer className="footer footer-center text-gray-400 p-4">
          <aside>
            <p>
              Copyright © ${new Date().getFullYear()} - All right reserved by
              FindHusly
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
