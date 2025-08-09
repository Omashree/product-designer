import Category from "./Category";

const PortfolioCard = ({ title, category, imageUrl }) => {
  const categories = category.split(', ');
  return (
    <article className="p-8 md:p-7 bg-[#0B0B0B] border border-[#737373] rounded-[10px] group">
      <img
          src={imageUrl}
          alt={`Preview of ${title}`}
          className="w-full h-53 md:h-47 lg:h-50 mb-6 md:mb-5 rounded-[10px] object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src="product-image.jpg"; }}
      />
      <h4 className="text-xl lg:text-2xl font-bold mb-6 md:mb-5">{title}</h4>
      <div className="flex gap-1.25 mb-6 md:mb-5">
        {categories.map((cat, index) => (
          <Category key={index} value={cat} />
        ))}
      </div>
      <button className="py-[12.8px] md:py-3 w-full text-base md:text-sm lg:text-base bg-[#292929]" >View Product Detail</button>
    </article>
  );
};

export default PortfolioCard