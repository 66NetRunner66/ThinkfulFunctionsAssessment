// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount (books) {
  return books.length;
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
  result.sort ((a, b) => a < b);
  if (result.length > 5) {
    result.shift ();
  }
  console.log (genres);
  console.log (result);
  return result;
}

function getMostPopularBooks (books) {
  let returns = [];
  for (let i = 0; i < books.length; i++) {
    returns.push ({name: books[i].title, count: books[i].borrows.length});
  }
  returns.sort (
    (a, b) => (a.count > b.count ? -1 : 1 && console.log (a.count, b.count))// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount (books) {
 let accumulator= 0;
let result = books.reduce((acc, book)=>acc+1,accumulator);
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
  result.sort ((a, b) => a < b);
  if (result.length > 5) {
    result.shift ();
  }
  console.log (genres);
  console.log (result);
  return result;
}

function getMostPopularBooks (books) {
  let returns = [];
  for (let i = 0; i < books.length; i++) {
    returns.push ({name: books[i].title, count: books[i].borrows.length});
  }
  returns.sort (
    (a, b) => (a.count > b.count ? -1 : 1 && console.log (a.count, b.count))
  );
  console.log (returns);
  for (let i = 0; i < returns.length; i++) {
    if (returns.length > 5) {
      returns.pop ();
    }
  }
  console.log (returns);
  return returns;
}

function getMostPopularAuthors (books, authors) {
  let authorids = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (books[i].authorId === authors[j].id) {
        let firstandlast = authors[j].name.first+" "+authors[j].name.last;
      //  firstandlast.join (' ');
        authorids.push ({name: firstandlast, count: books[i].borrows.length});
      }
    }
    authorids.sort ((a, b) => (a.count > b.count ? -1 : 1));
    for (let i = 0; i < authorids.length; i++) {
      if (authorids.length > 5) {
        authorids.pop ();
      }
    }
  }
  console.log (authorids); return authorids;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

  );
  console.log (returns);
  for (let i = 0; i < returns.length; i++) {
    if (returns.length > 5) {
      returns.pop ();
    }
  }
  console.log (returns);
  return returns;
}

function getMostPopularAuthors (books, authors) {
  let authorids = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < authors.length; j++) {
      if (books[i].authorId === authors[j].id) {
        let firstandlast = authors[j].name.first+" "+authors[j].name.last;
      //  firstandlast.join (' ');
        authorids.push ({name: firstandlast, count: books[i].borrows.length});
      }
    }
    authorids.sort ((a, b) => (a.count > b.count ? -1 : 1));
    for (let i = 0; i < authorids.length; i++) {
      if (authorids.length > 5) {
        authorids.pop ();
      }
    }
  }
  console.log (authorids); return authorids;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
