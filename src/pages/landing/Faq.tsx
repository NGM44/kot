import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const faqs = [
  {
    question: "What are alternative investments?",
    answer:
      "Alternative investments are assets that fall outside the traditional categories of stocks, bonds, and cash. Examples include private equity, venture capital, hedge funds, real estate, commodities, and collectibles.",
  },
  {
    question: "Why consider alternative investments?",
    answer:
      "There are several reasons to consider alternatives. They can offer: \n Diversification: Reduce reliance on traditional markets and potentially lower portfolio risk. \nPotential for higher returns: Some alternatives have the potential for higher returns than stocks and bonds.\nAccess to unique asset classes: Invest in areas not readily available through traditional means.",
  },
  {
    question: "What are the risks of alternative investments?",
    answer:
      "While alternatives offer potential benefits, they also come with risks:\nLower liquidity: May be difficult or time-consuming to sell an investment quickly.\nHigher fees: Management fees for some alternatives can be significant.\nHigher complexity: Some alternatives require a higher level of investment knowledge.\nLess regulation: May have fewer investor protections compared to traditional investments.\nWhat are some common types of alternative investments?\nPrivate Equity: Investing in companies not publicly traded on stock exchanges.\nVenture Capital: Providing funding to early-stage, high-growth companies.\nHedge Funds: Employing various investment strategies to potentially achieve high returns.\nReal Estate: Investing in physical property or real estate investment trusts (REITs).\nCommodities: Investing in raw materials like oil, gold, or agricultural products. \nCollectibles: Investing in items like art, antiques, or rare coins.",
  },
  {
    question: "How much should I invest in alternatives?",
    answer:
      "The appropriate allocation to alternatives depends on your investment goals, risk tolerance, and investment horizon. It's wise to consult a financial advisor for personalized advice.",
  },
  {
    question: "How do I invest in alternative investments?",
    answer:
      "Investment minimums for some alternatives can be high.  Some options include: \nInvesting through specialized funds or platforms. \nUsing a financial advisor who can access these investments. \nAre alternative investments right for me?\nAlternatives may be suitable for investors seeking diversification and potentially higher returns. However, they require a longer investment horizon and tolerance for higher risk.",
  },
  {
    question: "Where can I learn more about alternative investments?",
    answer:
      "There are many resources available online and from financial professionals. Consider speaking to a qualified financial advisor to determine if alternatives are suitable for your portfolio.",
  },
];

export default function FAQ() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`relative isolate ${dark ? "bg-gray-900" : "bg-white"}`}>
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
            <dl className={`mt-10 space-y-6 divide-y  ${ dark ? "divide-white/10" : "divide-black/10"}`}>
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <DisclosureButton className={`flex w-full items-start justify-between text-left ${ dark ? "text-white" : "text-gray-900"}`}>
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
                        <p className={`text-base leading-7 ${ dark ? "text-gray-300" : "text-gray-800"}`}>
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
