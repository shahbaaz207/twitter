import React from 'react'
import { provider ,auth} from './firebase'
import { useStateValue } from './StateProvider'
import { actiontypes } from './reducer'

const Header = () => {
    const [{},dispatch]=useStateValue()
    const login=(e)=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actiontypes.SET_USER,
                user:result.user
            })
        })
        .catch(err=>
            alert(err.message)
        )
    }
    return (
        <div className="header">
            <img src="https://img-authors.flaticon.com/google.jpg" alt=""/>
            <div className="header_container" onClick={login}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCf6V-9ndOjxLRTY-g6_Bb08GVGS4pXhRGCA&usqp=CAU" alt=""/>
                <p>Sign in with Google</p>
            </div>
        </div>
    )
}

export default Header
