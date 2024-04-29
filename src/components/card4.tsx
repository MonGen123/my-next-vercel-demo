import Image from "next/image";

export function Card4() {
  return (
    <div className="w-[416px] h-[278px] relative flex-none">
      <div className="bg-l7 rounded-[36px] absolute w-full h-full"></div>
      <div className="bg-[#131313] rounded-[36px] w-[416px] h-[278px] p-[20px] pl-[16px]  relative hover:top-[-4px] hover:start-[4px]">
        <div className="card-mask w-[381px] h-[239px] bg-[#B6E1D8] relative">
          <Image
            src="/bitcoin.png"
            alt="bitcoin"
            width={243}
            height={217}
            className="absolute top-[9px] start-[122px]"
          />
        </div>
        <div className="absolute w-[46px] h-[4px] rounded-[11px] bg-l3 top-[29px] start-[31px]"></div>
        <div className="absolute text-c3 text-s3 font-f2 font-bold leading-none top-[180px] start-[30px]">
          What is Bitcoin
        </div>
        <div className="flex items-end absolute top-[248px] start-[259px]">
          <Image
            src="/time.svg"
            alt="time icon"
            width={14}
            height={14}
            className="mr-[8px]"
          />
          <span className="text-c1 text-s1 leading-none font-f1">36 Hour</span>
        </div>
      </div>
    </div>
  );
}
