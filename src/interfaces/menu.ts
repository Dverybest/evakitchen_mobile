
export interface ICategory {
    name: string;
    image: string;
    _id?:string
  }
export interface IFood {
  _id:string,
  name: string;
  description?: string;
  discount: number;
  price: string;
  rating?: number;
  category?: string;
  image: string;
}
export interface IFoodListView {
    item:IFood,
    index:number
}
export interface ICategoryListView extends ICategory {
    onPress?: () => void;
  }