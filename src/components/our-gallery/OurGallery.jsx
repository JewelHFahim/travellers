import "./OurGallery.css";

const OurGallery = () => {
  return (
    <div className="py-18 text-center">
      <h2 className="text-[#42a8bb]  text-[76px] font-DancingScript">
        Our Gallery
      </h2>
   

      <section className="flex justify-center items-center gap-10 mt-20">
        <div className="text-center text-primary shadow-lg rounded-[4px] overflow-hidden relative service w-[550px] h-[600px]">
          <h1 className="textPart text-[35px] font-semibold text-white">
            Turkey
          </h1>
          <h1 className="absolute left-[30%] top-[70%] text-[35px] font-semibold text-white">
            Turkey
          </h1>

          <img
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
            alt=""
            className="object-cover w-full h-full service-img"
          />

          <img
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-center text-primary shadow-lg rounded-[4px] overflow-hidden relative service w-[520px] h-[278px]">
            <h1 className="textPart text-[35px] font-semibold text-white">
              Turkey
            </h1>
            <h1 className="absolute left-[30%] top-[70%] text-[35px] font-semibold text-white">
              Turkey
            </h1>

            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
              alt=""
              className="object-cover w-full h-full service-img"
            />

            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center text-primary shadow-lg rounded-[4px] overflow-hidden relative service w-[520px] h-[278px]">
            <h1 className="textPart text-[35px] font-semibold text-white">
              Turkey
            </h1>
            <h1 className="absolute left-[30%] top-[70%] text-[35px] font-semibold text-white">
              Turkey
            </h1>

            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
              alt=""
              className="object-cover w-full h-full service-img"
            />

            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Places-To-Visit-In-Turkey-_7th-jun.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mt-16">
        <button className="text-[20px] font-semibold text-white border rounded-[50px] px-8 py-3 bg-black bg-opacity-[20%] hover:text-[#42a8bb] hover:border-[#42a8bb] transform duration-200 hover:scale-[1.01]">
          LOADMORE
        </button>
      </div>
    </div>
  );
};

export default OurGallery;
