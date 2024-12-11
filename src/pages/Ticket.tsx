const Ticket = () => {
  return (
    <body className="font-inter bg-[#f5f5f5] w-[594px] h-[842px] mx-auto">
      <div className="w-[602px] px-[38px] pt-[40px] pb-[200px] bg-white mx-auto rounded-[10px]">
        <div className="w-[518px] flex justify-between gap-[40px] mx-auto mb-[30px]">
          <div className="w-[278px] ">
            <h3 className="text-[18px] mb-[12px] font-semibold text-[#494949]">
              BestTrip.Travel
            </h3>
            <p className="text-[10px] text-[#494949]">
              <span className="font-medium">Office Address</span>: Rajlaxmi
              complex, Lift# 6, Rajaxmi,
            </p>
            <p className="text-[10px] text-[#494949]">
              Sector# 03, Uttara,Dhaka,Bangladesh.
            </p>
            <p className="text-[10px] text-[#494949] my-[8px]">
              <span className="font-medium">Helpline</span>: 09677-443333
            </p>
            <p className="text-[10px] text-[#494949]">
              <span className="font-medium">Write to us</span>:
              support@besttrip.travel
            </p>
          </div>

          <img
            src="/image/logo.svg"
            alt="BestTrip"
            className="w-[200px] h-[86.6px] rounded-[4px]"
          />
        </div>

        <div className="w-[518px] mx-auto mb-[16px]">
          <h3 className="text-[12px] mb-[12px] text-[#606060] font-semibold">
            Booking Information
          </h3>
          <table className="w-[518px] border-collapse mx-auto mb-[16px]">
            <thead>
              <tr className="bg-[#EF030B] text-white">
                <th className="p-[4px] px-[10px] border-l border-[#DADADA text-[12px]">
                  Booking Id
                </th>
                <th className="p-[4px] px-[10px] border border-white text-[12px]">
                  Date Of Issue
                </th>
                <th className="p-[4px] px-[10px] border border-white text-[12px]">
                  Payment
                </th>
                <th className="p-[4px] px-[10px] border-r border-[#DADADA text-[12px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F5F5F5] text-center text-[#606060]">
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  BTU24000024
                </td>
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  12 June, 2024
                </td>
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  Credit - Wallet
                </td>
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  Confirmed
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[518px] mx-auto mb-[16px]">
          <h3 className="text-[12px] mb-[12px] text-[#606060] font-semibold">
            Passenger Information
          </h3>
          <table className="w-[518px] border-collapse mx-auto mb-[16px]">
            <thead>
              <tr className="bg-[#EF030B] text-white">
                <th className="p-[4px] px-[10px] border-l border-[#DADADA] text-[12px]">
                  Passenger Name
                </th>
                <th className="p-[4px] px-[10px] border border-white text-[12px]">
                  Flight Status
                </th>
                <th className="p-[4px] px-[10px] border border-white text-[12px]">
                  Makkah Hotel
                </th>
                <th className="p-[4px] px-[10px] border-r border-[#DADADA text-[12px]">
                  Madinah Hotel
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F5F5F5] text-center text-[#606060]">
                <td className="p-[4px] px-[10px] border border-[#DADADA]  text-[10px]">
                  Md Irfanul Haque
                </td>
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  Confirmed
                </td>
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  Confirmed
                </td>
                <td className="p-[4px] px-[10px] border border-[#DADADA] text-[10px]">
                  Confirmed
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[518px] mx-auto">
          <h3 className="text-[12px] mb-[12px] text-[#606060] font-semibold ">
            Itinerary Information
          </h3>
          <table className="w-[518px]  mx-auto mb-[30px]">
            <thead>
              <tr className="bg-[#EF030B] text-white">
                <th className="p-[4px] px-[10px] border-l border-[#DADADA] text-[12px]">
                  Package Detail
                </th>
                <th className="p-[4px] px-[10px] border border-white text-[12px]">
                  Journey Detail
                </th>
                <th className="p-[4px] px-[10px]  border-r border-[#DADADA]  text-[12px]">
                  Package Inclusion
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f9f9f9] text-center">
                <td className="p-[16px] px-[10px] border border-[#DADADA] text-[10px] text-[#606060] leading-[20px]">
                  <p className="font-semibold mb-[4px]">
                    Quad Share Basis - Premium Package
                  </p>
                  <p>1 Friday In Makkah - 1 Friday In Madinah</p>
                </td>
                <td className="p-[16px] px-[10px] border border-[#DADADA] text-[10px] text-[#606060] leading-[20px]">
                  <p>From : Dhaka, Bangladesh</p>
                  <p>Journey Date : 20 June, 2024</p>
                  <p>15 Days | 14 Nights</p>
                </td>
                <td className="p-[16px] px-[10px] border border-[#DADADA] text-[10px] text-[#606060] leading-[20px]">
                  <p>Flight - Hotel - Visa</p>
                  <p>Transport - Food</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center pb-[60px] text-[#494949] w-[518px] mx-auto">
          <p className="p-[8px] px-[10px] font-semibold text-[12px] bg-[#EF030B] text-white border-b-0 border border-[#DADADA]">
            Condition and Important Notice
          </p>

          <p className="p-[12px] px-[20px] border border-[#DADADA] text-[10px] border-b-0 text-[#606060] font-medium">
            <span className="font-semibold">E-Ticket Notice :</span> Carriage
            and other services provided by the carrier are subject to conditions
            of carriage which are hereby incorporated by reference. These
            conditions may be obtained from the issuing carrier.
          </p>

          <p className="p-[12px] px-[20px] border border-[#DADADA] text-[10px] border-b-0 text-[#606060] font-medium">
            <span className="font-semibold">Passport/Visa/Health :</span> Please
            ensure that you have all the required travel documents for your
            entire journey - i.e. valid passport & necessary visas - and that
            you have had the recommended inoculations for your destination(s).
          </p>

          <p className="p-[12px] px-[20px] border border-[#DADADA] text-[10px] border-b-0 text-[#606060] font-medium">
            <span className="font-semibold">Reconfirmation of flights :</span>{" "}
            Please reconfirm all flights at least 72 hours in advance direct
            with the airline concerned. Failure to do so could result in the
            cancellation of your reservation and possible 'no-show' charges.
          </p>

          <p className="p-[12px] px-[20px] border border-[#DADADA] border-b text-[10px] text-[#606060] font-medium">
            <span className="font-semibold">Insurance :</span> We strongly
            recommend that you take out travel insurance for the whole of your
            journey.
          </p>
        </div>
      </div>
    </body>
  );
};

export default Ticket;
