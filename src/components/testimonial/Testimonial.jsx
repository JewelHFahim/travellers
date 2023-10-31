import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className=" flex flex-col justify-center items-center py-20">
      <div className="text-center">
        <h2 className="text-[#42a8bb] text-[76px] font-DancingScript">
         Testimonials
        </h2>
   
      </div>

      <div className="w-[1400px] mt-12">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <div key={i} className="w-[350px] h-[400px] px-5">
              <div className=" w-full h-full py-4 px-8 bg-black bg-opacity-[20%] rounded-xl">
                <div className="flex justify-center items-center">
                  <img
                    src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
                    alt=""
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-center mt-5 text-white">
                  <h1 className="text-[20px] font-medium">
                    Jewel Hossain Fahim
                  </h1>
                  <p>Frontend Developer</p>
                  <p className="mt-6 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    facere esse tempore, magnam repudiandae aut natus
                    voluptatem, ipsa amet commodi nihil eligendi quae? Ex quam
                    impedit
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
