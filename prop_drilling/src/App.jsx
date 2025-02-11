import { useRecoilState, useRecoilValue,RecoilRoot } from "recoil"
import { countAtom } from "./store/atoms/Count"

function App(){
  
  return(
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return(
    <div>
      <CountRenderer ></CountRenderer>
      <Buttons></Buttons>
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  
  return(
    <div>
      {count}
    </div>
  )
}
function Buttons(){
  const[count,setCount] = useRecoilState(countAtom)
  return(
    <div>
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <button onClick={() => {setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default App