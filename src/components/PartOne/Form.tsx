"use client";
const Form = () => {
  //w-[625px] h-[419px] table
  return (
    <section className="h-[419px] gap-[90px] flex justify-between ">
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
      <div className="gap-6 h-[419px]">
        <h3 className=" mb-5 font-bold text-[16px] text-[#6D5CBC]">Results:</h3>
        <table className="rounded-sm border-gray-400 shadow-lg">
          <thead className="">
            <tr className="text-left bg-gray-100 border-b">
              <th className=" border-r py-4 px-6 gap-[10px] font-normal text-sm">
                First name
              </th>
              <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
                Last name
              </th>
              <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
                Mobile number
              </th>
              <th className="border-r py-4 px-6 gap-[10px] font-normal text-sm">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-left">
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                Alaa
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                Hamdy
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                01113433881
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                alaahamdy2197@gmail.com
              </td>
            </tr>
            <tr className="border-b text-left">
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                Alaa
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                Hamdy
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                01113433881
              </td>
              <td className=" py-4 px-6 gap-[10px] font-normal text-sm">
                alaahamdy2197@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Form;
