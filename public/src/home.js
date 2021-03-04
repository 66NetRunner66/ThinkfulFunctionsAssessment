// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount (books) {
  let accumulator = 0;
  let result = books.reduce ((acc, book) => acc + 1, accumulator);
  return result;
}

function getTotalAccountsCount (accounts) {
  return accounts.length;
}

function getBooksBorrowedCount (books) {
  return books.filter (book => !book.borrows[0].returned).length;
}
function getMostCommonGenres (books) {
  let genres = {};
  for (let i = 0; i < books.length; i++) {
    if (genres[books[i].genre]) {
      genres[books[i].genre] += 1;
    } else {
      genres[books[i].genre] = 1;
    }
  }

  let keys = Object.keys (genres);
  let result = [];
  keys.forEach (key => {
    let vari = {name: key, count: genres[key]};
    result.push (vari);
  });
  return sort5 (result);
}

function getMostPopularBooks (books) {
  let returns = [];
  for (let i = 0; i < books.length; i++) {
    returns.push ({name: books[i].title, count: books[i].borrows.length});
  }
  return sort5 (returns);
}

function getMostPopularAuthors (books, authors) {
  let authorids = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (books[i].authorId === authors[j].id) {
        let firstandlast = authors[j].name.first + ' ' + authors[j].name.last;

        authorids.push ({name: firstandlast, count: books[i].borrows.length});
      }
    }
  }
  return sort5 (authorids);
}

//added a helper function
function sort5 (items) {
  items.sort ((a, b) => (a.count < b.count ? 1 : -1));
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push (items[i]);
  }
  return array;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
