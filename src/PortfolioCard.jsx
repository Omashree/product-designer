import Category from "./Category";

const PortfolioCard = ({ title, category, imageUrl }) => {
  const categories = category.split(', ');
  return (
    <article className="p-7 bg-[#0B0B0B] border border-[#737373] rounded-[10px] group">
      <img
          src={imageUrl}
          alt={`Preview of ${title}`}
          className="w-full h-50 mb-7 rounded-[10px] object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src="src/assets/product-image.jpg"; }}
      />
      <h4 className="text-2xl font-bold mb-7">{title}</h4>
      <div className="flex gap-1.25 mb-7">
        {categories.map((cat, index) => (
          <Category key={index} value={cat} />
        ))}
      </div>
      <button className="py-3 w-full text-base bg-[#292929]" >View Product Detail</button>
    </article>
  );
};

export default PortfolioCard