import React,{useEffect ,useState} from 'react'
import  Axios  from 'axios';
import "../css/mountain.css"


const Beaches = () => {

  const [mountains , setMountains] = useState([]);

  let getbeaches =(() => {
    Axios.get("https://api.unsplash.com/search/photos?page=1&query=mountains &client_id=qSge6jj4qdqLZWKFYPPhnQK5WIBl-MOzHQkk9nY8nmY")
        .then((res) => {
       
            setMountains(res.data.results);
        })
})
useEffect(() => {
  getbeaches()
}, [])


  return (
    <div className='mountain'>
        <h1>
        Mountains
        </h1>
     
    

    <div className="container">
                <div className="row text-center text-lg-start" id='mountaincards'>
                  {mountains.map((value)=>{
                   return(
                    <div className="col-lg-3 col-md-4 col-6"style={{marginBottom:"10px"}}>
                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' id='mountainimages' />
            </div>
                   )
                  })}
                </div>

            </div>
    </div>
  )
      }

export default Beaches