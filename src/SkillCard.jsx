const SkillCard = ({ skillName, percentage }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = 30 - circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center h-80 bg-[#010101] border border-[#737373] rounded-[10px] pt-10 pr-12.5 pb-15 pl-10">
      <div className="relative w-55 h-55 flex-shrink-0">
        <svg className="w-full h-full transform rotate-160">  
          <defs>
        <linearGradient id="gradient-main" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FA709A" />
          <stop offset="100%" stopColor="#FEE140" />
        </linearGradient>
      </defs>
          <circle
            strokeWidth="30"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="url(#gradient-main)"
            r={radius}
            cx="50%"
            cy="50%"
          />
        </svg>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-4xl">
          {percentage}%
        </span>
      </div>
      <div className="ml-5">
        <h4 className="text-4xl font-bold mb-5">{skillName}</h4>
        <p className="text-lg">
          UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.
        </p>
      </div>
    </div>
  );
};

export default SkillCard