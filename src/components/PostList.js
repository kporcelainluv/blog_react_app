import React, { Component } from "react";
import { fetchPost } from "../actions";
import { connect } from "react-redux";

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPost })(PostList);
