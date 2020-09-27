export interface IHtmlJson{
    tag:string;
    value:string ;
    type:string; //can string,number etc.
    children?:IHtmlJson[],
    css:string;
}