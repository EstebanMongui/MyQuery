import { data } from "../components/QueryCard/QueryCard";

export const ds = new Map()
const technicals = []
const echonomicals = []
const legals = []
const administratives = []

function groupCategories(){
    data.map(query => {
        if (query.category === "TEC"){
            technicals.push(query.id)
        }
        if (query.category === "ECH"){
            echonomicals.push(query.id)
        }
        if (query.category === "ECH"){
            legals.push(query.id)
        }
        else if (query.category === "ADM"){
            administratives.push(query.id)
        }
        return 'OK'
    })
}

export function queriesAccount(){
    groupCategories()
    const allData = data.length
    ds.set('technicals', technicals.length)
    ds.set('echonomicals', echonomicals.length)
    ds.set('legals', legals.length)
    ds.set('administratives', administratives.length)
}