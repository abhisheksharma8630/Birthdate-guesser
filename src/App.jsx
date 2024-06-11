import { useState } from "react";
import { useWindowSize } from "react-use";
import Slide from "./Slide";
import { Button, Typography } from "@mui/material";
import ReactConfetti from "react-confetti";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Numbers = [
  [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
  [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31],
  [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31],
  [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31],
  [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
  [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31],
]

function App() {
  const {height,width} = useWindowSize();
  const [currentGrid, setCurrentGrid] = useState(0);
  const [sequence,setSequence] = useState("");
  const handleNextClick = (event) => {
    setSequence((prev)=>prev.concat(event.target.value));
    setCurrentGrid((prevGrid) => Math.min(prevGrid + 1, 5)); // Limit to 3 grids
  };
  return (
    <>
    <div className="App p-10 space-y-7 flex items-center justify-center flex-wrap flex-col">
      <Typography variant="h3" className="text-center">Birthday Date Guesser </Typography>
      <Slide gridNumber={currentGrid} numbersArr={Numbers}/>
      <span className="font-bold text-xl">Does this Chart Contains Your BirthDay Date ? </span>
      <div className="flex gap-10">
      <Button color="success" value="1" size="large" disabled={currentGrid >= 5} onClick={handleNextClick} variant="contained">Yes</Button>
      <Button color="error" value="0" size="large" disabled={currentGrid >= 5} onClick={handleNextClick} variant="contained">No</Button>
      </div>
      <div>
        {currentGrid>=5 && <div>
            <ReactConfetti width={width} height={height} tweenDuration={10000}/>
            <Typography variant="h3" className="text-black text-2xl">{JSON.stringify(parseInt(sequence,2)) == 0 ? "Lagta hai Aap paida nhi hue" : "Your Birthday date is :"+parseInt(sequence,2)} &#127881;</Typography>
          </div>
        }
      </div>
      <a href="/"><Button variant="contained">Try Again</Button></a>
    </div>
      <footer className="bottom-0 sticky px-10 py-4 border-t-2 bg-white border-gray-200 w-full"><span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="https://www.linkedin.com/in/abhishek-sharma-655182215/" className="hover:underline ml-1">
                            Abhishek Sharma
                        </a>
                        . All Rights Reserved.
      </span></footer>
    </>
  );
}

export default App;