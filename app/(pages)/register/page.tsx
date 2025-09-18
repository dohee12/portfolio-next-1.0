"use client";

import AppShell from "@/components/grid/appShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function Register() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const register = () => {
    try {
      if (!nickname) {
        throw new Error("닉네임을 입력해주세요");
      }

      if (!email) {
        throw new Error("email를 입력해주세요");
      }

      if (!password || !repassword) {
        throw new Error("password을 입력해주세요");
      }

      if (password !== repassword) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AppShell>
      <div className="space-y-12">
        <div className="text-2xl font-semibold">회원가입</div>
        <div className="space-y-4">
          <div className="text-xl font-semibold">닉네임</div>
          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <div className="text-xl font-semibold">id</div>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="text-xl font-semibold">password</div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-xl font-semibold">password 확인</div>
          <Input
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          {password !== repassword && (
            <div className="text-red-500 pt-2 font-semibold">
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </div>
        <Button className="w-full" size="lg" onClick={() => register()}>
          회원가입
        </Button>
      </div>
    </AppShell>
  );
}
