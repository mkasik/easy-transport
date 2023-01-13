import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-center text-3xl text-orange-600 font-bold mt-10">
        About Us
      </h2>
      <div className="hero bg-base-200 mt-3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-secondary font-bold">
              Easy Transport,Easy Life
            </h1>
            <p className="py-6">
              Transportation systems are indispensable to any country's
              progress. Without proper means of transport, the raw materials
              can't be transported to industries, agricultural harvest cannot
              reach city godowns and finished goods can't be deposited in
              markets.
            </p>
          </div>
          <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
            <div className="card-body">
              <img
                className="rounded"
                src="https://www.easy-tl.com/wp-content/uploads/2022/05/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
