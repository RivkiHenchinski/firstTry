//1
// const slice = require('./slicer');

// const str2 = process.argv[2];
// const str3 = process.argv[3];
// if (str2 == "lines") {
//     slice.lines(str3);
// }
// else {
//     if (str2 == "stars") {
//         slice.stars(str3);
//     }
//     else {
//         if (str2 == "dotes") {
//             slice.dotes(str3);
//         }
//         else {
//             throw new Error("argument is not a func!!!");
//         }

//     }
// }
//2
const book = require('./books');
const use = require('./user');

const b1=book.m(process.argv[2]);
const u1=use.m(process.argv[3]);
console.log(b1+"book");
console.log(u1+"user");
book.print();
if(b1.type!=u1.typeBook){
    console.log("not match type")}
    else{
        if(b1.m)
            {
console.log("the book not exist")
        }
else{
    if(u1.m){
       console.log("the user have book already") 
    }
    else{
        console.log("the user can take the book") ;
        u1.m=true;
        b1.m=true;
    }
}
    }

