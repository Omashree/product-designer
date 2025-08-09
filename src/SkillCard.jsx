const SkillCard = ({ skillName, percentage }) => {
  const radius = 78;
  const width = 2.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = 30 - circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col md:flex-row items-center h-95 md:h-66 lg:h-110 xl:h-80 bg-[#010101] border border-[#737373] rounded-[10px] pt-5 md:pt-8 lg:pt-10 pr-12.5 md:pr-10 lg:pr-12.5 pb-7.5 md:pb-12 lg:pb-15 pl-10 md:pl-8 lg:pl-10">
      <div className="relative w-[40vw] h-[25vh] md:w-[90vw] md:h-[26vh] lg:w-[200vw] lg:h-[200vh] xl:w-[55vw] xl:h-[55vh]">
        <svg className="w-full h-full transform rotate-160">  
          <defs>
        <linearGradient id="gradient-main" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FA709A" />
          <stop offset="100%" stopColor="#FEE140" />
        </linearGradient>
      </defs>
          <circle
            strokeWidth={`${width}vw`}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="url(#gradient-main)"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl md:text-3xl lg:text-4xl">
          {percentage}%
        </span>
      </div>
      <div className="mt-5 ml-0 md:ml-5 md:mt-0 text-center md:text-start">
        <h4 className="text-[22px] md:text-xl lg:text-4xl font-bold mb-5">{skillName}</h4>
        <p className="text-base lg:text-lg">
          UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.
        </p>
      </div>
    </div>
  );
};

export default SkillCard