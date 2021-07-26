import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

function GoogleAuthCallback() {
    const [auth, setAuth] = useState()
    const location = useLocation()
    useEffect(() => {
        if (!location) {
            return
        }
        const { search } = location
        axios({
            method: "GET",
            url: `http://localhost:1337/auth/google/callback?${search}`,
        })
            .then(res => res.data)
            .then(setAuth)
    }, [location])

    console.log(auth)

    return (
        <div>
            {auth && (
                <>
                    <div>Hello: {auth.user.username}</div>
                    <div>User Id: {auth.user.id}</div>
                    <div>Provider: {auth.user.provider}</div>
                </>
            )}
        </div>
    )
}

export default GoogleAuthCallback