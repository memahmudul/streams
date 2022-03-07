import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStream,editStream } from '../../actions'
import StreamForm from './StreamForm'
import lodash from 'lodash'//pick is used to only assign the initial value that is showing on the screen
import _ from 'lodash'

function StreamEdit(props) {
  useEffect(() => {
    props.fetchStream(props.match.params.id)
   
  }, [])
  const onSubmit = (formValues)=>{
    props.editStream(props.match.params.id,formValues)
  }

  if(!props.stream){
    return <div>loading...</div>
  }
  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm onSubmit={onSubmit} initialValues={_.pick(props.stream,'title','description')}/>  
    </div>
  );
}

const mapStateToProps = (state,ownProps)=>{
  return {stream:state.streams[ownProps.match.params.id]} //own props is used to access the props from streamedit component

}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit)