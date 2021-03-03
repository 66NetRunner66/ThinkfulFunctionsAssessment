// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
return authors.find((author)=>author.id===id);
}
function findBookById(books, id) {
return books.find((book)=>book.id===id);
}

function partitionBooksByBorrowedStatus(books) {
let array = [[],[]];
array[1].push(books.filter((book)=>!book.borrows[0].returned));
array[0].push(books.filter((book)=>book.borrows[0].returned));
const array3 = [...array[1],...array[0]];
return array3;
}

function getBorrowersForBook(book, accounts) {
let acc = [];
for(let i=0;i<book.borrows.length;i++){
acc.push(book.borrows[i]);
}
if(acc.length>10){
  acc.length = 10;
}
const list = acc.map((borrow) => {
  const borrower = accounts.find((account) => account.id === borrow.id);
  borrower["returned"] = borrow.returned;
  return borrower;
});
return list;
}
//this code below works as well but the test requires
//use of the map method as above
//so below we did it with for loops
/*for(let j=0;j<acc.length;j++){
  for(let i=0;i<accounts.length;i++){
  if(acc[j].id === accounts[i].id){
   acc[j].name = accounts[i].name;
   acc[j].picture= accounts[i].picture;
   acc[j].age = accounts[i].age;
   acc[j].company = accounts[i].compny;
   acc[j].email = accounts[i].email;
   acc[j].registered = accounts[i].registered;
  }
  }
}return acc;
}*/


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
