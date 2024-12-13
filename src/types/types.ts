
export interface Product  {
    id: number;
    vendorСode?: string;
    inStock: number|string;
    title:string;
    description:string;
    stars:number;
    imgUrl: string;
    sizes:number[];
    price:number|string;
    oldPrice:number|string;
    gender:string;
    color:string;
    compound:string;
    country:string;
  };
  export default Product;