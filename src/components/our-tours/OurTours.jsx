import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTours = () => {

  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
  };

  return (
    <div className=" flex flex-col justify-center items-center py-20">
      <div className="text-center">
        <h2 className="text-[#42a8bb] text-[76px] font-DancingScript">
          Our Tours
        </h2>
        <h2 className="text-[54px] text-white font-Montserrat font-[500] leading-[50px]">
          Explore with us
        </h2>
      </div>

      <div className="w-[1400px] mt-12">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <div key={i} className="w-[350px] h-[400px] px-5">
              <div className=" w-full h-full bg-black bg-opacity-[20%] rounded-[20px] overflow-hidden">

                

              <img
                    src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTours;
