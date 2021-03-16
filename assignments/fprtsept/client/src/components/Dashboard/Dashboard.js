import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

const Blog = props => (
<tr>
<td>{props.blog.title}</td>
<td>{props.blog.description}</td>
</tr>
)

export default class BlogList extends Component {

    constructor(props){
        super(props);

        this.state = {
            blog: []
        }
    }
componentDidMount(){
    axios.get('http://localhost:3333/api/createBlog')
    .then(res => {
        this.setState({
            blog: res.data
        })
    })
    .catch((error) => {
        console.log(error);
    })
}

blogList(){
    return this.state.blog.map(currentBlog => {
        return <Blog blog = {currentBlog} 
        key={currentBlog._id}/>
    })
}





    render() {
        return (
            <div>
                        <Navbar/> 
               <h3> blog List</h3>
               <hr/>

               <table className="table">
                   <thead className="thead-light">
                       <tr>
                           <th>title</th>
                           <th>Description</th>
                       </tr>
                   </thead>
               <tbody>
                   {this.blogList()}
               </tbody>
               </table>
            </div>
        )
    }
}
