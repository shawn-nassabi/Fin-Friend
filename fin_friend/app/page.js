import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="my-12 text-[200px] font-bold text-[#f689bb]">
          Fin <span className="text-[#b9d796]">Friend</span>
        </h1>
        <Link
          href="/chatbot"
          className="block text-center text-[50px] text-blue-500 mt-5 hover:text-gray-300"
        >
          Wolfram Chatbot
        </Link>
        <Link
          href="/budget"
          className="block text-center text-[50px] text-blue-500 mt-10 hover:text-gray-300"
        >
          Budgeting Guide
        </Link>
      </div>
    </>
  );
}
