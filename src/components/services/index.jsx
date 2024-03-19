import Section from "../common/Section";
import Heading from "../common/Heading";
import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import Generating from "../Hero/Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";
import { service1, service2, service3, check } from "../../assets";
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="relative">
          {/* Images 1 */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[45rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                width={800}
                height={730}
                className="w-full h-full object-cover md:object-right"
                src={service1}
                alt="Smartest AI"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="Check" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* Images 2 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  width={630}
                  height={750}
                  className="w-full h-full object-cover"
                  src={service2}
                  alt="Robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Lorem Ipsum is simply dummy&apos;s text of the printing and
                  typesetting industry.
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            {/* Images 3 */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Lorem Ipsum is simply dummy&apos;s text of the printing and
                  typesetting industry.
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img width={24} height={24} src={item} alt="Icon" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                  src={service3}
                  alt="Scary Robot"
                />
                <VideoChatMessage />
                <VideoBar />
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
