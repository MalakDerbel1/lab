import { Evt } from "./evt";

export interface Member{
    
    id:string,
    cin:string,
    name:string,
    cv:string,
    type:string,
    createdDate:string,
    TabEvt:Evt[]

}