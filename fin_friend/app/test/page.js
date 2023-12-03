import InputField from "./InputField";
import ResultBox from "./ResultBox";
import Link from "next/link";

export default async function Test() {
  // const response = await fetch(
  //   "http://api.wolframalpha.com/v1/conversation.jsp?appid=36XE94-3GX5KV7YAA&i=How+much+does+the+earth+weigh%3f"
  // );
  // const data = await response.json();

  return (
    <>
      <Link href="/" className="block text-center text-[50px] text-blue-500">
        Back to home
      </Link>
      <InputField />
    </>
  );
}
