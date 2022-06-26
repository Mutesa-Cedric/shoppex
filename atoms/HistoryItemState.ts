import { atom } from "recoil";

export const ShowHistoryItem=atom({
    key:"ShowHistoryItem",
    default:false
})

export const HistoryItem=atom({
    key:"HistoryItem",
    default:{
        name:"",
        date:"",
        cookies:[],
        beverages:[]
    }
})