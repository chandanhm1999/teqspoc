import personImg from "../../../../public/assets/herohome/sectwo/aboutus.jpg";
import partsImg from "../../../../public/assets/herohome/sectwo/aboutusO.jpg";
import Image from "next/image";
const SectionTwo = () => {
  return (
    <section className="container mx-auto px-4 py-2 md:py-6 lg:py-6 xl:py-6  mt-6">
      <div className="py-2 md:py-6 lg:py-6 xl:py-6 flex justify-between gap-20 lg:flex-row flex-col ">
        <div className="flex-1 relative">
          <Image className="rounded-lg" src={personImg} alt="Person Image" />
          <Image
            className="lg:absolute lg:mt-0 mt-6 border-white border-8 rounded-tl-lg lg:w-96 -bottom-8 -right-8"
            src={partsImg}
            alt="Parts Image"
          />
        </div>
        {/* Text Section */}
        <div className="flex-1 text-left lg:text-left space-y-6">
          <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
            <h4 className="text-cyan-400 font-bold text-lg md:text-xl lg:text-xl xl:text-xl uppercase">
              About Us
            </h4>
            <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold leading-tight">
              We are qualified and experienced in providing expert guidance and
              endless support
            </h2>
            <p className="text-gray-700 text-xs md:text-sm lg:text-sm xl:text-lg">
              We understand that in today's world, it's important to have
              reliable resources. That's why we focus on delivering content that
              is not only accurate but also easy to understand and helpful.
            </p>
          </div>
          <p className="text-gray-600 text-xs md:text-sm lg:text-sm xl:text-lg">
            Our approach is designed to make learning enjoyable and effective,
            ensuring that you always stay ahead. With teQspoc, you're not just
            learning; you're growing with the best support available.
          </p>
          <button
            type="button"
            className="text-white mt-4 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-sm px-6 py-2 md:py-3 lg:py-3 xl:py-3 text-sm md:text-lg lg:text-lg xl:text-lg transition-all duration-200 ease-in-out"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
