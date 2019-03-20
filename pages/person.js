import {Component} from 'react';
import axios from 'axios';
import Layout from '../components/layout';

class Person extends Component{
    state = {
        persons : null,
        ip : 'http://203.157.118.123:4000/persons'
    }

    componentDidMount = async()=>{
        let res = await axios.get(this.state.ip);
        this.setState({
            persons : res.data
        })
        console.log(res.data)
    }

    render(){
        return(
            <Layout title='แสดงข้อมูลบุคคล'>
                {JSON.stringify(this.state.persons)}
            </Layout>
        );
    }
}
export default Person
