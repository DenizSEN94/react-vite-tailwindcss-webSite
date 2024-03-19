import Section from "../common/Section";
import Heading from "../common/Heading";
import { LeftLine, RightLine } from "../design/Pricing";
import PricingList from "./P-List";
import { smallSphere, stars } from "../../assets";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            width={255}
            height={255}
            className="relative z-1"
            src={smallSphere}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              width={950}
              height={400}
              className="w-full"
              src={stars}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get Started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
