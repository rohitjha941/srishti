import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(window.innerWidth);

    if (window.innerWidth < 900) {
      var viewport_meta = document.getElementById('viewport-meta');
      viewport_meta.setAttribute("content", "width=1200");
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
