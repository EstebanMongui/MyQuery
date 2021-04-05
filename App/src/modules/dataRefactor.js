function refactCaregory(category){
    if (category === 'TEC'){
        return 'Tecnológica'
    }else if(category === 'ECH'){
        return 'Económica'
    }else if(category === 'LEG'){
        return 'Legal'
    }
    return 'Administrativa'
}

export default refactCaregory;