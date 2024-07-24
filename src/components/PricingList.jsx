import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div id="team" className="flex gap-[1rem] flex-wrap max-lg:flex-wrap overflow-x-auto">
      <div className="flex flex-row space-x-4">
        {pricing.map((item) => (
          <div
            key={item.id}
            className="w-[550px] max-lg:w-full h-auto px-6 bg-n-1 border border-n-6 rounded-[2rem] lg:w-[550px] py-8 my-4 text-color-0"
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

          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
