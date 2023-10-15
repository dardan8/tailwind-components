import Image from "next/image";
import cardImage from "../../public/assets/images/cardImage.jpg";

const Card = () => {
  return (
    <div className='flex flex-col rounded-[22px] border-solid border-2 border-indigo-600 h-max'>
      <div className='flex w-full'>
        <Image
          className='rounded-t-[20px] object-cover w-full h-25'
          src={cardImage}
          width={150}
          height={50}
          alt='Card image'
        />
      </div>
      <div className='flex flex-col p-8 gap-3'>
        <h1 className='text-3xl'>Card Title</h1>
        <p>Paragraph Title</p>
      </div>
    </div>
  );
};

export default Card;
