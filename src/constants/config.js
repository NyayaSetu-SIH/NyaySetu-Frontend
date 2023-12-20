

// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title: 'Loading..',
        message: 'Data is being loader, Intejar kar'
    },
    success: {
        title: 'Maza aagya',
        message: 'Data aagya hai aram se'
    },
    responseFailure: {
        title: 'Error galti hogyi',
        message: 'Kuch error aagya tha ruko zara sabhar karo phir se try maario',
    },
    requestFailure: {
        title: "Error galti hogyi",
        message: 'kuch error aagya ruko zara backend se prblm hai'
    },
    networkError: {
        title: 'Error galti hogyi',
        message: 'Network dekh apna'
    }
}

// API SERVICE CALL
// SAMPLE REQ
// NEED SERVICE CALL: {URL: '/' , METHOD : 'POST/GET/PUT/DELETE' PARAMS: TRUE/FALSE, QUEERY TRUE /FASLE}
export const SERVICE_URLS = {
    userSignup: {url:'/signup' , method: 'POST'},

    userLogin: {url: '/login',method: 'POST'},
    
}