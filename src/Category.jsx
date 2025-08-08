const Category = ({ value }) => {
  return (
    <button
      className="px-2 py-1 text-sm text-[#784DC7] bg-[#E9DFFC] border border-[#BE9FF6] rounded-xl"
    >
      {value}
    </button>
  );
};

export default Category