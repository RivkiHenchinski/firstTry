class user{
    id=0;
    userName="";
    typeBook="";
    m=false;
    constructor(id,userName,typeBook,m){
        this.id=id;
        this.userName=userName;
        this.typeBook=typeBook;
        this.m=m;
    }
}
   const  arrusers=[new user(111,"aaa","AAA",false),new user(222,"bbb","BBB",true)];
   function print(){
    for (var item in arruser){
        console.log(item.name)
    }
}
function m(index){
    if(arrusers.length<index)
        throw new Error("argument is not a func!!!");
    else 
        return arrusers[index];
}
module.exports={print,m};