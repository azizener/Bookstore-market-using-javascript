const prompt = require("prompt-sync")()
console.log("Welcome to our bookstore!")
 //intilze array first
bookStore = [["ID", "book name", "author", "price", "quantity"]
,[1, "start with why", "simon sinek", 80, 13],
[2, "but how do it know", "j. clark scott", 59.9, 22],
[3, "clean code", "robert cecil martin", 50, 5], 
[4, "zero to one", "peter thiel", 45, 12],
[5, "you dont know JS", "kyle simpson", 39.9, 9]]

let repeat = 0;
do{
console.log("1- for manipulation of a book\n2- for querying a book\n3- purchasing a book")
var x = parseInt(prompt("type number:"))
switch (x){
    case 1:
    console.log("Now you are about to add new book!\n")
    bookStore.push([parseInt(prompt("Book id:")), prompt("Book title:"),prompt("author:"),parseInt(prompt("price:")), parseInt(prompt("quantity:"))])
    console.log(bookStore)
    console.log("adding book has been succefully done")
    break;
    case 2:
    console.log("Now your about to query a book")
    console.log("1-query by book id\n2-query by title\n3-query by author")
    let x1= parseInt(prompt("type number:"))
    let flag = false;
    switch (x1){
        case 1:
          let z = parseInt(prompt("book id:"))
            for(let i=0; i<bookStore.length; i++){
                for(let j=0; j<bookStore.length;j++){
                    if(bookStore[i][j]==z){
                        flag=true;
                        break;
                    }
                }
            }
            break;
        case 2:
            let f = parseInt(prompt("title:"))
            for(let i=0; i<bookStore.length; i++){
                for(let j=0; j<bookSore.length;j++){
                    if(bookStore[i][j]==f){
                        flag= true;
                        break;
                    }
                }
            }
            break;
        case 3:
            let n = parseInt(prompt("Author:"))
            for(let i=0; i<bookStore.length; i++){
                for(let j=0; j<bookSore.length;j++){
                    if(bookStore[i][j]==n){
                        flag=true;
                        break;
                    }
                }
            }
            break;
    }

    if(flag==true){
        console.log("Found!!")
    }else{
        console.log("Dosent exist!")
    }
    break;
    case 3:
    bookname = prompt("book name: ")
    quantity =  parseInt(prompt("quantity: "))
    balance  = parseInt(prompt("balance: "))
   let index =-1;
   for (let i=0; i<bookStore.length; i++){
    for(let j=0; j<bookStore.length;j++){
        if(bookname == bookStore[i][j]){
            index = i;
            break;
        }
    }
    if(index!=-1){
        break;
    }
   }

    if(index!=-1){
        if(quantity<=bookStore[index][4]){
            if(balance>=bookStore[index][3]){
                console.log("Purchase has been done!")
                balance-= (quantity*bookStore[index][3])
                bookStore[index][4]-=quantity
                console.log(bookStore)
                console.log("your current balance: "+ balance)
                console.log("you pruchased: " + quantity + "books")
            }else{
                console.log("your balance is not enough")
            }
        }else{
            console.log("we cant provide this much quantity")
        }
    }else{
        console.log("book name is wrong or not exist!")
    }
    default:
        "u typed unexpected number, program will be termintaed"
        break;
}
repeat = parseInt(prompt("press 1 to exit\nany key to go back menu continue"))
}while(repeat!=1)