import Image from "next/image";

export default function BreakWordPage() {
  return (
    <div className="p-20 space-y-12">
      <div className="space-y-8">
        <section className="w-full flex justify-center bg-slate-100 h-[720px]">
          <div className="w-full max-w-[1280px] bg-red-100 space-y-10 flex items-end">
            <div className="w-80 text-2xl font-semibold bg-blue-200 break-keep py-10">
              {`작은 기술이라도\n선하게 쓰이면\n세상이 달라진다는 믿음.\n카카오임팩트가 존재하는\n이유입니다.`}
            </div>
            <div className="flex-auto"></div>
            <div className="w-200 h-full bg-amber-300">이미지 예시</div>
          </div>
        </section>

        <section className="w-full flex justify-center bg-slate-100 h-[720px]">
          <div className="w-full max-w-[1280px] bg-red-100 space-y-10 flex items-end">
            <div className="w-80 text-2xl font-semibold bg-blue-200 break-keep py-10">
              작은 기술이라도 선하게 쓰이면 세상이 달라진다는 믿음.
              카카오임팩트가 존재하는 이유입니다.
            </div>
            <div className="flex-auto"></div>
            <div className="w-200 h-full bg-amber-300">이미지 예시</div>
          </div>
        </section>

        <section className="w-full flex justify-center bg-slate-200 h-[720px]">
          <div className="w-full max-w-[1280px] relative">
            <div className="w-80 text-4xl font-semibold break-keep py-10 absolute bottom-[8px] z-10">
              작은 기술이라도 선하게 쓰이면 세상이 달라진다는 믿음.
              카카오임팩트가 존재하는 이유입니다.
            </div>
            <div className="absolute right-0">
              <div className="relative w-[800px] h-[720px]">
                <Image
                  src={"/images/bitcoin.png"}
                  alt={"dlafdaf"}
                  fill
                  className="object-cover object-center"
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
