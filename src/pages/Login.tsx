import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Link to="/blog">
                Blog
            </Link>
            <br />
            <Link to="/dashboard">
                dashboard
            </Link>
            <br />
            <Link to="/"
                type='button'

            >
                Logout
            </Link>
        </div>
    )
}

export default Login