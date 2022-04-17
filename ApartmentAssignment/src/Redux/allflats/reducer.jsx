import {GET_FLATS} from "./action"
const initstate = {flats:[]}

export const flat_reducer = (store=initstate,{type,payload})=>{
    switch (type){
        case GET_FLATS: {
            return {...store,flats:payload}
        }
        default:{
            return store
        } 
    }
}