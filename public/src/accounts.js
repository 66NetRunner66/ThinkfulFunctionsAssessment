// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account)=>account.id===id);
}

function sortAccountsByLastName(accounts) {
return accounts.sort((a,b)=>a.name.last.toLowerCase()>b.name.last.toLowerCase()? 1:-1);
}
function getTotalNumberOfBorrows(account, books) {
let filtered = books.filter((book)=>book.borrows.find((borrow)=>borrow.id === account.id));
console.log(filtered);
return filtered.length;
}
function getBooksPossessedByAccount(account, books, authors) {
  
  let filteredbooks = books.filter((book)=>book.borrows.find((borrow)=>borrow.id === account.id&&!borrow.returned));
    for(let i =0;i<filteredbooks.length;i++){
    for(let j=0;j<authors.length;j++){
    if(filteredbooks[i].authorId===authors[j].id){
       filteredbooks[i].author = authors[j];
    }
    }
  }
  return filteredbooks;
}
//console.log(getBooksPossessedByAccount(account,books,authors));

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
