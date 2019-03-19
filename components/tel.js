// pattern-1

/*
const Tel = ()=>{
    return (
        <div>
            <div style={{backgroundColor:'green',color:'white'}}>055252052 ต่อ 455</div>
            <p>{props.name +' '+ props.lname}</p>
            <Button color="danger">Danger!</Button>
            { ' '}<Button color="primary">Primary!</Button>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </div>
    )
}
export default Tel;
*/

// pattern-2
/*
export default () => (
  <div style={{backgroundColor: 'red',color: 'white'}}>
    055252052 ต่อ 455
  </div>
)*/
// patern-3

import { Component } from 'react'
class Tel extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div style={{backgroundColor: 'blue',color: 'white'}}>
        055252052 ต่อ 455
        <p>{this.props.name} - { this.props.lname}</p>
      </div>
    )
  }
}
export default Tel

