import { Order } from './classes/order';
import { ShoppingCart } from './classes/shoppingCart';
import { Persistency } from './classes/interfaces/persistency';
import { Messaging } from './services/messaging';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Caderno', price: 25.9 });
shoppingCart.addItem({ name: 'Lápis', price: 1.5 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
