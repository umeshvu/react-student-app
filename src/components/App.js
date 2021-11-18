import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import LeftList from "./leftList";
import RightMain from "./RightMain";
import Footer from "./Footer";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], selectedStudent: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  async getData() {
    const res = await axios.get(
      "http://localhost:8081/api-v1/students/getAllStudent"
    );
    return await res.data;
  }

  componentDidMount() {
    console.log("componentDidMount");
    if (this.state.students.length === 0) {
      this.getData()
        .then((data) => {
          this.setState({ students: data }, () => {
            this.setState({ selectedStudent: data[0] });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleClick(e) {
    this.setState({ selectedStudent: e });
  }

  render() {
    return (
      <>
        <Header />
        <div className="body">
          <LeftList
            selectOne={this.handleClick}
            students={
              this.state.students.length > 0 ? this.state.students : null
            }
          />
          <RightMain
            studentInfo={
              this.state.students.length > 0 ? this.state.selectedStudent : null
            }
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
