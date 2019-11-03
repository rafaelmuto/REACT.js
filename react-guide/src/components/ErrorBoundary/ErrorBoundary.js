import React, { Component } from './node_modules/react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch = (err, info) => {
    this.setState({ hasError: true, errorMessage: err });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong... =( s</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
