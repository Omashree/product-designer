import Category from "./Category";

const PortfolioCard = ({ title, category, imageUrl }) => {
  const categories = category.split(', ');
  return (
    <article className="p-5 xs:p-8 md:p-7 bg-[#0B0B0B] border border-[#737373] rounded-[10px]">
      <img
          src={imageUrl}
          alt={`Preview of ${title}`}
          className="w-full h-45 xs:h-53 md:h-47 lg:h-50 mb-6 md:mb-5 rounded-[10px] object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src="product-image.jpg"; }}
      />
      <h4 className="text-xl lg:text-2xl font-bold mb-6 md:mb-5">{title}</h4>
      <div className="flex flex-wrap gap-1.25 mb-6 md:mb-5">
        {categories.map((cat, index) => (
          <Category key={index} value={cat} />
        ))}
      </div>
      <button className="py-[12.8px] md:py-3 w-full text-base md:text-sm lg:text-base bg-[#292929] hover:bg-[#696969] hover:cursor-pointer transition duration-500 " >View Product Detail</button>
    </article>
  );
};

export default PortfolioCard