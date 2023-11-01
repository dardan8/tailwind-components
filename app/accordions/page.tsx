import Accordion from "../components/Accordion";
import ContactForm from "../components/ContactForm";
const accordionData = [
  {
    question: "How can we help you",
    answer:
      "Sed nec mollis quam. Cras rhoncus efficitur justo. Fusce ac rutrum est, in convallis turpis. Phasellus a enim et felis semper sodar. Sed rutrum lacinia leo.",
  },
  {
    question: "Your personal credentials ",
    answer:
      "Sed nec mollis quam. Cras rhoncus efficitur justo. Fusce ac rutrum est, in convallis turpis. Phasellus a enim et felis semper sodales eu a est. rutrum lacinia leo.",
  },
  {
    question: "How to Login",
    answer:
      "Sed nec mollis quam. Cras rhoncus efficitur justo. Fusce ac rutrum est, in convallis turpis. Phasellus a enim et felis semper sodus gravida pulvinar. Sed rutrum lacinia leo.",
  },
  {
    question: "Losing your password",
    answer:
      "Sed nec mollis quam. Cras rhoncus efficitur justo. Fusce ac rutrum est, in convallis turpis. Phasellus a enim et felis semper sodales eu a es. Sed rutrum lacinia leo.",
  },
];

const page = () => {
  return (
    <div
      className='flex flex-col justify-center items-center
      p-5  min-h-screen w-full'
    >
      <h1 className='flex items-center justify-center mb-32'>
        Accordion tests!
      </h1>

      <div className='flex flex-col items-center justify-center w-[50%] max-h-[248px]'>
        {accordionData.map((acc, index) => (
          <Accordion question={acc.question} answer={acc.answer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
