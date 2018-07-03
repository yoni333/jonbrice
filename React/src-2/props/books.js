import React, { Component } from 'react';


class Book extends Component {

    render() {
        let style={
            display:"inline-block",
            margin:"10px",
            padding:"5px",
            border:"1px orange solid",
        }
        return (
            <div style={style}> 
               {this.props.book.name}- {this.props.book.auther} -  {this.props.book.cost} ILS- {this.props.book.year}
            </div>

        )
    }
}

class Library extends Component {

    getBook(books) {

        let componentsArr = []
        let counter = 0;
        //forEach was a better choice here
     
        for (let book of books) {
            componentsArr.push(<Book key={counter} book={book} />)
            counter++;
        }

        return componentsArr;
    }

    //add addBook -- what we need to change ?
    //add deleteBook  -- how to bind event ?

    render() {
        let books = [
            { name:"after party",auther: "ran kaplan", cost: 50, year: 1984 },
            { name:"the last way",auther: "beni sydof", cost: 60, year: 1999 },
            { name:"never say never",auther: "avi amir", cost: 70, year: 1987 },
            { name:"idk ok?",auther: "dan renren", cost: 100, year: 2002 },
        ]
        return (
            <div>

                {

                    this.getBook(books)
                }

            </div>


        )
    }


}

export default Library;