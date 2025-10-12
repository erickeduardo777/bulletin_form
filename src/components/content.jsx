import { useId } from "react";
import ItemList from "./items";

const CxContent = ({ modalOpen }) => {
  const emailId = useId();

  return (
    <div className="h-[80%] p-7 flex flex-col gap-[30px_0px]">
      <h1 className="text-4xl font-semibold text-[#242742]">Stay updated!</h1>
      <p className="text-[#36384E] text-[18px] font-medium">join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="space-y-3.5">
        <ItemList text="Product discovery and building what matters" />
        <ItemList text="Measuring to ensure updates are a success" />
        <ItemList text="And much more!" />
      </ul>
      <form action="#" className="flex flex-col gap-y-7">
        <div className="flex flex-col gap-y-2">
          <label htmlFor={emailId} className="text-[#36384e] text-[14px] font-semibold">Email address</label>
          <input
            className="rounded-[10px] border border-gray-400 outline-none p-4"
            placeholder="email@company.com"
            type="email"
            name="email"
            id={emailId}
          />
        </div>
        <button onClick={modalOpen} className="bg-[#232742] text-white rounded-[10px] text-[18px] font-semibold p-4 cursor-pointer outline-none">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default CxContent;
