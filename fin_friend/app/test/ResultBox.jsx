"use client";
import { useEffect, useState } from "react";

export default function ResultBox({ result }) {
  const [apiRes, setApiRes] = useState("");

  return (
    <>
      <h1 className="block m-20 text-[50px] text-center">Response: {result}</h1>
    </>
  );
}
