const StatCard = ({ value, description }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center lg:text-start text-[#C8FEC7]">
      <h3 className="text-5xl xs:text-[50px] md:text-[55.39px] lg:text-6xl xl:text-[100px] font-bold mb-2.75 md:mb-0">{value}</h3>
      <p className="text-base xs:text-lg md:text-[19px] lg:text-xl xl:text-3xl font-semibold">{description}</p>
    </div>
  );
};

export default StatCard