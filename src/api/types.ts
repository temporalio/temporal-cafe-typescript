export interface MenuItem {
	Type:  string
	Name:  string
	Price: number
}

export interface Menu {
	Items: Array<MenuItem>
}

export interface OrderItem {
	Type:  string
	Name:  string
	Price: number
	Count: number
}

export interface Order {
	Name:  string
	Email: string

	Items: Array<OrderItem>
}

export interface BaristaOrderItem {
	Name:   string
	Status: string
}

export interface BaristaOrder {
	ID:   string
	Name: string
	Open: boolean

	Items: Array<BaristaOrderItem>
}

export interface KitchenOrderItem {
	Name:   string
	Status: string
}

export interface KitchenOrder {
	ID:   string
	Name: string
	Open: boolean

	Items: Array<KitchenOrderItem>
}
