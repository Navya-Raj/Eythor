import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div id="team" className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-1 border border-n-6 rounded-[2rem] lg:w-[19rem] py-8 my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4 text-n-6">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-8/50">
            {item.description}
          </p>

          {/* <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div> */}

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.imageUrl && (
              <div className="w-[8rem] h-[8rem] rounded-[20px] overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <Button
            className="w-full mb-6 mt-8"
            href="https://www.linkedin.com/"
          >
            Connect
          </Button>

          {/* <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default PricingList;
