export interface IBurger {
  _id: string;
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string
  price: number;
  proteins: number;
  type: string;
}

export interface IBurgerResponse {
  success: boolean;
  data: IBurger[];
}