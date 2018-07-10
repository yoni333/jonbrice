import React, { Component } from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

class FragmentsWay extends Component {

    getProperties() {

        const text = ['אין צורך לעטוף באלמנט', 'לא צריך פסיק כדי להפריד', 'לא צריך מפתח אינדקס לכל אלמנט במערך ', 'לא טקסט צריך מרכאות'];
        const Fragment = React.Fragment;
        const classes =  "list-group-item text-right font-weight-bold"
        return  (
        <Fragment>
       {text.map((str) => {
            return <li 
                className="list-group-item text-right font-weight-bold">{str}</li>
        })}
        <li className={classes}>אפשר לשלב בתוכו מערך</li>
        <li  className={classes}> React.Fragment</li>
        <li  className={classes}> קיצור דרך שני חיצים </li>
        <li  className={classes}> האלמנט פרגמנט עצמו - לא מרונדר כלל למסך</li>
        </Fragment>
    )


    }

    codeExample() {
        const syntax = {
            fontSize: "25px",
            fontFamily: "sun-serif",
            margin: "10px"
        }
      
        return (

           
            <div  style={syntax}>
                <p > Syntax:</p>
                <p> [ Comonent1 ,</p>
                <p>  Comonent2 ,</p>
                <p>  function that return component ,</p>
                <p>  Comonent4 ]</p>
                </div>
           
        )
    }

    render() {
        const mrg = {
            margin: "20px"
        }
        return (
            [
                <h1 style={mrg}>Fragments :</h1>,
                <ul key="1" className="list-group" style={mrg}>
                    {this.getProperties()}
                </ul>, <br key="2" />,

                this.codeExample()

            ]
        )


    }



}

class ArrayWay extends Component {


    getProperties() {

        const text = ['אין צורך לעטוף באלמנט', 'צריך פסיק כדי להפריד', 'צריך מפתח אינדקס לכל אלמנט במערך', 'טקסט צריך מרכאות'];

        return text.map((str, index) => {
            return <li key={index}
                className="list-group-item text-right font-weight-bold">{str}</li>
        })


    }

    codeExample() {
        const syntax = {
            fontSize: "25px",
            fontFamily: "sun-serif",
            margin: "10px"
        }
        return (

            <div key="3" style={syntax}>
                <p> Syntax:</p>
                <p> [ Comonent1 ,</p>
                <p>  Comonent2 ,</p>
                <p>  function that return component ,</p>
                <p>  Comonent4 ]</p>
            </div>
        )
    }

    render() {
        const mrg = {
            margin: "30px"
        }
        return (
            [
                <h1 style={mrg}>array:</h1>,
                <ul key="1" className="list-group" style={mrg}>
                    {this.getProperties()}
                </ul>, <br key="2" />,

                this.codeExample()

            ]
        )


    }


}

class FragmentsMain extends Component {

    render() {

        return (
            <div className="container">
                <div className="row ">
                    <div className="col-12 text-center"><h1>Fragments vs array:</h1></div>

                    <ArrayWay />
                    <div className="w-100"></div>
                   <FragmentsWay />

                </div>
               
            </div>
        )


    }


}


export default FragmentsMain;