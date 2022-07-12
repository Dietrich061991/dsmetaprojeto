import logo from '../../asserts/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.linkedin.com/in/waleria-martins-8977a71a3/"> waleria-martins</a>
                    </p>
            </div>
        </header>
    )
}

export default Header