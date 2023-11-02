import Image1 from "../../public/assets/sliders/SliderImage1.jpg";
import Image2 from "../../public/assets/sliders/SliderImage2.jpg";
import Image3 from "../../public/assets/sliders/SliderImage3.jpg";
import Slider from "../components/Slider";

const page = () => {
  const images = {
    slides: [
      { image: Image1, altText: "Image1" },
      {
        image: Image2,
        altText: "Image2",
      },
      {
        image: Image3,
        altText: "Image3",
      },
    ],
  };

  return (
    <div
      className={`bg-slate-100 min-h-screen flex items-center justify-center flex-wrap p-5 w-full`}
    >
      <Slider slides={images.slides} />
    </div>
  );
};

export default page;
