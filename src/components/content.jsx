import { useId } from "react";
import ItemList from "./items";

const CxContent = () => {
  const emailId = useId();

  return (
    <div className="h-[80%] p-7">
      <h1 className="text-4xl font-semibold text-[#242742]">Stay updated!</h1>
      <p className="text-[#36384E]">join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <ItemList text="Product discovery and building what matters" />
        <ItemList text="Measuring to ensure updates are a success" />
        <ItemList text="And much more!" />
      </ul>
      <form action="#">
        <label htmlFor={emailId}>Email address</label>
        <input
            placeholder="email@company.com"
            type="email"
            name="email"
            id={emailId}
        />
        <button>Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default CxContent;
