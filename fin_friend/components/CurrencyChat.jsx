"use client";
import { useState } from "react";
import CurrencyDropdown from "./CurrencyDropdown";

export default function CurrencyChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [selectedCurrencyA, setSelectedCurrencyA] = useState("USD");
  const handleCurrencyChangeA = (e) => setSelectedCurrencyA(e.target.value);
  const [selectedCurrencyB, setSelectedCurrencyB] = useState("USD");
  const handleCurrencyChangeB = (e) => setSelectedCurrencyB(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(prompt);
    try {
      const prompt = `Convert ${selectedCurrencyA} ${question} to ${selectedCurrencyB}`;
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
        <div className="flex justify-center w-fit p-5 h-fit bg-[#f689bb] mx-auto rounded-3xl">
          <h1 className="my-auto mx-10 text-[40px]">Currency Converter</h1>
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <div className="block">
              <div className="flex justify-center">
                <CurrencyDropdown
                  onChange={handleCurrencyChangeA}
                  selectedCurrency={selectedCurrencyA}
                />
                <input
                  type="number"
                  id="prompt"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className=" w-[150px] h-[70px] rounded-md p-2 my-2 text-[40px]"
                />
              </div>
              <div className="flex">
                <h1 className="my-auto mx-10 text-[40px]">To:</h1>
                <CurrencyDropdown
                  onChange={handleCurrencyChangeB}
                  selectedCurrency={selectedCurrencyB}
                />
              </div>
            </div>

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
