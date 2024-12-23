export default function NavBar() {
    return (
        <nav className='nav'>
            <div className='site-title'>
                Site Name
            </div>
            <ul>
                <li className="Active">
                    <a href='/Enlist'>Enlist</a>
                </li>
                <li className="Active">
                    <a href='/Volunteer'>Volunteer</a>
                </li>
                <li className="Active">
                    <a href='/Education'>Education</a>
                </li>
                <li className="Active">
                    <a href='/Donations'>Donations</a>
                </li>
            </ul>
        </nav>
    )
}
