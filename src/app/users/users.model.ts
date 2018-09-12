export interface order{
    productName: string,
    itemCost: number
};

export interface users{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    address: string;
    city: string;
    profilePicUrl: string;
    state:{
      abbreviation: string,
      name: string
   };
   latitude: number;
   longitude: number;
  }