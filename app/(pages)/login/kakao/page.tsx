import Api from "@/lib/api";
import ClientPage from "./clientPage";

interface Props {
  searchParams: Promise<{ code: string }>;
}

export default async function KakaoLoginPage({ searchParams }: Props) {
  const code = (await searchParams).code || "";

  // 0. next에서 spring한테 code 전달 (api)

  // spring
  // 1. code 값을 받고 => code 값이 유효한지 검사 (카카오 서버에게 물어봄)
  // 2. 카카오한테 사용자 고유키(ID)를 요청/수신
  // 3. 우리 회원 디비에 일치 하는 고유키가 있는 사람 체크 true => 회원가입을 했었던 사람
  // 4. accessToken을 next에게 제공

  return (
    <>
      <ClientPage code={code}></ClientPage>
    </>
  );
}
