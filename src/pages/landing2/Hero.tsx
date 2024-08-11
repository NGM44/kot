import GradientWrapper from "./GradientWrapper";
import LayoutEffect from "./LayoutEffect";

const Hero = () => (
  <section id="home">
    <div className="custom-screen py-28">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div>
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
              style={{
                backgroundImage:
                  "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)",
              }}
            >
              Managing your indoor environment made easy
            </h1>
            <p className="max-w-xl mx-auto text-gray-300">
              Go beyond air quality monitoring with Sensor Magics's smart actionable
              insights optimized your builing performance,enhance work place
              well-being and achieve sustainability milestones.
            </p>
            <div className="flex justify-center font-medium text-sm">
              <a
                href="/#pricing"
                className="flex py-2.5 px-4 text-center rounded-full duration-150 items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <GradientWrapper
            className="mt-16 sm:mt-28"
            wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
          >
            {/* <img src={HeroImg} className="shadow-lg rounded-2xl" alt="Mailgo" /> */}
            <svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#ddd" />
              <text
                x="50%"
                y="50%"
                font-family="Arial"
                font-size="14"
                fill="#234"
                text-anchor="middle"
                dy=".3em"
              >
                Software Screenshot or Video
              </text>
            </svg>
          </GradientWrapper>
        </div>
      </LayoutEffect>
    </div>
  </section>
);

export default Hero;
