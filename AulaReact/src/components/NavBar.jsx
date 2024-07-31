import Logo from '/logo.jpg'
import Button from './Button';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo}/>
                Nome
            </div>

            <div className="buttons">
                <Button>Botão 1</Button>
                <Button>Botão 2</Button>
                <Button>Botão 3</Button>
            </div>
        </div>
    )
}

export default NavBar;