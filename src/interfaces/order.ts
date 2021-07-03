export interface IOrder {
  _id: string;
  shippingFee: string;
  status: string;
  quantity: number;
  discount: number;
  orderItems: Array<{_id: string; menu:{_id:string,image:string,name:string,price:number}; quantity: number}>;
  orderId: string;
  user: string;
  subTotal: string;
  total: 22900;
  createdAt: string;
  updatedAt: string;
  address: string;
  deliveryType: string;
  deliveryDate: string;
}
