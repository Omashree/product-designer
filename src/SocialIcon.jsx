const SocialIcon = ({ href="#", src, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={label} className="size-7.5 md:size-13" />
    </a>
  );
};

export default SocialIcon