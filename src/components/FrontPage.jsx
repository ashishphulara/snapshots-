import React,{useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from "axios"
import img1 from "../assets/search.png";
import { useNavigate } from 'react-router-dom';
import "../css/frontpage.css"


const FrontPage = () => {
    const [search , setSearch] = useState("mountains");
    const [result , setResult] = useState([]);
    const navigate = useNavigate();


    // const api = "qSge6jj4qdqLZWKFYPPhnQK5WIBl-MOzHQkk9nY8nmY"
    


    const getImages =(() => {
        Axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=qSge6jj4qdqLZWKFYPPhnQK5WIBl-MOzHQkk9nY8nmY`)
            .then((res) => {
                console.log(res.data.results);
                setResult(res.data.results);
            })
    })
    useEffect(()=>{
      getImages();
    },[])
  return (
     <>
      <div className='container'>
        
        <div className="mainBox">
        <input type={"text"} placeholder=" Search..." className="form-control" value={search} onChange={(e)=>{
           setSearch(e.target.value)
      }}/>
        <Link to={"/"} onClick={getImages} className="images"><button className='btn btn-secondary'><img src={img1} alt="search" /></button></Link>
       
     
        <div className='tags' >
        <Link to={"/Mountain"}  ><button className="btn btn-secondary">Mountain</button></Link>
        <Link to={"/Beaches"}  ><button className="btn btn-secondary" >Beaches</button></Link>
        <Link to={"/Birds"}  ><button className="btn btn-secondary">Birds</button></Link>
        <Link to={"/Food"}  ><button className="btn btn-secondary">Food</button></Link>
        </div>
        </div>

     </div>
     
     <div className="container">
                <div className="row text-center text-lg-start" id='cards' >
                  {result.map((value)=>{
                   return(
                    <div className="col-lg-3 col-md-4 col-6"style={{marginBottom:"10px"}}>
                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt=''  id='images'/>
            </div>
                   )
                  })}
                </div>

            </div>
     </>
    
    
    
  )
}

export default FrontPage
