export class DishDetail{
    id: string | undefined;
    name: string | undefined;
    image: string |undefined;
    category: string |undefined;
    featured: boolean| undefined;
    label: string|undefined;
    price: string|undefined;
    // tslint:disable-next-line:max-line-length
    description: string|undefined;
    comments :  Array<{ rating: number| undefined, comment: string|undefined , author: string|undefined,date: string|undefined}> | undefined = []
         
     
} 