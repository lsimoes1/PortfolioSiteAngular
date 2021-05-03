export interface Professional {
   
    _id : string;
    company: string;
    link:string;
    image:string;
    offices:offices[];
}

interface offices{
    office:string;
    dataIn:Date;
    dateOut:Date;
    description:string;
}