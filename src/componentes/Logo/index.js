import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <strong><p>SENAI Books</p></strong>
        </div>
    )
}

export default Logo