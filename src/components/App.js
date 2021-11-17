import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import LeftList from "./leftList";
import RightMain from "./RightMain";
import Footer from "./Footer";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8081/api-v1/students/getAllStudent`)
      .then((res) => {
        if (res.status === 200) {
          const persons = res.data;
          this.setState({ persons });
          console.log(persons);
        } else {
          this.setState({});
        }
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="body">
          <LeftList />
          <RightMain />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
