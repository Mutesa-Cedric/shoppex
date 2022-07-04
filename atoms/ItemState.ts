import { atom } from "recoil";

export const ShowHistoryItem = atom({
    key: "ShowHistoryItem",
    default: false
})

export const HistoryItem = atom({
    key: "HistoryItem",
    default: {
        name: "",
        date: "",
        cookies: [],
        beverages: []
    }
})

// export const ItemToSave=atom({
//     key:"ItemToSave",
//     default:{
//         image:"",
//         name:"",
//         category:"",
//         note:"",
//     }
// })

//for testing purpose
export const ItemToSave = atom({
    key: "ItemToSave",
    default: {
        image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80",
        name: "Avocado",
        category: "Fruit and vegetables",
        note: "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. "
    }
})


export const listItems = atom({
    key: "listItems",
    default:[]
})