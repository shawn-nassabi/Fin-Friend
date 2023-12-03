"use client";
import { useState } from "react";

export default function Chat({ type }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(prompt);
    try {
      const prompt = type + ` ${question}`;
      const plusVersion = prompt.replace(/ /g, "+");
      const res = await fetch(`/api/${plusVersion}`);
      const data = await res.json();
      setAnswer(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="block my-28 ">
        <div className="flex justify-center w-fit p-5 h-[130px] bg-[#f689bb] mx-auto rounded-3xl">
          <h1 className="my-auto mx-10 text-[40px]">{type} </h1>
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <textarea
              id="prompt"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className=" w-[400px] h-[70px] rounded-md p-2 my-2 text-[40px]"
            />
            <button
              type="submit"
              className="my-auto ml-5 w-[50px] h-[50px] bg-black rounded-lg hover:bg-[#b9d796] text-white font-bold"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex justify-between flex-wrap mt-4 w-[800px] h-fit bg-[#eaeaea] mx-auto rounded-3xl">
          <h1 className="my-auto mx-10 text-[40px]"> Answer: </h1>
          <h1 className="my-auto mx-10 text-[40px]"> {answer}</h1>
        </div>
      </div>
    </>
  );
}
