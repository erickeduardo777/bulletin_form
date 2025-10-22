import { useId } from "react";
import ItemList from "./items";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import objValid from "../validation/validation";
import ConfirmButton from "./buttonConfirm";

const CxContent = ({ modalOpen }) => {
  const emailId = useId();

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(objValid) })

  const openM = () => modalOpen()

  return (
    <div className="h-[80%] p-7 flex flex-col gap-[30px_0px] lg:h-[100%] lg:w-[50%] landscape:h-[100%] landscape:bg-white lg:gap-[40px_0px]">
      <h1 className="text-4xl font-semibold text-[#242742] lg:text-6xl">Stay updated!</h1>
      <p className="text-[#36384E] text-[18px] font-medium">Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className="space-y-3.5">
        <ItemList text="Product discovery and building what matters" />
        <ItemList text="Measuring to ensure updates are a success" />
        <ItemList text="And much more!" />
      </ul>
      <form action="#" onSubmit={handleSubmit(openM)} className="flex flex-col gap-y-7 lg:gap-y-8">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor={emailId} className="text-[#36384e] text-[14px] font-semibold">Email address</label>
            {errors?.email?.message && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <input
            className={`rounded-[10px] border border-gray-400 outline-none p-4 pl-6 hover:border-t-black hover:border-l-black ${errors?.email?.message && 'border-red-500 placeholder:text-red-500 bg-red-500/15'}`}
            placeholder="email@company.com"
            {...register('email') }
            type="email"
            name="email"
            id={emailId}
          />
          
        </div>
        <ConfirmButton type="submit">
          Subscribe to monthly newsletter
        </ConfirmButton>
      </form>
    </div>
  );
};

export default CxContent