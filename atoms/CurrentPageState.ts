import {atom} from "recoil"

export const currentPageState=atom({
    key:"currentPageState",
    default:"items"
})

export const currentSideBar=atom({
    key:"currentSideBar",
    default:"viewItems"
})

export const profileMode=atom({
    key:"profileMode",
    default:"view"
})