"use client";

import AppShell from "@/components/grid/appShell";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";

export default function AboutPage() {
  const visionItems: LiItemType[] = [{ title: "문제 해결 중심", info: "" }];

  return (
    <AppShell>
      <section className="px-4 py-16">
        <Title title="소개" subTitle="INTRODUCE" />

        <div className="mt-6 grid grid-cols-[3fr_1fr] gap-10 items-center">
          <div>
            <div className="text-2xl font-bold">
              저는 사용자 경험 중심으로 생각하는 개발자 김도희입니다.
            </div>
            <div className="mt-4 space-y-3">
              <p>
                안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 프론트엔드
              </p>
              <p>
                개발자 김도희입니다. 항상 사용자의 입장에서 생각하며, 직관적이고
              </p>
              <p>매력적인 인터페이스를 구현하는 것을 목표로 하고 있습니다.</p>
            </div>
          </div>

          <div className="">
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/proflie.jpg"
                alt="내 자신"
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6">
        <div className="flex">
          <Title title="비전" subTitle="VISION"></Title>
        </div>

        <div className="py-12">
          <ul>
            <UlItem items={visionItems}></UlItem>
            {/* <LiItem
              title="사용자 중심 디자인"
              info="사용자의 요구와 기대를 깊이 이해하고, 이를 바탕으로 직관적이고 매력적인 인터페이스를 설계합니다."
            /> */}
          </ul>
        </div>

        <div className="flex pt-6 space-x-12 justify-center">
          <CircleItem text="Front-End" subText="Next.js, Typescript" />
          <CircleItem
            text="Back-End"
            subText="SpringBoot, Postman"
            className="bg-sky-200"
          />
          <CircleItem
            text="Style"
            subText="Tailwindcss, Pigma"
            className="bg-sky-400"
          />
          <CircleItem
            text="Data"
            subText="python, mysql"
            className="bg-sky-600 text-white"
          />
        </div>
      </section>

      <section className="px-4 p-16">
        <Title title="연락" subTitle="Context"></Title>

        <div className="grid grid-cols-3 gap-4 py-3">
          <ContactCard name="E-mail" link="happy42@gmail.com"></ContactCard>
          <ContactCard
            name="GitHub"
            link="https://www.github.com/dohee12"
          ></ContactCard>
          <ContactCard
            name="INSTAGRAM"
            link="https://www.instagram.com"
          ></ContactCard>
        </div>
      </section>
    </AppShell>
  );
}

type LiItemType = { title: string; info: string };

function ContactCard({ name, link }: { name: string; link: string }) {
  return (
    <div className="p-6">
      <div className="flex py-8 border rounded-lg items-center justify-center shadow-md">
        <div className="text-center space-y-2 text-xl">
          <div className="font-semibold tracking-wider">{name}</div>
          <Button
            onClick={async () => {
              if (link.startsWith("https") || link.startsWith("http")) {
                window.open(link);
              } else {
                try {
                  await window.navigator.clipboard.writeText(link);
                  toast.success("이메일이 복사되었습니다!");
                } catch (error) {
                  console.error(error);
                  toast.error("복사에 실패했습니다");
                }
              }
              window.open(link.startsWith("https") ? link : `mailto:${link}`);
            }}
          >
            {link}
          </Button>
          <a href={`mailto:${link}`}></a>
        </div>
      </div>
    </div>
  );
}

function UlItem({ items }: { items: LiItemType[] }) {
  return (
    <ul className="space-y-2 list-disc pl-5 text-xl">
      {items.map((item, i) => (
        <LiItem key={i} title={item.title} info={item.info}></LiItem>
      ))}
    </ul>
  );
}

function LiItem({ title, info }: { title: string; info: string }) {
  return (
    <li>
      <span className="font-semibold pr-2"> {title} </span>
      <span>{info}</span>
    </li>
  );
}

function CircleItem({
  text,
  subText,
  className,
}: {
  text: string;
  subText: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "size-50 bg-sky-50 rounded-full flex items-center justify-center",
        className
      )}
    >
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold">{text}</div>
        <div>{subText}</div>
      </div>
    </div>
  );
}
