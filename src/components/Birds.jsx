import React,{useEffect ,useState} from 'react'
import  Axios  from 'axios'
import "../css/birds.css"


const Birds = () => {

  const [birds , setBirds] = useState([]);

  let getbeaches =(() => {
    Axios.get("https://api.unsplash.com/search/photos?page=1&query=birds &client_id=qSge6jj4qdqLZWKFYPPhnQK5WIBl-MOzHQkk9nY8nmY")
        .then((res) => {
            
            setBirds(res.data.results);
        })
})
useEffect(() => {
  getbeaches()
}, [])


  return (
    <div className='bird'>
        <h1>
        BIRDS
        </h1>
     
    

    <div className="container">
                <div className="row text-center text-lg-start" id='birdcards'>
                  {birds.map((value)=>{
                   return(
                    <div className="col-lg-3 col-md-4 col-6"style={{marginBottom:"10px"}}>
                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt=''  id='birdimages'/>
            </div>
                   )
                  })}
                </div>

            </div>
    </div>
  )
      }

export default Birds