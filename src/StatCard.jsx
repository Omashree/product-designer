const StatCard = ({ value, description }) => {
  return (
    <div className="flex flex-col justify-between items-center text-[#C8FEC7]">
      <h3 className="text-[100px] font-bold">{value}</h3>
      <p className="text-3xl font-semibold">{description}</p>
    </div>
  );
};

export default StatCard