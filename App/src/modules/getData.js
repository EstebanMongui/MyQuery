export let data = ''

export function getData(endpoint, id){
    const response = fetch(`http://127.0.0.1:8000/${endpoint}/${id}/`,{  
        method:'GET',
        mode:'cors',
        headers:{
            'content-type':'application/json'
        }
    })
    .then((response)=>{
        return response.json()
    })
    .then((answer)=>{
        answer.map(a=>{
            return data = a.value
        })
    })
    return response
}