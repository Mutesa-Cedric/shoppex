interface BaseObject {
    id: number;
    created_at: Date;
    name: string;
    user_id: number;
}

export interface Item extends BaseObject {
    note?: string;
    category_id: number;
    image?: string;
}

export interface Category {
    item: Item[]
}

export interface ShoppingList extends BaseObject {
    items: string[];
}