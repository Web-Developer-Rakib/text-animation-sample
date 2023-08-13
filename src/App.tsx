import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [transitioned, setTransitioned] = useState<boolean>(false);
  const [wordReplaced, setWordReplaced] = useState<boolean>(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setTransitioned(true);
    }, 1000);

    const timeout2 = setTimeout(() => {
      setWordReplaced(true);
    }, 3000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);
  const getTransitionedLetter = (letter: string) => {
    switch (letter) {
      case "u":
        return <div className="transition-right-arrow">→</div>;
      case "e":
        return <div className="transition-e">e</div>;
      case "h":
        return <div className="transition-up-arrow">↑</div>;
      default:
        return letter;
    }
  };
  return (
    <div className="flex justify-center mt-5 p-10">
      <div className="text-5xl font-bold text-slate-700">
        <h1>We'd love to help</h1>
        <h1 className="ml-[150px] mt-2">Solve your</h1>
        <h1 className="ml-[80px] mt-2">
          <div className="flex">
            {wordReplaced ? (
              <div className="transitioned">Marketing</div>
            ) : (
              "Outreach".split("").map((char, index) => (
                <div key={index} className={`${wordReplaced ? "text-sm" : ""}`}>
                  {transitioned ? getTransitionedLetter(char) : char}
                </div>
              ))
            )}
            <div className="ml-3">Problems</div>
          </div>
        </h1>
      </div>
      <p className="w-56 text-[10px] mt-12 ml-[-95px] text-slate-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
        distinctio perferendis molestiae rem alias, numquam illum laboriosam
        iste,
      </p>
    </div>
  );
}

export default App;
