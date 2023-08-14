import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";



function App() {
  const {homeData}= useSelector(state=> state.app)
  console.log(homeData);
  return (
  
    <div className="flex justify-center border border-red-500 items-center">
      
    </div>
   
  );
}

export default App;
