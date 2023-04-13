export interface ListInt {
  id:string;
  title:string;
  introduce:string;
  userId:number
}
interface selectDataInt{
  title:string;
  introduce:string;
  page:number;
  count:number;
  pagesize:number;
}
export class InitData {
  selectData:selectDataInt={
    title:'',
    introduce:'',
    page:1,
    count:0,
    pagesize:10
  }
  goods:ListInt[]=[]
}