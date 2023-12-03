"use client";

import { useState } from "react";

export default function InputField() {
  const [prompt, setPrompt] = useState("");
  const [responseResult, setResponseResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(prompt);
    try {
      const plusVersion = prompt.replace(/ /g, "+");
      const res = await fetch(`/api/${plusVersion}`);
      const data = await res.json();
      setResponseResult(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="block w-[1000px] h-[800px] bg-gray-100 text-lg mx-auto my-4 rounded-xl p-5">
        <form className="block text-center" onSubmit={handleSubmit}>
          <div className="my-10">
            <h1 className="my-8 text-[50px]">Enter your prompt:</h1>
          </div>
          <div>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mx-[200px] w-[600px] h-[200px] rounded-md p-2 my-4 text-[30px]"
            />
          </div>

          <button
            type="submit"
            className="my-10 mx-[400px] w-[200px] h-[70px] bg-black rounded-lg hover:text-[#1AA9E8] text-white font-bold"
          >
            Submit
          </button>
        </form>
        <h1 className="my-4 mx-8 text-[30px]">Result: {responseResult}</h1>
      </div>
    </>
  );
}
