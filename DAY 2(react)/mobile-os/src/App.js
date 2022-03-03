import logo from './logo.svg';
import './App.css';

function App() {
  const data=["Android","Blackberry","iphone","Windows phone"];
  const data1=["Samsung","HTC","Micromax","Apple"]
  return (
    <div >
      <h1>Mobile Operating System</h1>
      <ul>
        {data.map((el)=>{
          return(<li>{el}</li>)
        })}
      </ul>
      <h1>Mobile Manufactures</h1>
        <ul>{data1.map((el,i)=>{
          if(i==0||i==1){
            return(<li className='abc'>{el}</li>)
          }
          else if(i==2){
            return(<li className='bbc'>{el}</li>)
          }
          else{
            return(<li className='ccc'>{el}</li>)
          }
          
        })}</ul>
    </div>
  );
}

export default App;
