import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question:
      "Is it possible to configure air quality monitoring devices to measure specific pollutants or parameters?",
    answer:
      "Yes, we provide customized solution according to need of the customer.",
  },
  {
    question:
      "What types of air quality parameters or pollutants is the Vayuguna system currently capable of monitoring?",
    answer:
      "We are currently supporting Temprature, relative humidity, Barometric Pressure, Indoor Air Quality Index, Carbon Dioxide, Particulate Matters, Volatile Organic Compounds(VOC), Nitric Oxides(NOx), Ambient Light(Lux), Noise Levels, Altitude, Building Structural Health, Carbon Monoxide, Formaldehyde , Nitrogen Dioxide,Ozone, Sulfur Dioxide , Hydrogen Sulfide, Nitric Oxide, Oxygen , Ammonia.",
  },
  {
    question: "What is Sense Node ?",
    answer:
      "A compact wall mount device designed to monitor Temperature and humidity  with precision, adhering to industry standards.",
  },
  {
    question:
      "Is it possible to deploy a network of air quality monitoring devices to cover and assess a large area?",
    answer:
      "We Have developed a Mesh system which utilizes a network of multiple air quality monitoring devices to capture data over a large area. These devices work together to cumulatively collect and aggregate air quality information, providing comprehensive coverage and analysis for extensive spaces.",
  },
  {
    question: "Can multiple user access vayuguna dashboard ?",
    answer: "Yes",
  },
];

export default function FAQ() {
  const [dark, setDark] = useState(true);
  return (
    <div id="faq" className={`relative isolate ${dark ? "bg-gray-900" : "bg-white"}`}>
     
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2
              className={`text-2xl font-bold leading-10 tracking-tight ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Frequently asked questions
            </h2>
            <dl
              className={`mt-10 space-y-6 divide-y  ${
                dark ? "divide-white/10" : "divide-black/10"
              }`}
            >
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton
                          className={`flex w-full items-start justify-between text-left ${
                            dark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </DisclosureButton>
                      </dt>
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p
                          className={`text-base leading-7 ${
                            dark ? "text-gray-300" : "text-gray-800"
                          }`}
                        >
                          {faq.answer}
                        </p>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
