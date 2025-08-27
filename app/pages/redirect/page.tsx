import { redirect } from "next/navigation";

export default function Redirect() {
  //if(로그인 했는지 안했는지 체크하는 로직)
  redirect("/login");

  return <div className="">리다이렉트 페이지</div>;
}
