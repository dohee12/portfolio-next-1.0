"use client";

import AppShell from "@/components/grid/appShell";
import Title from "@/components/title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TimelineItem = {
  period: string;
  title: string;
  description?: string;
};

const timelines: TimelineItem[] = [
  {
    period: "2015.12",
    title: "00중학교",
  },
  {
    period: "2020.03",
    title: "00 고등학교",
  },
  {
    period: "2020.03",
    title: "대림대학교 소프트웨어학부",
    description: "프로그램 기초, 컴퓨터 기초 과목 이수",
  },
];

export default function HistoryPage() {
  return (
    <AppShell>
      <section className="px-4 py-16">
        <Title title="지도" subTitle="MAP"></Title>
        <div className="mt-6 w-full bg-muted relative overflow-hidden rounded-xl border">
          <iframe
            title="오시는 길"
            className="h-100 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              "경기도 안양시 동안구 시민대로"
            )}&output=embed`}
          ></iframe>
        </div>
      </section>

      <section className="px-4 py-16">
        <Title title="타임라인" subTitle="TIMELINE" />

        <div className="relative mt-12">
          {/* 왼쪽 세로 라인 */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-muted-foreground/20" />

          {/* 타임라인 리스트 */}
          <div className="space-y-10 pl-10">
            {timelines.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* ● Dot */}
                <span className="absolute -left-[2px] mt-2 w-4 h-4 rounded-full bg-primary shadow-md" />

                {/* 카드 UI */}
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.period}</CardDescription>
                  </CardHeader>

                  {item.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
