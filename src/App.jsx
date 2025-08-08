import SocialIcon from './SocialIcon';
import StatCard from './StatCard';
import PortfolioCard from './PortfolioCard';
import SkillCard from './SkillCard';
import './App.css'

function App() {
  return (
    <>
      <div className="bg-black text-white font-regular">

      <header className="pt-12.5 pb-7.5 px-25 md:px-8 lg:px-16">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-1.25 items-center">
            <img src="src/assets/logo.png" alt="logo" className="h-[26.67px] w-[26.62px]" />
            <a href="#" className="text-xl font-bold">Web</a>
          </div>
          <div className="flex space-x-7.5 font-normal text-lg">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
            <a href="#">About Me</a>
          </div>
          <div>
            <button className="py-3 px-6 font-normal text-base rounded-sm bg-[#925FF0]">Contact Me</button>
          </div>
        </nav>
      </header>

      <main className="px-24.5 md:px-8 lg:px-16 pt-12.5">

        <section className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="w-239 h-167 flex flex-col justify-between">
            <div>
              <h1 className="text-[176px] h-84.5 font-extrabold leading-[90%] mb-4.5">
                PRODUCT <br /> DESIGNER
              </h1>
              <h2 className="text-[100px] font-bold leading-[90%] bg-gradient-to-r from-[#FA709A] to-[#FEE140] bg-clip-text text-transparent">
                CRISTIAN MUNOZ
              </h2>
            </div>
            <div className="flex w-[525px] justify-between justify-self-center self-center mt-4">
              <SocialIcon src="src/assets/Instagram.svg" label="Facebook" />
              <SocialIcon src="src/assets/Figma.svg" label="Figma" />
              <SocialIcon src="src/assets/LinkedIn.svg" label="LinkedIn" />
              <SocialIcon src="src/assets/Twitter.svg" label="Twitter" />
              <SocialIcon src="src/assets/Telegram.svg" label="Telegram" />
              <SocialIcon src="src/assets/Medium.svg" label="Medium" />
            </div>
            <div className="flex justify-center space-x-2 items-center h-13 w-218.75 bg-[#292929]">
              <span>Download Curriculum Vitae</span><img src="src/assets/arrow-down.svg" alt="arrow-down" />
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end pt-6">
            <img
              src="src/assets/graphic-design.jpg"
              alt="Graphic Design"
              className="rounded-[10px] w-[561px] h-[646px] object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="src/assets/graphic-design.jpg"; }}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-25.75 py-20.5 px-25 h-88 flex justify-between gap-10 bg-[#0B0B0B] border border-[#646464] rounded-[29px]">
          <StatCard value="90%" description="Job Success Score on Upwork" />
          <img src="src/assets/Dawn.svg" alt="Dawn" className="size-20 self-center" />
          <StatCard value=">25.000" description="Duplicates on Figma Community" />
          <img src="src/assets/Dawn.svg" alt="Dawn" className="size-20 self-center" />
          <StatCard value=">2K" description="In Finished Works" />
        </section>

        {/* Portfolio Section */}
        <section className="mt-25.75">
          <h2 className="text-[52px] font-bold mb-6">PORTFOLIO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
            <PortfolioCard title="Chaintech Product" category="UX Design, Angular, JavaScript" imageUrl="src/assets/product-image.jpg" />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-25.75">
          <h2 className="text-[52px] font-bold mb-8">SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard skillName="UX Design" percentage={97} />
            <SkillCard skillName="UI Design" percentage={97} />
            <SkillCard skillName="UX Design" percentage={97} />
            <SkillCard skillName="UX Design" percentage={97} />
          </div>
        </section>
      </main>

      {/* Testimonial Section */}
      <section className="mt-25.75 bg-[url(src/assets/background-image.png)] px-79.25 py-23.75 text-center relative">
        <blockquote>
          <h3 className="text-5xl font-semibold mb-10" >Kaleb Lechtenberg</h3>
          <p className="text-[38px] font-medium mb-10">
            &ldquo;Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also.&rdquo;
          </p>
          <img src="src/assets/Shield.svg" alt="Shield" className='m-auto' />
        </blockquote>
      </section>

      {/* Thanks Section */}
      <section className="mx-24.5 mt-60 bg-[#A87FF3] rounded-[15px] flex flex ">
        <img src="src/assets/Frame-1.png" alt="Frame 1" className="absolute transform translate-y-12" />
        <img src="src/assets/graphic-design.jpg" alt="Graphic Design" className="h-67.75 w-58 rounded-[10px] absolute transform translate-10 -translate-y-35" />
        <h5 className="pl-74.5 py-17 text-lg">
          Thanks for visit my website <br />If you have any questions you can write me to any of my social networks, I am sure I will answer you.
        </h5>
        <img src="src/assets/Frame-2.png" alt="Frame 2" className="absolute transform translate-x-294" />
      </section>

      <footer className="pb-5 px-4 md:px-8 lg:px-24.5 mt-20 border-b-1 border-[#E6E6E6]">
        <nav className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-1.25 items-center md:mb-0">
            <img src="src/assets/logo.png" alt="logo" className="size-15 mr-3" />
            <a href="#" className="text-[45px] font-bold">Web</a>
          </div>
          <div className="flex space-x-7.5 text-lg">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
            <a href="#">About Me</a>
          </div>
        </nav>
      </footer>
      <div className="p-6"></div>
    </div>
    </>
  )
}

export default App
