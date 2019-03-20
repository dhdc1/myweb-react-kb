import {Component} from 'react';
import axios from 'axios';
import Layout from '../components/layout';

class Person extends Component{
    state = {
        persons : null,
        ip : 'http://203.157.118.123:4000'
    }

    componentDidMount = async()=>{
        let res = await axios.get(this.state.ip+'/persons');
        this.setState({
            persons : res.data
        })
        console.log(res.data)
    }

    render(){
        let {persons} = this.state;
        return(
            <Layout title='แสดงข้อมูลบุคคล'>

              {persons?<div>

                {persons.map((person,i)=>(
                    <p key={i}>{person.fname} {person.lname}</p>
                ))}

              </div>:<img src={'static/load.gif'}></img>}
                
                
            </Layout>
        );
    }
}
export default Person
