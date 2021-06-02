
export interface ICategory {
    name: string;
    image: string;
    _id?:string
  }
export interface IFood {
  name: string;
  description?: string;
  discount?: 0;
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