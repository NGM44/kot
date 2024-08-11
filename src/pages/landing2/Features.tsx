import { ChevronRightIcon } from "@heroicons/react/20/solid";
import LayoutEffect from "./LayoutEffect";

export default function Features() {
  return (
    <div id="product" className="relative isolate overflow-hidden">
      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <img alt="Your Company" src="/logotemp.png" className="h-11" />
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="https://www.sensormagics.com/whats-new" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span>Just shipped v1.0</span>
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-500"
                  />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Introducing SenseNode
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A smart edge IOT sensor designed for precise mesurement of
              multiple indoor air quality parameters leversging edge ai
              capabilities to optimize sensor output and generate valuable
              insights
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://www.sensormagics.com/get-started"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a
                href="https://www.sensormagics.com/learn-more"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:flex-none xl:ml-32">
            {/* <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"> */}
              {/* <img
                alt="App screenshot"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              /> */}
              <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
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
                  Node Sense Device Picture
                </text>
              </svg>
            {/* </div> */}
          </div>
        </div>
      </LayoutEffect>
    </div>
  );
}
