import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="py-44 flex justify-center items-center gap-96 bg-gradient">
        <div className="text-white">
          <div>
            <p className="text-[22px] font-semibold mt-4">
              Email: <br />
              <span className="text-[16px] font-[300px]">nitex@gmail.com</span>
            </p>
            <p className="text-[22px] font-semibold mt-4">
              Phone Number: <br />
              <span className="text-[16px] font-[300px]">+880-1911223344</span>
            </p>
            <p className="text-[22px] font-semibold mt-4">
              Address: <br />
              <span className="text-[16px] font-[300px]">
                0077, Niketon, Dhaka
              </span>
            </p>
          </div>

          <div className="flex mt-6 -mx-2">
            <a
              href="#"
              className="mx-2 w-[30px] h-[30px] bg-[#4CCEF9] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="mx-2 w-[30px] h-[30px] bg-[#FF753B] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="#"
              className="mx-2 w-[30px] h-[30px] bg-[#0077b5] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="mx-2 w-[30px] h-[30px] bg-[#cd201f] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-[34px] font-semibold uppercase text-white">
            Contact Us
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-[750px] h-[60px] text-[20px] text-white focus:outline-none bg-transparent border-b placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-[750px] h-[60px] text-[20px] text-white focus:outline-none bg-transparent border-b placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-[750px] h-[60px] text-[20px] text-white focus:outline-none bg-transparent border-b placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[750px] h-[60px] text-[20px] text-white focus:outline-none bg-transparent border-b placeholder:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
