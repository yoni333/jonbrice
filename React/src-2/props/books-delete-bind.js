import React, { Component } from 'react';


class Book extends Component {
    constructor(props){
        super(props)
    }

    deleteBook = (e)=>{
        console.log(this)
        console.log(e)
        console.log(e.target)
        console.log(e.target.bookid)
        this.props.deleteBook(e.target.bookid);

    }
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
                <div>
                    delete ->  
                    <span onClick={this.deleteBook} bookid={this.props.book.bookId} style={delBtn}>X</span>

                </div>
            </div>

        )
    }
}

class LibraryDelete extends Component {

    books;
    booksComponentsArray;
    constructor(props){
        super(props);
        this.books = [
            { bookId:"1243" ,name:"after party",auther: "ran kaplan", cost: 50, year: 1984 },
            { bookId:"1111" ,name:"the last way",auther: "beni sydof", cost: 60, year: 1999 },
            { bookId:"4533" ,name:"never say never",auther: "avi amir", cost: 70, year: 1987 },
            { bookId:"7843" ,name:"idk ok?",auther: "dan renren", cost: 100, year: 2002 },
        ];

        this.state={booksComponentsArray = this.getBook(this.books)};

        this.deleteBook = this.deleteBook.bind(this);
    }

    getBook(books) {

        let componentsArr = []
        let counter = 0;
        //forEach was a better choice here

        for (let book of books) {
            componentsArr.push(<Book key={counter} book={book} deleteBook={this.deleteBook} />)
            counter++;
        }

        return componentsArr;
    }

    deleteBook(bookId){
        console.log(this)     ;
        console.log(bookId)     ;
        this.books.forEach( (obj ,index) => {
            if (obj.bookId === bookId){
                 this.books.splice(index ,1 );
                 //update the array of components
                 this.setState({ booksComponentsArray:this.getBook(this.books)}) 
            }
        });
        //same and better
       // this.books = this.books.filter(obj=> obj.bookId !== bookId)


    }

    //add addBook -- what we need to change ?
    //add deleteBook  -- how to bind event ?

    render() {
     
        return (
            <div>

                <div>

                    {this.booksComponentsArray}

                </div>
            </div>


        )
    }


}

export default LibraryDelete;