import { commonAPI } from "./CommonAPI";
import { SERVER_URL } from "./Server_url";
//upload video -store video in http://localhost:3000/Videos
export const uploadVideoAPI = async (video)=>{
    //send request to add component
   return await commonAPI("POST",`${SERVER_URL}/Videos`,video)
}
//get vidio api called by view
export const getAllVIdeosAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/Videos`,"")
}
//store Watch History by videocard to http://localhost:3000/history
export const saveHistoryAPI =async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
//get history to watch component  to http://localhost:3000/history
export const getHIstoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
//remove histoty to watch component
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
//remove video by videoCard
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/Videos/${videoId}`,{})
}
//save category
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/Categeries`,categoryDetails)
}
//get category to category component
export const getCategoryAPI =async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/Categeries`,"")
}
//remove category api
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/Categeries/${categoryId}`,{})
}
//get single video api
export const getVIdeoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/Videos/${videoId}`,"")
}
//update category api
export const updateCategoryAPI = async (categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/Categeries/${categoryId}`,updatedCategoryDetails)
}
//getsinglecategory api
export const getsinglecategoryAPI = async (categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/Categeries/${categoryId}`,"")
}
