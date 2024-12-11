const Invoice = () => {
  return (
    <body className="font-inter bg-white w-[594px] h-[842px] mx-auto">
      <div className="w-[602px] px-[38px] pt-10 pb-[200px] bg-white mx-auto rounded-[10px]">
        <div className="w-[518px] flex justify-between gap-10 mx-auto mb-[30px]">
          <div className="w-[278px] h-[98px]">
            <h3 className="text-[18px] mb-3 font-semibold text-[#494949]">
              BestTrip.Travel
            </h3>
            <p className="text-[10px] text-[#494949]">
              <span className="font-medium">Office Address</span>: Rajlaxmi
              complex, Lift# 6, Rajaxmi,
            </p>
            <p className="text-[10px] text-gray-600">
              Sector# 03, Uttara,Dhaka,Bangladesh.
            </p>
            <p className="text-[10px] text-gray-600 my-2">
              <span className="font-medium">Helpline</span>: 09677-443333
            </p>
            <p className="text-[10px] text-gray-600">
              <span className="font-medium">Write to us</span>:
              support@besttrip.travel
            </p>
          </div>
          <img
            src="/public/image/logo.svg"
            alt="BestTrip"
            className="w-[200px] h-[86px] rounded-[4px]"
          />
        </div>
        <div className="w-[518px] mx-auto mb-4">
          <h3 className="text-[12px] mb-3 text-[#606060] font-semibold">
            Invoice Details
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EF030B] text-white">
                <th className="p-[10px] border-l border-[#DADADA] text-[12px]">
                  Invoice Id
                </th>
                <th className="p-[10px] border border-white text-[12px]">
                  Booking Id
                </th>
                <th className="p-[10px] border border-white text-[12px]">
                  Customer
                </th>
                <th className="p-[10px] border-r border-[#DADADA] text-[12px]">
                  Date of Issue
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F5F5F5] text-center text-[#606060]">
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  INV24000001
                </td>
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  BTU24000024
                </td>
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  Md Irfanul Haque
                </td>
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  12 June, 2024
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[518px] mx-auto mb-4">
          <h3 className="text-[12px] mb-3 text-[#606060] font-semibold">
            Invoice for
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#EF030B] text-white">
                <th className="p-[10px] border-l border-[#DADADA] text-[12px]">
                  Passenger Name
                </th>
                <th className="p-[10px] border border-white text-[12px]">
                  Email
                </th>
                <th className="p-[10px] border-r border-[#DADADA] text-[12px]">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F5F5F5] text-center text-[#606060]">
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  Md Irfanul Haque
                </td>
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  irfan@besttrip.travel
                </td>
                <td className="p-[10px] border border-[#DADADA] text-[10px]">
                  +880 1871 248015
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[518px] mx-auto mb-[30px]">
          <h3 className="text-[12px] mb-3 text-[#606060] font-semibold">
            Sales Information
          </h3>
          <table className="w-full border-collapse mb-[30px]">
            <thead>
              <tr className="bg-[#EF030B] text-white">
                <th className="p-[10px] border-l border-[#DADADA] text-[12px]">
                  Sales Description
                </th>
                <th className="p-[10px] border border-white text-[12px]">
                  Type
                </th>
                <th className="p-[10px] border border-white text-[12px]">
                  Amount
                </th>
                <th className="p-[10px] border border-white text-[12px]">
                  Pax
                </th>
                <th className="p-[10px] border-r border-[#DADADA] text-[12px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-center text-[#606060]">
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>Quad Share Basis Package</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>Adult</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>13000</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>1</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>13000</p>
                </td>
              </tr>
              <tr className="bg-white text-center text-[#606060]">
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>Quad Share Basis Package</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>Adult</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>13000</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>1</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>13000</p>
                </td>
              </tr>
              <tr className="bg-white text-center text-[#606060]">
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>Quad Share Basis Package</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>Adult</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>13000</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>1</p>
                </td>
                <td className="p-[12px] border border-[#DADADA] text-[10px]">
                  <p>13000</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[518px] mx-auto text-[#606060] text-[10px] font-medium">
          <p className="mb-[10px]">
            <span className="font-semibold">In words:</span> Three lak twenty
            thousand taka only.
          </p>
          <p className="mb-[10px]">
            <span className="font-semibold">Note:</span> All payment should be
            made in favor of "BestTrip"
          </p>
          <p className="mb-[10px]">
            This Invoice will not be recognized as paid unless supported by
            Company Official Receipt.
          </p>
          <p>
            3% Bank Charge will be add on total bill amount, if the bill
            Paid/settled by Debit/Credit Card.
          </p>
        </div>
      </div>
    </body>
  );
};

export default Invoice;
