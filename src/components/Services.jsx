import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage1,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="mission">
      <div className="container">
        <Heading
          className="text-n-8"
          title="Our Mission"
          text="Eythor unlocks the potential of solar panel cleaning"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Eythor"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[18rem] ml-auto p-5 bg-white bg-opacity-50 backdrop-blur-sm">
              <h4 className="h4 mb-4">Sustainable Innovation</h4>
              <p className="body-2 mb-[3rem] text-n-6">
              At Eythor, we are dedicated to developing innovative and sustainable solutions to address the global climate crisis. Our mission is to revolutionize the solar energy industry with cutting-edge technology that maximizes efficiency and minimizes environmental impact.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4 text-n-6">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              {/* <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div> */}

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 rounded-3xl border-2 border-black bg-n-1">
                <h4 className="h4 mb-4 text-n-8">The Challenges</h4>
                <p className="body-2 mb-[3rem] text-n-6">
                  Robotic cleaning on a 1 GW plant comes with the need to keep in mind Time-consuming, Uneven Cleaning, Electrical Hazards, and Damage to Panels.
                </p>
              </div>
              
              <PhotoChatMessage1 />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Our Solution</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  
                  With a smart, dry cleaning automated solar panel cleaning robot, Eythor aims to address the challenges faced by the solar energy industry. Our innovative solution is designed to maximize efficiency, reduce labor costs, and minimize environmental impact.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center w-[5rem] h-[5rem] p-0.25 md:w-[6.5rem] md:h-[6.5rem] flex w-10 h-10 bg-n-6 md:w-15 md:h-15`}
                    >
                        <img src={item} width={50} height={50} alt={item} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* <VideoChatMessage /> */}
                {/* <VideoBar /> */}
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
