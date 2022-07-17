export interface Item{
    name:string
    date:string
    cookies:{name:string,qty:number}[]
    beverages:{name:string,qty:number}[]
}
export interface TopItem{
    name: string;
    percentage:number
}

export interface Review{
    id:number
    img:string
    name:string
    location:string;
    content:string;
    rating:number
}
