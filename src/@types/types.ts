export interface Item {
    id: number;
    name: string;
    note: string;
    image: string;
    category_id: number;
}

export interface Category {
    id: number;
    name: string;
    user_id: string;
}


export interface ShoppingList {
    id: number;
    created_at: Date;
    items: Item[];
}
