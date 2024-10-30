import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src={new URL('../images/airbnb-logo.png', import.meta.url)} className="nav--logo" />
        </nav>
    )
}
