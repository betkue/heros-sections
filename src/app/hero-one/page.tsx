/* eslint-disable @next/next/no-img-element */
import Header from "./header";
import Logo from "./logo";

export default function Home() {
  return (
    <div className="bg-white font-bricolage">
      <div className="bg-customGradient min-h-screen">
        <Header />

        <section className="text-center py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="bg-white inline-block px-4 py-2 text-purple font-bold rounded-full mb-4">
              Now Taking Clients For Q1! 🚀
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-purple leading-tight">
              Organize Your Business In One Dashboard{" "}
              <span className="text-transparent bg-clip-text bg-gradiantButtom">
                That Grows With You
              </span>
            </h1>
            <p className="text-customPurple text-lg mt-4">
              Our team helps high-growth companies save their time and energy by
              building a centralized dashboard to manage projects and repetitive
              tasks.
            </p>
            <div className="mt-8 space-x-4 flex justify-center flex-wrap">
              <button className="bg-gradiantButtom text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 mb-4 sm:mb-0">
                Book a Free Discovery Call
              </button>
              <button className="text-black hover:opacity-80 mb-4 sm:mb-0">
                See Success Stories
              </button>
            </div>
          </div>
        </section>

        <section className="py-7">
          <div className="flex flex-wrap justify-center items-center space-x-10">
            <Logo logo={"/assets-1/logo1.png"} />
            <Logo logo={"/assets-1/logo2.png"} />
            <Logo logo={"/assets-1/logo3.png"} />
            <Logo logo={"/assets-1/logo4.png"} />
            <Logo logo={"/assets-1/logo5.png"} />
            <Logo logo={"/assets-1/logo6.png"} />
            <Logo logo={"/assets-1/logo7.png"} />
            <Logo logo={"/assets-1/logo8.png"} />
            <Logo logo={"/assets-1/logo9.png"} />
            <Logo logo={"/assets-1/logo10.png"} />
            <Logo logo={"/assets-1/logo11.png"} />
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto">
            <img
              src="/assets-1/image.png"
              alt="Notion x Finance"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
}


