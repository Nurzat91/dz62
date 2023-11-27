import {useState} from "react";
import Ball from "../Ball/Ball";
import "./BallGame.css";

interface Props {
  numbers: number;
}

const BallGame = () => {
  const [num, setNum] = useState<Props[]>([
    {numbers: 5},
    {numbers: 11},
    {numbers: 16},
    {numbers: 23},
    {numbers: 32},
  ]);

  const getRandomNumbers = (min: number, max: number, count: number): number[] => {
    if (max - min + 1 < count) {
      throw new Error('Error' +  Error);
    }

    const numbers: number[] = [];

    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }

    return numbers.sort((a, b) => a - b);
  };

  const minNum = 5;
  const maxNum = 36;
  const count = 5;

  const randomNumbers = getRandomNumbers(minNum, maxNum, count);

  const changeName = () =>{
    setNum([
      {numbers: randomNumbers[0]},
      {numbers: randomNumbers[1]},
      {numbers: randomNumbers[2]},
      {numbers: randomNumbers[3]},
      {numbers: randomNumbers[4]},
    ]);
  };

  return (
    <div className="App text-center">
      <div>
        <button type="button" className="btn btn-info" onClick={changeName}>New numbers</button>
      </div>

      <div className="TaskBlock">
        <Ball numbers={num[0].numbers}/>
        <Ball numbers={num[1].numbers}/>
        <Ball numbers={num[2].numbers}/>
        <Ball numbers={num[3].numbers}/>
        <Ball numbers={num[4].numbers}/>
      </div>
    </div>
  )
}

export default BallGame;
