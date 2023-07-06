// React
import { useMediaQuery } from "react-responsive";
import { NavLink, onClick } from 'react-router-dom';

// Custom hook
import { DelayedMounting } from "../hooks/delayMounting";

// Style 
import '../style/main.css'


export default function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <header>
            <div className="nav">
                {!isMobile && <NavLinks />}
            </div>
            {isMobile && <MobileNav />}
        </header>
    );
}

// Navbar for desktop
function NavLinks() {
    return (
        <ul className="menu-nav">
            <li className="menu-nav_item">
                <NavLink to="/" className="menu-nav_link">
                    Home
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="about" className="menu-nav_link">
                    About
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="vision" className="menu-nav_link">
                    Vision
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="service" className="menu-nav_link">
                    Service
                </NavLink>
            </li>
            <li className="menu-nav_item">
                <NavLink to="contact-us" className="menu-nav_link">
                    Contact Us
                </NavLink>
            </li>
        </ul>
    );
}

// Navbar for mobile 
function MobileNav() {
    const [state, show, hide, hideNow] = DelayedMounting();

    return (
        <>
            <div className="menu-btn" onClick={state === "mounted" ? hide : show}>
                <span className={state === "mounting" ? "menu-btn_burger open" :
                    state === "mounted" ? "menu-btn_burger opened" : "menu-btn_burger"}></span>
            </div>
            {state !== "unmounted" && (
                <MobileNavLink hideNow={hideNow} className={`${state === "unmounting" ? "end-animation closed" : state === "unmounted" ? "closed" : ""}`} />
            )}
        </>
    )
}

function MobileNavLink(props) {
    return (
        <div className={`mobile-nav start-animation ${props.className}`}>
            <ul className="mobile-nav">
                <li className="mobile-nav_item">
                    <NavLink to="/" className="mobile-nav_link" onClick={props.hideNow}>
                        Home
                    </NavLink>
                </li><li className="mobile-nav_item">
                    <NavLink to="about" className="mobile-nav_link" onClick={props.hideNow}>
                        About
                    </NavLink>
                </li><li className="mobile-nav_item">
                    <NavLink to="vision" className="mobile-nav_link" onClick={props.hideNow}>
                        Vision
                    </NavLink>
                </li><li className="mobile-nav_item">
                    <NavLink to="service" className="mobile-nav_link" onClick={props.hideNow}>
                        Service
                    </NavLink>
                </li><li className="mobile-nav_item">
                    <NavLink to="contact-us" className="mobile-nav_link" onClick={props.hideNow}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

