import React, { Component } from 'react';


class Book extends Component {
   
    render() {
        let style = {
            display: "inline-block",
            margin: "10px",
            padding: "5px",
            border: "1px orange solid",
        }
        let delBtn = {
            border: "1px red solid",
            color: "red",
            marginLeft: "4px"
            
        }
        return (
            <div style={style}>
                <div>
                    name: {this.props.book.name}
                </div>
                <div>
                    auther:{this.props.book.auther}
                </div>
                <div>

                   cost: {this.props.book.cost} ILS
                </div>
                <div>
                    year :  {this.props.book.year}
                </div>
                <hr/>
                {this.props.deleteBook !== undefined?
                <div>
                    delete ->  
              
                    <span onClick={  ()=>this.props.deleteBook()} bookid={this.props.book.bookId} style={delBtn}>X</span>
                   
                </div>
                :null}
            </div>

        )
    }
}

class LibraryDelete extends Component {

    books;
    constructor(props){
        super(props);
        this.books = [
            { bookId:"1243" ,name:"after party",auther: "ran kaplan", cost: 50, year: 1984 },
            { bookId:"1111" ,name:"the last way",auther: "beni sydof", cost: 60, year: 1999 },
            { bookId:"4533" ,name:"never say never",auther: "avi amir", cost: 70, year: 1987 },
            { bookId:"7843" ,name:"idk ok?",auther: "dan renren", cost: 100, year: 2002 },
        ];

       

        this.state={booksComponentsArray : this.getBook(this.books) ,deletedBooks:[]};

        this.deleteBook = this.deleteBook.bind(this);
    }

    getBook(books) {

        let componentsArr = []
        let counter = 0;
        //forEach was a better choice here

        for (let book of books) {
            componentsArr.push(<Book key={counter} book={book} deleteBook={()=>this.deleteBook(book)} />)
            counter++;
        }

        return componentsArr;
    }

    deleteBook(book){
        console.log(this)     ;
        console.log(book)     ;
       
     
        this.books.forEach( (obj ,index) => {
            if (obj.bookId === book.bookId){
                 this.books.splice(index ,1 );
                 //update the array of components
                 let deletedBooks = this.state.deletedBooks.slice();
                 deletedBooks.push(<Book key={deletedBooks.length} book={book}  />)
                 this.setState({ 
                     booksComponentsArray:this.getBook(this.books) ,
                    deletedBooks:deletedBooks}) 
            }
        });
        //same and better
       // this.books = this.books.filter(obj=> obj.bookId !== bookId)


    }

    //add addBook -- what we need to change ?
    //add deleteBook  -- how to bind event ?

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        return (
            <div>

                <div>

                    {this.state.booksComponentsArray}

                </div>

                <hr/>
                {this.state.deletedBooks}
            </div>


        )
    }


}

export default LibraryDelete;