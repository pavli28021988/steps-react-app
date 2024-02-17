import React, { useState } from "react";

const messages = [

  "Learn React ☀️",
  "Apply for job 💼",
  "Invest your new income 🤑"

];
function App() {
  return (

    <div>
      <Steps />
      <Steps />
    </div>

  )


}

function Steps() {

  //const step = 1;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test,setTest] = useState({name:"Jonas"})

  function handlePrevious() {
    //alert("Previous")
    if (step > 1) {
      setStep((s) => s - 1);//setStep(step - 1)
    }

  };

  function handleNext() {
    //alert("Good job...You did it")
    if (step < 3) {
      setStep((e) => e + 1)            //setStep(step + 1);

      //setTest({name:"Pavli"})
    }

  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((e) => !e)}>&times;</button>  {/* onClick={() => setIsOpen(!isOpen)} */}

      {isOpen && (< div className='steps'>
        <div className="numbers">
          <div className={step >= 1 ? 'active' : ""}>1</div>
          <div className={step >= 2 ? 'active' : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>


        </div>

        <p className="message">Step {step} : {messages[step - 1]}</p>

        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>Previous</button>

          <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>Next</button>
        </div>



      </div>)}

    </div>


  );
}

export default App;
