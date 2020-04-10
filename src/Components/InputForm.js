import React, { Component } from 'react'
import {Item, Input, Label} from 'native-base'


 class InputForm extends Component {
   constructor(props) {
     super(props);
     this.state = {  };
   }
   render() {
     return (
       <>
        <Item>
          <Label> {this.props.name} </Label>
          <Input placeholder={this.props.placeholder} textContentType={this.props.type} id={this.props.id} />
        </Item>
       </>
     );
   }
 }
 
 export default InputForm;