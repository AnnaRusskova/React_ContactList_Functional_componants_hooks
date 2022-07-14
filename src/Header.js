import './Header.css';

export function Header () {
    return(
        <div className="header-wrapper">
        <div className="header-main">
            <h1 className="header-title">Contacts Book</h1>
            <p className="header-subtitle">Made by Anna</p>
        </div>

        <div className="header-link">
            <a href="https://github.com/AnnaRusskova/HW6_ContactList_functional">My GitHub Account</a>
        </div>
   
    </div>
    );
}