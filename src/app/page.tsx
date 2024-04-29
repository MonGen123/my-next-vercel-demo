import { CardList } from "@/components/card-list";

export default function Home() {
  return (
    <div className="w-full">
      <h3 className="font-f3 text-c6 text-[20px] font-bold leading-[112.5%] tracking-[.06em] ml-[124px]">
        {"< / Trending Now >"}
      </h3>
      <CardList />
    </div>
  );
}
