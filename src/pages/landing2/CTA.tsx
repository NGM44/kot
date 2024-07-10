import GradientWrapper from "./GradientWrapper";
import LayoutEffect from "./LayoutEffect";

const CTA = () => (
  <section className="shadow-lg">
    <GradientWrapper
      wrapperClassName="max-w-xs h-[13rem] top-12 inset-0"
      className={undefined}
    >
      <div className="custom-screen py-28 relative">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6",
          }}
        >
          <div className="relative z-10">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                Start Tracking Air Quality with Vayuguna
              </h2>
              <p className="mt-5 text-gray-300">
                Vayuguna empowers you to enhance and control the air quality in
                every indoor environment. Whether it's critical infrastructure
                like server rooms and battery storage areas, or the everyday
                spaces where your team works, we help you create healthier, more
                productive atmospheres.
              </p>
            </div>
            <div className="mt-5 flex justify-center font-medium text-sm">
              <a
                href="tel:9663393379"
                className="flex items-center animate-pulse py-2.5 px-4 text-center rounded-full duration-150 text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
              >
                Call now : 9663393379
              </a>
              <a
                href="mailto:gkm.hello@gmail.com"
                className="flex items-center animate-pulse py-2.5 px-4 text-center rounded-full duration-150 text-white border border-white ml-4 active:bg-purple-700 "
              >
                Mail us
              </a>
            </div>
          </div>
        </LayoutEffect>
        <img
          src={"./bg-pattern.webp"}
          className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
          alt="Background pattern"
        />
      </div>
    </GradientWrapper>
  </section>
);

export default CTA;
