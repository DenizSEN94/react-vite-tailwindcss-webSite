import Section from "../common/Section";
import Heading from "../common/Heading";
import { benefits } from "../../constants";
import Arrow from "../../assets/svg/Arrow";
import ClipPath from "../../assets/svg/ClipPath";
import { GradientLight } from "../design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainware"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    width={48}
                    height={48}
                    src={item.iconUrl}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wide">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                style={{ clipPath: "url(#benefits)" }}
                className="absolute inset-0.5 bg-n-8"
              >
                <div className="absolute inset-0 opacity-0  transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Benefits;
