"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div>Home</div>
      <div className="p-8 space-y-2">
        <div className="p-2 bg-red-300" onClick={() => router.push("/login")}>
          로그인으로 이동
        </div>
        <div
          className="p-2 bg-blue-300"
          onClick={() => router.push("/register")}
        >
          로그아웃으로 이동
        </div>
        <div className="p-2 bg-green-300" onClick={() => router.back()}>
          뒤로가기
        </div>
        <Link href={"/"}>홈으로 이동</Link>
      </div>
    </div>
  );
}
