/* eslint-disable react/prop-types */
import React from 'react';
import Single from "../../public/single.png";
import Double from "../../public/Double.png";
import Triple from "../../public/Triple.png";

// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, planName, price, features, unavailableFeatures }) => {
    return (
        <div className="w-full max-w-sm p-4 bg-white border hover:scale-105 border-gray-200 rounded-lg shadow sm:p-8">
            <div className="w-full flex justify-center items-center">
                <img className="w-40 pl-10" src={imgSrc} alt={`${planName} logo`} />
            </div>
            <h5 className="mb-4 text-xl font-bold text-gray-500">{planName}</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
            </div>
            <ul className="space-y-5 my-7">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="flex-shrink-0 w-4 h-4 text-blue-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                            {feature}
                        </span>
                    </li>
                ))}
                {unavailableFeatures.map((feature, index) => (
                    <li key={index} className="flex line-through decoration-gray-500">
                        <svg
                            className="flex-shrink-0 w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
                Choose plan
            </button>
        </div>
    );
};

const Cards = () => {
    const plans = [
        {
            imgSrc: Single,
            planName: "Standard Plan",
            price: 49,
            features: ["2 team members", "20GB Cloud storage", "Integration help"],
            unavailableFeatures: ["Sketch Files"],
        },
        {
            imgSrc: Double,
            planName: "Premium Plan",
            price: 99,
            features: ["5 team members", "50GB Cloud storage", "Priority support"],
            unavailableFeatures: ["Advanced Reports"],
        },
        {
            imgSrc: Triple,
            planName: "Enterprise Plan",
            price: 199,
            features: ["Unlimited team members", "1TB Cloud storage", "24/7 Support"],
            unavailableFeatures: [],
        },
    ];

    return (
        <div className="w-full py-40 pr-20 px-10 justify-between items-center mx-auto bg-white">
            <div className="text-center grid justify-center md:grid-cols-3 gap-6 ">
                {plans.map((plan, index) => (
                    <Card key={index} {...plan} />
                ))}
            </div>
        </div>
    );
};

export default Cards;
