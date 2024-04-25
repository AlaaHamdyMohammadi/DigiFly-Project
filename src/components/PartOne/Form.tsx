const Form = () => {
  return (
    <form className="h-[406px] w-[546px] gap-10">
      <div className="w-[546px] h-[78px] flex items-center gap-[30px]">
        <div className="w-[258px] gap-4">
          <label className="font-medium text-sm text-gray-900">
            First name
          </label>
          <input
            type="text"
            placeholder="First name"
            className="h-[52px] mt-2 rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
          />
        </div>
        <div className="w-[258px] gap-4">
          <label className="font-medium text-sm text-gray-900 ">
            Last name
          </label>
          <input
            type="text"
            placeholder="Last name"
            className="h-[52px] mt-2 rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
          />
        </div>
      </div>
      <div className="gap-4 mt-8 flex flex-col">
        <label className="font-medium text-sm text-gray-900">
          Mobile number
        </label>
        <input
          type="text"
          placeholder="Mobile number"
          className="w-[554px] h-[52px] rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
        />
      </div>
      <div className="gap-4 mt-8 flex flex-col">
        <label className="font-medium text-sm text-gray-900">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-[554px] h-[52px] rounded-sm border gap-[10px] py-4 px-8 border-[#E5E5E5] placeholder:text-sm placeholder:font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#6D5CBC]"
        />
      </div>
      <div className="mt-8 w-[554px] h-[52px] rounded-sm p-2 gap-[10px] bg-[#49BD88] flex items-center justify-center cursor-pointer">
        <button type="submit" className="text-[16px] font-bold text-white ">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
