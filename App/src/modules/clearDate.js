function clearDate(date){
    if(!date){
        return null
    }
    const dateArray = date.split('T', 1)
    const clearDate = dateArray.join('-')
    return clearDate
}

export default clearDate;