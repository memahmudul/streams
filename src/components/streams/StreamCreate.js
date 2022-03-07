// import React from 'react'
// import {Field,reduxForm} from 'redux-form'
// import { connect } from 'react-redux';
// import { createStream } from '../../actions';
// //if we use class based component then the input taking freeze problem will be solved

// function StreamCreate(props) {
//   const renderError = ({error,touched})=>{
//     if(touched && error){
//       return(
//         <div className='ui error message'>
//           <div className="header">{error}</div>
//         </div>
//       );

//     }

//   }
//   const renderInput = ({input,label,meta})=>{
//     console.log(meta)

//     return (
//      <div className='field'>
//      <label>{label}</label>
//         <input {...input} autoComplete="off"/>
//         {renderError(meta)}
//      </div>
//     );
//   }

//   const onSubmit = (formValues)=>{
//    props.createStream(formValues)

//   }
//   return (
//     <form className='ui form error' onSubmit={props.handleSubmit(onSubmit)}>
//       <Field name='title' label="Enter Title" component={renderInput}/>
//       <Field name='description' label="Enter Description" component={renderInput}/>
//       <button className='ui button primary'>Submit</button>
//     </form>
//   )
// }

// const validate = (formValues)=>{
//   const errors = {}
//   if(!formValues.title){
//     errors.title = 'you must enter a title'
//   }
//   if(!formValues.description){
//     errors.description = 'you must enter a description'
//   }

//   return errors;

// }

// const formWrapped = reduxForm({form: 'streamCreate',validate:validate})(StreamCreate)

// export default connect(null,{createStream})(formWrapped)

import React from "react";
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from "./StreamForm";
class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render(){
    return (
      <div>
        <h3>create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }


}


export default connect(null,{createStream})(StreamCreate)
