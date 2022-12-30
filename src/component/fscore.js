import React,{useState,useEffect} from "react";
import axios from 'axios';
function FScore()  {
  const [isLoaded, setLoading]= useState(false);
  const [stocks, setStocks]= useState([]);
  const [error, setError] = useState(null);

  const fetchStock = async()=>{
    try{
      setLoading(true);
      console.log("service call b Mounted")
      const res = await axios('http://127.0.0.1:5000/getSample');
      const result = res.data;
      console.log("service call a Mounted")
      if(result) {
        setStocks(result);
        console.log(stocks)
      }

    }catch(err){
      setError(err);

    }

    setLoading(false);
  }
  useEffect(()=>{
    console.log("Component Mounted")
    fetchStock()
  },[]);

  
  
    {
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {stocks.map(item => (
              <li>
                {item}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default FScore