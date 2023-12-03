import Chat from "@/components/Chat";
import CurrencyChat from "@/components/CurrencyChat";
import Link from "next/link";

export default function Chatbot() {
  return (
    <>
      <div className="block text-center">
        <Link
          href="/"
          className="block text-center text-[30px] text-blue-500 mt-5 hover:text-gray-300"
        >
          Back to Home
        </Link>
        <h1 className="my-12 text-[60px]">
          Welcome to <span className="text-orange-500">Wolfram Alpha</span> chat
        </h1>
        <CurrencyChat />
        <Chat type="How is the weather in" />
        <Chat type="Who is" />
        <Chat type="How tall is" />
      </div>
    </>
  );
}
