import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo] =useState({
    caption:"",imageURL:"",youtubeLink:""
  })
    const [show, setShow] = useState(false);

const handleClose = () => {
  setShow(false);
  setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
}
    const handleShow = () => setShow(true);
    console.log(uploadVideo);
    
    // https://www.youtube.com/embed/-mJFZp84TIY?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt
    // https://www.youtube.com/watch?v=tiLWCNFzThE&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ
    const getYoutubeEmbedLink =(link)=>{
      if(link.includes("v=")){
        let videoId =link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert("input Proper link!!!")
      }
    }
    const handleupload = async()=>{
      const {caption,imageURL,youtubeLink} = uploadVideo
      if(caption && imageURL && youtubeLink){
        //proceed to store video
        // alert("proceed to store video")
        const result = await uploadVideoAPI(uploadVideo)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert(`Video ${result.data.caption} uploaded succesfully!!!` )
          setUploadVideoResponse(result.data)
          handleClose()
        }else{
          alert("API Call Failed...please try after some time!!!")
        }
      }else{
        alert("please fill the form compleetly")
      }
    }

  return (
    <>
    <div className="d-flex">
        <h5>Upload A Video</h5>
        <button onClick={handleShow} className='btn bg-secondary ms-2'><i className="fa-solid fa-plus"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill THe Form!!!</p>
      <div className='border rounded border-secondery p-3 '>
            <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Image Url"
            className="mb-3"
          >
            <Form.Control  value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Youtub Video Link"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtub Video Link" />
          </FloatingLabel>
          
      </div>
      
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleupload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add