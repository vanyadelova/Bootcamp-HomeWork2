module.exports = class ShoppingCart {
  constructor(cart, items) {
    this.cart = []
    this.items = []
  }
}

const cart = class {
  constructor(items) {
    this.items = items;

  }
}

class ShoppingCart {
  constructor() {
    this.items = []
  }

  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    })
  }

  getItems() {
    return this.items
  }
}

clear(); {
  this.items = []
  return this.items
}

total(); {
  return this.items
    .map(item => item.pricePerUnit * item.quantity)
    .reduce((acc, item) => acc + item, 0)
}


module.exports = ShoppingCart;