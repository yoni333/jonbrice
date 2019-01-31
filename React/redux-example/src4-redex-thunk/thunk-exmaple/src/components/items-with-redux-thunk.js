import React, { Component } from 'react';
import axios from 'axios'
//import fetchData from './makeAjax';
class ItemListRedux extends Component {
    constructor(props) {
        super(props);
      
    }

     fetchData(url) {
         console.log('axios start')
        this.setState({ isLoading: true });
        axios.get(url)
            .then((response) => {
             
                this.setState({ isLoading: false });
               console.log(response.data);
               let doglist = Object.keys(response.data.message).map(
                   (val,i)=>{return {label:val,id:i}}
                )
               console.log(doglist)
               this.setState({ items:doglist })

               
            })
          
        
    };
    componentDidMount() {
        this.fetchData('https://dog.ceo/api/breeds/list/all');
    }
    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.state.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}
export default  connect(state => state)(ItemListRedux); 
