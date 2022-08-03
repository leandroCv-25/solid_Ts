import { orderStatus } from './interfaces/order_status';
import { Persistency } from './interfaces/persistency';
import { Messaging } from '../services/messaging';
import { ShoppingCart } from './shoppingCart';

export class Order {
  private _orderStatus: orderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): Readonly<orderStatus> {
    return this._orderStatus;
  }

  ///
  checkout(): void {
    if (this.cart.isEmptly()) {
      console.log('Seu carrinho está vázio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.total()} foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
