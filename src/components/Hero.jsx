import Card from "./Card";

const Hero = () => {
  return (
    <div className="flex justify-around items-center px-[25vh] mt-10">
      <section className="w-[50%]">
        <h3 className="text-xl text-gray-600 text-semibold tracking-wider">
          Authentication is the process of determining whether someone or
          something is who or what they say they are. Authentication technology
          provides access control for systems by checking to see if a user's
          credentials match the credentials in a database of authorized users or
          a data authentication server.
        </h3>
      </section>
      <section>
        <Card />
      </section>
    </div>
  );
};

export default Hero;
