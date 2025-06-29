import React from "react";

const plans = [
  {
    title: "Basic",
    price: "$9/mo",
    features: ["1 Project", "Email Support", "Access to community"],
  },
  {
    title: "Pro",
    price: "$29/mo",
    features: ["10 Projects", "Priority Support", "Advanced analytics"],
  },
];

const PricingCard = () => {
  return (
    <div className=" flex flex-col items-center justify-center px-4 pt-20 pb-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-400 uppercase">
        Pricing Plans
      </h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full shadow-md">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-xl shadow-md p-6  transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold mb-6 text-blue-600">
              {plan.price}
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-pink-500 to-black">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
