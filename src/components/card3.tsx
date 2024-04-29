import Image from "next/image";

export function Card3() {
  return (
    <div className="w-[416px] h-[278px] relative flex-none">
      <div className="card-3-mask bg-l6 absolute w-full h-full"></div>
      <div className="card-3-mask bg-[#131313] w-[416px] h-[278px] px-[40px] pt-[36px] pb-[40px] flex flex-col justify-between relative hover:top-[-4px] hover:start-[4px]">
        <main>
          <div className="w-[46px] h-[4px] rounded-[11px] bg-l2 ml-[-2px]"></div>
          <h4 className="text-c3 font-bold leading-none text-s3 font-f2 mt-[28px]">
            Web 3.0 Programming Basics
          </h4>
          <div className="h-[18px] px-[8px] border border-solid border-[#676767] rounded-[20px] flex items-center w-min mt-[16px] box-border">
            <span className="text-c4 text-[9px] leading-[1.1] font-f2">
              Beginner
            </span>
          </div>
          <div className="text-s1 font-f2 leading-[1.1] text-c5 mt-[16px]">
            Basic concepts in programming of Solidity. Topics include:
            variables, functions, flow control, error handling, data structure.
          </div>
        </main>
        <footer className="flex items-center justify-between mr-[-22px]">
          <div className="flex items-center justify-between gap-[32px]">
            <div className="flex items-end">
              <Image
                src="/time.svg"
                alt="time icon"
                width={14}
                height={14}
                className="mr-[8px]"
              />
              <span className="text-c1 text-s1 leading-none font-f1">
                36 Hour
              </span>
            </div>
            <div className="flex items-end">
              <Image
                src="/book.svg"
                alt="book icon"
                width={14}
                height={14}
                className="mr-[8px]"
              />
              <span className="text-c1 text-s1 leading-none font-f1">
                5 Course
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
