export function Card2() {
  return (
    <div className="w-[416px] h-[278px] relative flex-none">
      <div className="card-2-mask bg-l5 absolute w-full h-full"></div>
      <div className="card-2-mask bg-[#131313] w-[416px] h-[278px] px-[40px] pt-[36px] pb-[16px] flex flex-col justify-between  relative hover:top-[-4px] hover:start-[4px]">
        <main>
          <h4 className="text-c1 font-bold leading-none text-s3 font-f2">
            Moonshot 2023 Summer Hackathon
          </h4>
          <div className="flex gap-[22px] mt-[20px]">
            <div className="h-[18px] px-[8px] border border-solid border-[#676767] rounded-[20px] flex items-center box-border">
              <span className="text-c4 text-[9px] leading-[1.1] font-f2">
                All Tracks
              </span>
            </div>
            <div className="h-[18px] px-[8px] border border-solid border-[#676767] rounded-[20px] flex items-center box-border">
              <span className="text-c4 text-[9px] leading-[1.1] font-f2">
                Solidity
              </span>
            </div>
            <div className="h-[18px] px-[8px] border border-solid border-[#676767] rounded-[20px] flex items-center box-border">
              <span className="text-c4 text-[9px] leading-[1.1] font-f2">
                ZK
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[13px] mt-[60px]">
            <div className="flex justify-between items-center h-[22px] border-b border-solid border-[#282828]">
              <span className="text-s1 text-c5 font-f2 leading-[1.1]">
                Signup
              </span>
              <span className="text-s4 text-c3 font-f1 leading-none font-light">
                4/15 - 6/15
              </span>
            </div>
            <div className="flex justify-between items-center h-[22px] border-b border-solid border-[#282828]">
              <span className="text-s1 text-c5 font-f2 leading-[1.1]">
                Event
              </span>
              <span className="text-s4 text-c3 font-f1 leading-none font-light">
                6/15 - 7/15
              </span>
            </div>
            <div className="flex justify-between items-center h-[22px] border-b border-solid border-[#282828]">
              <span className="text-s1 text-c5 font-f2 leading-[1.1]">
                Grant size
              </span>
              <span className="text-s4 text-c3 font-f1 leading-none font-light">
                200K
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
