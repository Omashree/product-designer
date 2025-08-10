import SocialIcon from './SocialIcon';
import StatCard from './StatCard';
import PortfolioCard from './PortfolioCard';
import SkillCard from './SkillCard';
import './App.css'

function App() {
  return (
    <>
      <div className="bg-black text-white font-regular">

      <header className="pt-4.25 xs:pt-7.5 md:pt-12.5 pb-7.5 px-4 xs:px-5.5 md:px-8 lg:px-16">
        <nav className="flex justify-between items-center">
          <div className="flex space-x-1.25 items-center">
            <img src="logo.png" alt="logo" className="h-[26.67px] w-[26.62px]" />
            <a href="#" className="text-xl font-bold">Web</a>
          </div >
          <div className="flex space-x-7.5 font-normal md:text-base lg:text-lg hidden md:block">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
            <a href="#">About Me</a>
          </div>
          <div className="hidden md:block">
            <button className="py-3 px-6 font-normal text-base rounded-sm bg-[#925FF0] hover:bg-[#b38ff5] hover:cursor-pointer transition duration-700 ">Contact Me</button>
          </div>
          <div className="block md:hidden">
            <img src="menu.png" alt="Menu" />
          </div>
        </nav>
      </header>

      <main className="px-4 xs:px-7 md:px-8 lg:px-16 xs:pt-4.25 md:pt-8 lg:pt-12.5">

        <section className="flex flex-col xl:gap-10 xl:flex-row justify-between">
          <div className="xl:w-239 h-76 xs:h-96 md:h-140 lg:h-167 flex flex-col justify-between">
            <div className="text-center">
              <h1 className="text-[56px] xs:text-[78.79px] md:text-[136px] lg:text-[176px] h-25 xs:h-35.5 md:h-61 lg:h-84.5 font-extrabold leading-[90%] mb-6 md:mb-10 lg:mb-4.5">
                PRODUCT <br /> DESIGNER
              </h1>
              <h2 className="text-3xl xs:text-[42px] md:text-[79px] lg:text-[100px] font-bold leading-[90%] bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent">
                CRISTIAN MUNOZ
              </h2>
            </div>
            <div className="flex w-[260px] xs:w-[304.16px] md:w-[525px] justify-between justify-self-center self-center md:mt-4">
              <SocialIcon src="Instagram.svg" label="Facebook" />
              <SocialIcon src="Figma.svg" label="Figma" />
              <SocialIcon src="LinkedIn.svg" label="LinkedIn" />
              <SocialIcon src="Twitter.svg" label="Twitter" />
              <SocialIcon src="Telegram.svg" label="Telegram" />
              <SocialIcon src="Medium.svg" label="Medium" />
            </div>
            <div className="flex justify-center text-sm md:text-lg space-x-2 items-center h-9.5 md:h-15.25 lg:h-13 w-full xl:w-218.75 bg-[#292929] hover:bg-[#696969] hover:cursor-pointer transition duration-700">
              <span>Download Curriculum Vitae</span><img src="arrow-down.svg" alt="arrow-down" className="size-3 md:size-5" />
            </div>
          </div>
          <div className="flex justify-center hidden xl:block pt-6">
            <img
              src="graphic-design.jpg"
              alt="Graphic Design"
              className="rounded-[10px] w-[561px] h-[646px] object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="graphic-design.jpg"; }}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-10 md:mt-22 lg:mt-25.75 px-8 xs:px-12.5 md:px-[43.27px] lg:px-12 py-16 xs:py-20.5 md:py-[70.97px] lg:py-10 xl:py-20.5 xl:px-25 h-130 xs:h-150 md:h-62 lg:h-50 xl:h-88 flex flex-col md:flex-row justify-between gap-10 bg-[#0B0B0B] border border-[#646464] rounded-[29px] md:rounded-[25.1px] lg:rounded-[29px]">
          <StatCard value="90%" description="Job Success Score on Upwork" />
          <img src="Dawn.svg" alt="Dawn" className="lg:size-15 xl:size-20 self-center lg:block hidden" />
          <StatCard value=">25.000" description="Duplicates on Figma Community" />
          <img src="Dawn.svg" alt="Dawn" className="lg:size-15 xl:size-20 self-center lg:block hidden" />
          <StatCard value=">2K" description="In Finished Works" />
        </section>

        {/* Portfolio Section */}
        <section className="mt-10 md:mt-22 lg:mt-25.75">
          <h2 className="text-[26px] md:text-4xl lg:text-[52px] font-bold mb-6">PORTFOLIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="product-image.jpg" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-10 md:mt-22 lg:mt-25.75">
          <h2 className="text-[26px] md:text-4xl lg:text-[52px] font-bold mb-8">SKILLS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-4 lg:gap-5">
            <SkillCard skillName="UX Design" percentage={97} />
            <SkillCard skillName="UI Design" percentage={97} />
            <SkillCard skillName="UX Design" percentage={97} />
            <SkillCard skillName="UX Design" percentage={97} />
          </div>
        </section>
      </main>

      {/* Testimonial Section */}
      <section className="mt-10 md:mt-17 lg:mt-25.75 bg-[url(/background-image.png)] px-10 xs:px-20 lg:px-30 xl:px-79.25 py-10 xs:py-15 md:py-10 lg:py-23.75 text-center">
        <blockquote>
          <h3 className="text-[26px] md:text-4xl lg:text-5xl font-semibold mb-10" >Kaleb Lechtenberg</h3>
          <p className="text-base lg:text-[38px] md:font-normal lg:font-medium mb-10">
            &ldquo;Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also.&rdquo;
          </p>
          <img src="Shield.svg" alt="Shield" className='w-10 md:w-18 m-auto' />
        </blockquote>
      </section>

      {/* Thanks Section */}
      <section className="mx-4 xs:mx-7 md:mx-8 lg:mx-24.5 mt-20 md:mt-30 lg:mt-60 bg-[#A87FF3] rounded-[15px] flex">
        <img src="Frame-1.png" alt="Frame 1" className="h-[57.75px] md:h-[107.36px] lg:h-[125px] self-end" />
        <img src="graphic-design.jpg" alt="Graphic Design" className="object-cover h-[103.03px] md:h-48 lg:h-67.75 w-22 md:w-41 lg:w-58 rounded-[10px] absolute transform translate-x-5 -translate-y-10 md:translate-x-9 lg:translate-x-10 md:-translate-y-17 lg:-translate-y-35" />
        <h5 className="pl-15 md:pl-25 lg:pl-40 py-4.25 md:py-14 lg:py-17 -mr-7 text-sm md:text-base lg:text-lg">
          Thanks for visit my website <br />If you have any questions you can write me to any of my social networks, I am sure I will answer you.
        </h5>
        <img src="Frame-2.png" alt="Frame 2" className="h-[45.74px] md:h-[85.03px] lg:h-[125px]" />
      </section>

      <footer className="pb-7.5 md:pb-5 px-5.5 md:px-4 md:px-8 lg:px-24.5 mt-10 md:mt-13 lg:mt-20 border-b-1 border-[#E6E6E6]">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-1.25 items-center mb-5 md:mb-0">
            <img src="logo.png" alt="logo" className="size-10 xs:size-11.25 md:size-12 lg:size-15 mr-3" />
            <a href="#" className="text-3xl xs:text-[33.75px] md:text-4xl lg:text-[45px] font-bold">Web</a>
          </div>
          <div className="flex space-x-4 xs:space-x-7.5 text-sm xs:text-base lg:text-lg">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
            <a href="#">About Me</a>
          </div>
        </nav>
      </footer>
      <div className="p-5 md:p-10 lg:p-6"></div>
    </div>
    </>
  )
}

export default App
