import React, { Component } from 'react';
import './events.css';


class Events extends Component {
    regular_Func_With_Bind;
    results = [<li>first</li>];
    constructor() {
        super();
        this.state = { results: this.results }
        this.regular_Func_With_Bind = this.regularFuncWithBind.bind(this);
    }

    writeResults(that, target) {
        this.results.push((() => {
            return (
                <li>{"instanceof Events Class : " + (that instanceof Events)
                    + " , " + target.innerText}</li>
            )
        })()
        );
        console.log(this.results);
        this.setState({ results: this.results })
    }

    regularFuncNoBind(e) {
        //https://reactjs.org/docs/handling-events.html
        // In JavaScript, class methods are not bound by default.
        //  If you forget to bind this.handleClick and pass it to onClick,
        //  this will be undefined when the function is actually called.
        console.log('regularFunc No Bind this', this);
        console.log('regularFunc No Bind e', e);
        console.log('regularFunc No Bind e.target', e.target);
        try {
             this.writeResults(this,e.target);
        } catch (e){
            alert(e)
            console.log(e);
            
        }
    }

    regularFuncWithBind(e) {
        console.log('regularFunc With Bind this', this);
        console.log('regularFunc With Bind e', e);
        console.log('regularFunc With Bind e.target', e.target);
        this.writeResults(this, e.target);
    }

    regularFuncWith_onCLick_Bind(e) {
        console.log('regularFuncWith_onCLick_Bind this', this);
        console.log('regularFuncWith_onCLick_Bind e', e);
        console.log('regularFuncWith_onCLick_Bind e.target', e.target);
        this.writeResults(this, e.target);
    }

    arrowFuncClass = (e) => {
        //same as bind
        console.log('arrowFunc this', this);
        console.log('arrowFunc e', e);
        console.log('arrowFunc e.target', e.target);
        this.writeResults(this, e.target);
    }

    handleClick(e) {
        console.log('arrowFunc this', this);
        console.log('arrowFunc e', e);
        console.log('arrowFunc e.target', e.target);
        this.writeResults(this, e.target);
    }
    render() {
        return (
            <div>
                <div className="results">

                    <ul>
                        {this.state.results}
                    </ul>

                </div>
                <hr />
                <div className="buttons">

                    <button onClick={this.regularFuncNoBind}>regular function - no bind</button>
                    <button onClick={this.regular_Func_With_Bind}>regular function - with bind</button>
                    <button onClick={this.regularFuncWith_onCLick_Bind.bind(this)}>regular function - onClick bind</button>
                    <button onClick={this.arrowFuncClass}>arrow function in "class syntax" </button>
                    <button onClick={(e) => this.handleClick(e)}>arrow function closure express </button>

                </div>



            </div>
        );
    }
}

export default Events;
