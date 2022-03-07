import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'
import { Link } from 'react-router-dom'

function StreamList(props) {
  useEffect(() => {
   props.fetchStreams()

  },[])

  const renderedList = props.streams.map((stream)=>{
    return (
      <div className='item' key={stream.id}>
       {props.currentUserId ===stream.userId? <div className='right floated content'>
     <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
     <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>Delete</Link>

      </div> : ''}
      <i className='large middle aligned icon camera'/>
      <div className="content">
        {stream.title}
      </div>
      <div className="description">{stream.description}</div>
     

      </div>
    );
  })

  const renderCreate = ()=>{
    if(props.isSignedIn){
      return <div style={{textAlign:'right'}}>
      <Link to="/streams/new" className='ui button primary'>
      Create Stream

      </Link>

      </div>
    }
  
  }
  
  return (
    
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderedList}
      </div>
      {renderCreate()}
    </div>
    
  );
}

const mapStateToProps = (state)=>{
  return {streams: Object.values(state.streams),currentUserId:state.auth.userId,isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{fetchStreams})(StreamList)

