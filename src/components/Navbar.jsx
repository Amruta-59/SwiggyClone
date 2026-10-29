import React from 'react'
import Style from '../css/Navbar.module.css'
import {ArrowRight} from 'lucide-react'

const Navbar = () => {
    return (
        <nav className={Style.navbar}>
            <div className={Style.navLeftPart}>
                <img src="src/assets/images.png" alt="Logo" height="100" />

            </div>

            <div className={Style.navRightPart}>
                <article>
                    <div className={Style.headingH2}>
                        <h2>Swiggy Corporate</h2>
                    </div>
                    <div className={Style.headingH2}>
                        <h2>Partners with us</h2>
                    </div>
                    <button className={Style.btn1}>Get the App <ArrowRight size={25}
                        className={Style.arrowIcon} /></button>
                    <button className={Style.btn2}>Sign in </button>

                </article>
            </div>

        </nav>
    )
}

export default Navbar