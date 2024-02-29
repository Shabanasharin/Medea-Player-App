import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/home')

  }

  return (
    
    <>
      <div className='container mt-5'>
        <div className="header row align-items-center m-5 ">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi, obcaecati eius atque facilis nesciunt iusto? Aliquid fugiat molestiae, voluptatibus et error officia facere explicabo quia facilis ipsam! Eos, nisi!</p>
            <div onClick={handleNavigate} className="btn btn-info mt-3">GEt Started</div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing img" />
  
          </div>
        </div>
        <div className="fueature">
          <h3 className='text-center'> Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
      <Card.Img className='img-fluid' style={{ height: '10rem' }} variant="top" src="https://media.giphy.com/media/3o6gDP9oLOGtBMMBSU/giphy.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
      <Card.Img className='img-fluid' variant="top" style={{  height: '10rem' }} src="http://s3.amazonaws.com/filepicker-images-rapgenius/tvThuMmoTtmRU9pgJLJl_animated-gif-music.gif" />
      <Card.Body>
        <Card.Title>Categorize Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{ width: '20rem' }}>
      <Card.Img className='img-fluid' style={{  height: '10rem' }}  variant="top" src="https://i.pinimg.com/originals/4c/1a/52/4c1a52e76ecb222ace05df67dff0796a.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>

          </div>
        </div>
        <div className="vidio row border p-5 mt-5 rounded mb-5 align-items-center">
        <div className="col-lg-5">
            <h3 className="text-warning">Simple Fast And Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span className="fs-4">Play Everything</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cumque doloribus sunt omnis aperiam accusantium quisquam nostrum praesentium atque beatae eos alias porro molestias doloremque, ratione, similique excepturi delectus impedit?</p>
            <p style={{ textAlign: 'justify' }}><span className="fs-4">Categorize Video</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cumque doloribus sunt omnis aperiam accusantium quisquam nostrum praesentium atque beatae eos alias porro molestias doloremque, ratione, similique excepturi delectus impedit?</p>
            <p style={{ textAlign: 'justify' }}><span className="fs-4">Watch History</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cumque doloribus sunt omnis aperiam accusantium quisquam nostrum praesentium atque beatae eos alias porro molestias doloremque, ratione, similique excepturi delectus impedit?</p>

          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="1236" height="695" src="https://www.youtube.com/embed/m9Rx47LYqlU" title="LEO - Teaser Trailer 2023 | Thalapathy Vijay | Trisha | Lokesh Kanagaraj | Anirudh | #thalapathy67" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LandingPage