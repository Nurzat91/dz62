import React from "react";

interface Props{
  numbers: number
}
const Ball:React.FC<Props> = ({numbers}) =>{
  return(
    <div className="task">
      <span>{numbers}</span>
    </div>
  )
};

export default Ball;