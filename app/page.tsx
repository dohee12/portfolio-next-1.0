"use client";

import { Button } from "@/components/ui/button";
//import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PathValue = string | null;

export default function Home() {
  const router = useRouter();

  function move(path: PathValue) {
    if (path != null) {
      router.push(path);
    }
  }

  return (
    <div>
      <div>Home</div>
      <div className="p-8 space-y-2">
        <Button variant="outline" onClick={() => move("/login")}>
          로그인으로 이동
        </Button>
        <Button variant="ghost" size="lg" onClick={() => move("/register")}>
          회원가입으로 이동
        </Button>
        <Button variant="circle">
          <Link href={"/login"}>Link 로그인 페이지 이동</Link>
        </Button>
        <Button>auth</Button>

        {/* <div
          className={cn(
            "w-100 h-100 bg-green-500 bg-red-500 bg-blue-500",
            "text-white"  x`
          )}
        >
          400px짜리 네모
        </div> */}
      </div>
    </div>
  );
}
