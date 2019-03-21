import { Component } from "react";
import axios from "axios";
import Layout from "../components/layout";
import { Table ,Modal ,Button} from "react-bootstrap";

class Person extends Component {
  state = {
    persons: null,
    ip: "http://203.157.118.123:4000",
    agent: "https://localhost:8443/smartcard/data/",
    cid: "",
    fname: "",
    lname: "",
    show:false
  };

  handleClose=()=> {
    this.setState({ show: false });
  }

  handleShow=()=> {
    this.setState({ show: true });
  }

  getSmartCard = async () => {
    let res = await axios.get(this.state.agent);
    console.log(res.data);
    this.setState({
      cid: res.data.cid,
      fname: res.data.fname,
      lname: res.data.lname
    });
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

  clearForm = () => {
    this.setState({
      cid: "",
      fname: "",
      lname: ""
    });
  };

  deletePerson = async cid => {
    if (!confirm("Are you sure?")) {
      return;
    }
    let res = await axios.delete(this.state.ip + "/person/" + cid);
    this.getPerson();
  };

  showFormUpdate = (cid, fname, lname) => {
    console.log(cid, fname, lname);
    // show Modal with from
    this.handleShow();
  };

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
          <button type="submit">ตกลง</button>{" "}
          <button type="button" onClick={this.clearForm}>
            ล้าง
          </button>
          {""}
          <button type="button" onClick={this.getSmartCard}>
            ดึงข้อมูลจากบัตร
          </button>
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {persons.map((person, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      {person.cid}-{person.fname}
                    </td>
                    <td>{person.lname}</td>
                    <td>{person.address}</td>
                    <td>
                      <button onClick={() => this.deletePerson(person.cid)}>
                        ลบ
                      </button>{" "}
                      <button
                        onClick={() =>
                          this.showFormUpdate(
                            person.cid,
                            person.fname,
                            person.lname
                          )
                        }
                      >
                        แก้ไข
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <img src={"static/load.gif"} />
        )}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form className='form'>
                <input name='u_cid'   className='form-control'/><br/>
                <input name='u_fname' className='form-control' /><br/>
                <input name='u_lname' className='form-control' />
              </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </Layout>
    );
  }
}
export default Person;
