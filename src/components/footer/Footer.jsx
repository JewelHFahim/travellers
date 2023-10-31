import logo from "../../assets/bg/Logo.png";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#001E23] px-5 md:px-[40px] lg:px-[120px] py-[40px] lg:py-[60px] text-white">
      <div className=" lg:p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="w-auto h-7" src={logo} alt="" />
              </a>

              <p className=" w-[460px] mt-6 text-justify">
                We help businesses run more efficiently and profitably by
                defining, designing, testing, and deploying software apps. We
                help businesses run more efficiently and profitably by defining,
                designing, testing, and deploying software apps. help businesses
                run more efficiently and profitably by defining, designing,
                testing, and deploying software apps.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-[25px] font-semibold uppercase dark:text-white">
                  Home
                </h3>
                <a href="#" className="block mt-2   hover:text-white">
                  Our Story
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  Our Tour
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  Our Gallery
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  Contact Us
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  Privacy & Policy
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[25px] font-semibold uppercase dark:text-white">
                  Contact Us
                </h3>
                <a href="#" className="block mt-2   hover:text-white">
                  007-Niketon, Dhaka
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  +880-1911223344
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  Coxs Bazar
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  +880-1711223344
                </a>
                <a href="#" className="block mt-2   hover:text-white">
                  travellers@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[25px] font-semibold uppercase dark:text-white">
                  Be Informed
                </h3>
                <p>Get email notifications about events in your area</p>

                <div className="flex items-center mt-5 border w-[270px] h-[50px]">
                  <input
                    type="text"
                    placeholder="email"
                    className="w-[75%] h-full bg-transparent focus:outline-none pl-2"
                  />
                  <BsSearch className="w-[25%] h-full text-[20px] p-3 text-black bg-white" />
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
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:pr-[95px]  mt-20 border-t border-white pt-5 border-opacity-[50%]">
          <p className="text-center ">
            © 2023 Travellers Creative. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
