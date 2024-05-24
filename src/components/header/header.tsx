import "./header.styles.scss";
import { garamond } from "@/utils/fonts";

export default function Header() {
    return (
        <header className="header">
            <div className="header_navigation">
                <div className="header_title">
                    <a href="/" className="header-logo">
                        <span className={garamond.className}>Kiryl Harbacheuski</span>
                    </a>
                    <span className="job-position">Frontend Web Developer</span>
                </div>
                <div className="header_menu">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#stack">Stack</a></li>
                        <li><a href="#contacts">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}