import React, { Component } from 'react';
import axios from 'axios'

export default class CreateBlog extends Component {
    constructor(props){
        super(props);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            title:'',
            description:''
        }
    }
    
onChangetitle(e){
    this.setState({
        title: e.target.value
    })
}
onChangeDescription(e){
    this.setState({
        description: e.target.value
    })
}


onSubmit(e){
    e.preventDefault();

    const blog = {
        title: this.state.title,
        description: this.state.description
    }
    console.log(blog);
    axios.post('http://localhost:3333/api/createBlog/add', blog)
        .then(res => console.log(res.data))

    window.location = '/';

}


    render() {
        return (
            <div className="container">
                <br/>
                <h3>Create New Blog</h3>
                <hr/>
                <form onSubmit={this.onSubmit}>
                   
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangetitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" 
                        value="Create Blog"
                        className="btn btn-primary"/>
                    </div>

                </form>
            </div>
        )
    }
}
