
import {useState,useEffect} from 'react';

function App() {
  const [loading, setLoading]= useState(false);
  const [stocks, setStocks]= useState([]);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState(null);
  // * Init on Page Load
  useEffect(() => {
    fetchTitle();
  }, []);

  const fetchTitle = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    setTitle(data.title); //Setting the response into state
  };
  // useEffect(()=>{
  //   axios('http://127.0.0.1:5000/getSample')    
  //   .then((result)=>{
  //     setStocks(result.data); 
  //     console.log(stocks)
  //   },
  //   (error) => {   
  //     setError(error);
  //       }
  //   )
  // },[])

  // const fetchStock = async()=>{
  //   try{
  //     setLoading(true);
  //     const res = await axios.get('http://127.0.0.1:5000/getSample');
  //     const result = res.data;

  //     if(result) setStocks(result);

  //   }catch(err){
  //     setError(err);

  //   }

  //   setLoading(false);
  // }
  // useEffect(()=>{
  //   console.log("Component Mounted")
  //   fetchStock()
  // }
  //   ,[]);

  // useEffect(()=>{
  //   async function getStocks(){
  //     const res =  await fetch('http://127.0.0.1:5000/getStocks',{'methods':'GET',headers:{'Content-Type':'applications/json'}});
  //     const json = await res.json();
  //      // console.log(json);
  //     setStocks(json);
    
  //     //console.log(stocks);
  //   }
  //   getStocks();
  // },[])

  return (
    <div className="App">
        {/* <FScore></FScore> */}
        <ChildComponent data={title} />
    </div>
  );
}

export default App;