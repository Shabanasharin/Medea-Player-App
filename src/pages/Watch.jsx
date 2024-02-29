import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHIstoryAPI, removeHistoryAPI } from '../services/allAPI'

function Watch() {
  const [history,setHistory] = useState([])
  const getAllHIstory=async()=>{
    const result = await getHIstoryAPI()
    if(result.status>=200 && result.status<300){
      setHistory(result.data)
    }
  }
  useEffect(()=>{
    getAllHIstory()
  },[])
  const deleteHistory= async (vId)=>{
    //api call
    await removeHistoryAPI(vId)
    getAllHIstory()
  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link  to={'/home'}><i className='fa-solid fa-home'></i>Back To </Link>
      </div>
      <table className='table mt-5 mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
          </tr>
        </thead>
        <tbody>
          { history?.length>0? history?.map((video,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{video?.caption}</td>
            <td>  <a href={video?.youtubeLink} target='_blank'>{video?.youtubeLink}</a></td>
            <td>{video?.timeStamp}</td>
            <td><button onClick={()=>deleteHistory(video.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
          )) 
          // <tr>
          //   <td>1</td>
          //   <td>REact Ja</td>
          //   <td>  <a href="https://www.youtube.com/watch?v=dQAIFCQ-yhE" target='_blank'>https://www.youtube.com/watch?v=dQAIFCQ-yhE</a></td>
          //   <td>02/19/2024, 12:07:08 PM</td>
          //   <td><i className='fa-solid fa-trash text-danger'></i></td>
          // </tr>
          :
          <tr>Your Watch History is empty!!!</tr>
        }
        </tbody>
      </table>
    </div>
  )
}

export default Watch