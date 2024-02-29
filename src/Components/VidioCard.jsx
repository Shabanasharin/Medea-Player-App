import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';

function VidioCard({displayData,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //geet video Details
    const {caption,youtubeLink} = displayData
    let timeData = new Date()
    // console.log(new Intl.DateTimeFormat('en-Us',{year:'numeric',month:'2-digit',day:'2-digit',minute:'2-digit',second:'2-digit'}).format(timeData));
    let timeStamp =new Intl.DateTimeFormat('en-Us',{year:'numeric',month:'2-digit',day:'2-digit',minute:'2-digit',second:'2-digit'}).format(timeData)
    console.log(timeStamp);
   await saveHistoryAPI({caption,youtubeLink,timeStamp})
  }
  //removing video
  const deleteVideo = async (vId)=>{
    // 
    const result = await removeVideoAPI(vId)
    setDeleteVideoResponse(result.data)
  }
  //dragStarted
  const dragStarted = (e,vId)=>{
    console.log(`Dragging started with video id: ${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }
  return (
    <>
     <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow'>
      <Card.Img style={{cursor:'pointer',height:'200px',width:'100%'}} onClick={handleShow} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
      { !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>}
  
      </Card.Title>
       
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </Modal>
    </>
  )
}

export default VidioCard