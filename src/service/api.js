import axios from 'axios';

// common api through axios 

import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from '../constants/config'; //api messages

import { getAccessToken } from '../utils/common-utils';

const API_URL = 'http://localhost:8000;' // backend url

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, // api delay we set time out in mili second;
    headers:{// optional
        
        "Accept": "application/json, form-data",
        // "Content-Type": "application/json"
    }
})

// in case of request
axiosInstance.interceptors.request.use( // use function takes 2 call back function 1. successfull case 2. unsuccessfull case
       function(config){ // first call back on fullfilled
        if(config.TYPE.params){
            config.params = config.TYPE.params
        } else if(config.TYPE.query){
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
       },
       function(error){ // second call back in case of reject
        return Promise.reject(error);
       }
)
// in case of response
axiosInstance.interceptors.response.use(
    function(response){ // loading fucntion i:e the loader we see
        // during an api call we see a loader 
        // stop global loader here 
        return processResponse(response);
    },
    function(error){
        // stop global loader here also in case of error also
        return Promise.reject(processError(error));
    }
    // since we dont have any loader so we are skiping stop loader step but we can add these steps in the given place
)
// if sucess return {is success: true , data : object};
// if fail -> return {is failed: true , status: string, msg: string , code:int}

const processResponse = (response) =>{
    if(response?.status === 200 ){
        return {isSuccess: true , data: response.data}
    }
    else{
        return{
        isFailure: true,
        status: response?.status,
        msg: response?.msg,
        code: response?.code
        }
    }
}

const processError = (error) =>{
    if(error.response) { // request succesfull but server respond other than 200(not successfull)
        console.log("error in 1",error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    }
    else if(error.request){// request successfull butno respond caused due to improper linking of backend with frontend
        console.log("error in 2",error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: "" 
        }
     } 
     else { // something happend in setting up frontend mistake
        console.log("error in 3",error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
     }
}

const API ={}; // API CALL FUNCTION

// for(const [key,value] of Object.entries(SERVICE_URLS)){// picks every object with key value pair
//     API[key]= (body,showUploadProgress ,showDownloadProgress) =>// post api progress bar 
//         axiosInstance({
//             method: value.method,
//             url: value.url,
//             data: value.method === 'DELETE' ? {} : body,
//             responseType: value.responseType,
//             headers: {// verifying user for writing content in the post
//                 authorization: getAccessToken()
//             },
//             TYPE: getType(value, body),
//             onUploadProgress: function(progressEvent){
//             if (showUploadProgress){
//                 let percentageCompleted = Math.round((progressEvent.loaded*100) / progressEvent.total)
//                 showUploadProgress(percentageCompleted);
//                }
//             },
//             onDownloadProgress: function(progressEvent){
//                 if(showUploadProgress){
//                     let percentageCompleted = Math.round((progressEvent.loaded *100) / progressEvent.total)
//                     showDownloadProgress(percentageCompleted);
//                 }
//             }
//         })
//     }
export {API};