import React from 'react';

const HMSoftColorCards = () => {
  const cards = [
    {
      name: "Soft Beige",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      accentColor: "text-yellow-600",
      borderColor: "border-yellow-100"
    },
    // {
    //   name: "Pale Pink",
    //   bgColor: "bg-pink-50",
    //   textColor: "text-pink-900",
    //   accentColor: "text-pink-600",
    //   borderColor: "border-pink-100"
    // },
    // {
    //   name: "Dusty Lavender",
    //   bgColor: "bg-purple-100",
    //   textColor: "text-purple-900",
    //   accentColor: "text-purple-600",
    //   borderColor: "border-purple-200"
    // },
    // {
    //   name: "Mint Green",
    //   bgColor: "bg-green-50",
    //   textColor: "text-green-900",
    //   accentColor: "text-green-600",
    //   borderColor: "border-green-100"
    // },
    {
      name: "Sky Blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      accentColor: "text-blue-600",
      borderColor: "border-blue-100"
    },
    {
      name: "Peach Sorbet",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
      accentColor: "text-orange-500",
      borderColor: "border-orange-100"
    },
    // {
    //   name: "Lilac Dream",
    //   bgColor: "bg-indigo-50",
    //   textColor: "text-indigo-900",
    //   accentColor: "text-indigo-600",
    //   borderColor: "border-indigo-100"
    // },
    // {
    //   name: "Buttercream",
    //   bgColor: "bg-yellow-100",
    //   textColor: "text-yellow-900",
    //   accentColor: "text-yellow-700",
    //   borderColor: "border-yellow-200"
    // },
    // {
    //   name: "Misty Rose",
    //   bgColor: "bg-red-50",
    //   textColor: "text-red-900",
    //   accentColor: "text-red-500",
    //   borderColor: "border-red-100"
    // },
    // {
    //   name: "Sage Green",
    //   bgColor: "bg-green-100",
    //   textColor: "text-green-900",
    //   accentColor: "text-green-700",
    //   borderColor: "border-green-200"
    // }
  ];

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className={`${card.bgColor} ${card.borderColor} border rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300`}>
            <div className="p-6">
              <div className="mb-4">
                <svg className={`w-16 h-16 ${card.accentColor} transform group-hover:scale-110 transition-transform duration-300`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className={`text-2xl font-bold ${card.textColor} mb-2`}>{card.name}</h3>
              <p className={`${card.textColor} opacity-80 mb-4`}>Soft and elegant H&M-inspired tones</p>
              <div className={`w-full h-1 ${card.accentColor} bg-opacity-30 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-full ${card.accentColor} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HMSoftColorCards;