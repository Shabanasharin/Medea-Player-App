import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'
import { useState } from 'react'

function Home() {
  const [removeCtegoryVideoResponse,setremoveCtegoryVideoResponse] = useState("")
  const [uploadVideoResponse,setUploadVideoResponse] =useState("")
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoResponse={setUploadVideoResponse}/>
      <Link to={'/Watch'}>View History</Link>
    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadVideoResponse={uploadVideoResponse} setremoveCtegoryVideoResponse ={ setremoveCtegoryVideoResponse }/>
      </div>
      <div className="col-lg-6">
        <Category removeCtegoryVideoResponse = {removeCtegoryVideoResponse}/>
      </div>
    </div>
    </>
  )
}

export default Home