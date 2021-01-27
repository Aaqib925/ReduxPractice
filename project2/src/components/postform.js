import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div>
        <h1>PostForm</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Post Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            ></input>
          </div>
          <br></br>
          <div>
            <labal>Body</labal>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
            <br></br>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
