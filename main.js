// write your code here to make the tests pass
var Library = function(){
  var collection = []
  var addBook = function(book){
    collection.push(book)
  }
  var checkOutBook = function(book){
    if (collection.includes(book)) {
      /* collection contains the element we're looking for */
      book.setAttribute("checkedOut", true)
    }
    else{
      console.log('This book is not in the library collection; therefore it cannot be checked out')
    }
  }

  var returnBook = function(book){
    if (collection.includes(book) && book.getAttribute('checkedOut')) {
      /* collection contains the element we're looking for */
      book.setAttribute("checkedOut", false)
    }
    else{
      console.log('This book is not in the library collection; therefore it cannot be checked out')
    }
  }
  return {
    addBook,
    checkOutBook,
    returnBook
  }
}

var Book = function(title, author) {
  var attributes = {
    checkedOut: false,
    title: title,
    author: author
  }
  var getAttribute = function(attribute){
    if(attributes.hasOwnProperty(attribute)){
      return attributes[attribute]
    }
  }

  var setAttribute = function(attribute, newValue){
    if(attributes.hasOwnProperty(attribute)){
      attributes[attribute] = newValue
    }
  }
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}