import ButtonBox from "./components/buttonBox";
import Button from "./components/button";
import Screen from "./components/screen";
import CalcProvider from "./context/calcContext";
function App() {
  const BTN_VALUES=[
    ["AC","+/-","%","/"],
    [7,8,9,"x"],
    [4,5,6,"-"],
    [1,2,3,"+"],
    [0,".","="],
  ]
  return (
    <>
    <CalcProvider>
    <div className="flex flex-col h-screen justify-center items-center">
    <Screen/>  
      <div className='flex flex-col w-1/3'>  
<ButtonBox>
  {BTN_VALUES.flat().map((btn,i)=><Button key={i} value={btn}/>)}
</ButtonBox>
</div>
</div>
</CalcProvider>
   </>


  
  );
  
}

export default App;
