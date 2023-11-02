import Accordion from "../components/Accordion";

const page = () => {
  return (
    <div className='flex justify-center items-start p-5 min-h-screen w-full '>
      <div className='flex flex-col w-[50%] items-center pt-10'>
        <h1 className='mb-14 text-2xl font-bold'>Accordion element</h1>
        <Accordion />
      </div>
    </div>
  );
};

export default page;
