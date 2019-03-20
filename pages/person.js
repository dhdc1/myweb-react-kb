import { Component } from "react";
import axios from "axios";
import Layout from "../components/layout";
import { Table } from "react-bootstrap";

class Person extends Component {
  state = {
    persons: null,
    ip: "http://203.157.118.123:4000",
    cid: "",
    fname: "",
    lname: ""
  };

  getPerson = async () => {
    let res = await axios.get(this.state.ip + "/persons");
    this.setState({
      persons: res.data
    });
    console.log(res.data);
  };

  componentDidMount = () => {
    this.getPerson();
  };

  onSubmit = async e => {
    e.preventDefault();
    let data = {
      cid: this.state.cid,
      fname: this.state.fname,
      lname: this.state.lname
    };
    let res = await axios.post(this.state.ip + "/new-person", data);
    this.setState({
      cid: "",
      fname: "",
      lname: ""
    });
    this.getPerson();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deletePerson=async(cid)=>{
    let {ip} = this.state;
    console.log(cid)
    let res = await axios.delete(`${ip}/person/${cid}`);
    this.getPerson();
  }

  render() {
    let { persons, cid, fname, lname } = this.state;
    return (
      <Layout title="แสดงข้อมูลบุคคล">
        <form onSubmit={this.onSubmit}>
          <input
            name="cid"
            placeholder="เลขบัตร"
            onChange={this.onChange}
            value={cid}
          />
          <input
            name="fname"
            placeholder="ชื่อ"
            onChange={this.onChange}
            value={fname}
          />
          <input
            name="lname"
            placeholder="นามสกุล"
            onChange={this.onChange}
            value={lname}
          />
          <button>ตกลง</button>
        </form>

        <br />

        {persons ? (
          <div>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((person, i) => (
                  <tr key={i} onClick={()=>alert(person.cid)}>
                    <td>{i + 1}</td>
                    <td>{person.fname}</td>
                    <td>{person.lname}</td>
                    <td>{person.address}</td>
                    <td><button key={person.cid} onClick={()=>this.deletePerson(person.cid)}>ลบ</button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <img src={"static/load.gif"} />
        )}
      </Layout>
    );
  }
}
export default Person;
