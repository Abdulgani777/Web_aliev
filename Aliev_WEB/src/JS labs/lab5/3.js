class InventoryManager {
    constructor() {
        this.stock = new Map();
    }

    addItems(items) {
        for (let i = 0; i < items.length; i += 2) {
            const item = items[i];
            const quantity = parseInt(items[i + 1], 10);
            this.stock.set(item, (this.stock.get(item) || 0) + quantity);
        }
    }

    displayInventory() {
        this.stock.forEach((quantity, item) => {
            console.log(`${item} -> ${quantity}`);
        });
    }
}

const firstDelivery = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
const secondDelivery = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];

const warehouse = new InventoryManager();
warehouse.addItems(firstDelivery);
warehouse.addItems(secondDelivery);
warehouse.displayInventory();