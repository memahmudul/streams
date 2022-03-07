import React,{useEffect} from 'react'
import Modal from '../Modal'
import history from '../../history';
import { connect } from 'react-redux';
import {fetchStream,deleteStream} from '../../actions'
import { Link } from 'react-router-dom';

function StreamDelete(props) {
  useEffect(() => {
    props.fetchStream(props.match.params.id)
   
  }, [])
  const actions = (
    <>
      <button onClick={()=>props.deleteStream(props.match.params.id)} className="ui primary button">Delete</button>
              <Link to="/" className='ui button'>Cancel</Link>
    </>
  );

  if(!props.stream){
    return <div>loading...</div>
  }

  
  return (
   
 
    <Modal
      title='Delete Stream'
      content ={`Are you sure you want to delete "${props.stream.title}"?`}
      actions={actions}
      onDismiss={()=>history.push('/')}
    />
   
  )
}
const mapStateToProps = (state,ownProps)=>{
  return {stream:state.streams[ownProps.match.params.id]} //own props is used to access the props from streamedit component

}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)