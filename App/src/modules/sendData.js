function sendData(endpoint, data={}){
    fetch(`http://127.0.0.1:8000/${endpoint}/`,{
        method:'POST',
        mode:'cors',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response)=>{
        return response
    })
}

export default sendData;