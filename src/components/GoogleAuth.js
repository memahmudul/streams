import React from 'react'
import { connect } from 'react-redux'
import { signIn,signOut } from '../actions'

// function GoogleAuth() {
//     const [isSignedIn, setisSignedIn] = useState(null)
  
//     useEffect(() => {
//       window.gapi.load('client:auth2',()=>{
//           window.gapi.client.init({
//               clientId: '531750723253-nn34ld5r6njb1ggo8uv3eof4tdui9atn.apps.googleusercontent.com',
//               scope: 'email'
//           }).then(()=>{
//               const auth = window.gapi.auth2.getAuthInstance();
//               setisSignedIn(auth.isSignedIn.get())

//               auth.isSignedIn.listen(onAuthChange(auth))
               
//           })
//       })
    
     
//     }, [])

//     const onAuthChange = (auth)=>{
//         setisSignedIn(auth.isSignedIn.get())
//     }

//     const renderAuthButton = ()=>{
//         if(isSignedIn===null){
//             return <div>I dont know if we are signed in</div>
//         }else if(isSignedIn){
//             return <div>I am signed in</div>

//         }else{
//             return <div>I am not signed in</div>
//         }
//     }
    
//   return (
//       <div>
//          {renderAuthButton()}
//       </div>
      
   
//   )
// }

// export default GoogleAuth 

class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '531750723253-c6addphnle9qs1p6rj71cnjmuaagm17i.apps.googleusercontent.com',
                              scope: 'email'

            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
             
        })
       

    }

    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }

    }
    onSignedInClick = ()=>{
        this.auth.signIn()

    }
    onSignedOutClick = ()=>{
        this.auth.signOut()
        
    }
     renderAuthButton = ()=>{
                if(this.props.isSignedIn===null){
                    return null
                }else if(this.props.isSignedIn){
                    return <button onClick={this.onSignedOutClick} className='ui red google button'><i className='google icon'/>Sign Out</button>
        
                }else{
                     return <button onClick={this.onSignedInClick} className='ui green google button'><i className='google icon'/>Sign In with Google</button>
        
                }
            }
    render(){
        return <div>
            {this.renderAuthButton()}
        </div>
    }

}
const mapStateToProps = (state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth); 