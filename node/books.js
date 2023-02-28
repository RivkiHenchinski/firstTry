 class book{
    bookId=0;
    Name="";
    type="";
    m=false;
    constructor(bookId,Name,type,m){
        this.bookId=bookId;
        this.Name=Name;
        this.type=type;
        this.m=m;
    }
}


 const  arrbook=[new book(111,"aaa","AAA",false),new book(222,"bbb","BBB",true)];

function print(){
    for (var item in arrbook){
        console.log(item.name)
    }
}
function m(index){
    if(arrbook.length<index)
        throw new Error("argument is not a func!!!");
    else 
        return arrbook[index];
}
module.exports={print,m};