import Button from './Button';

const NavBar = () => {
    return (
        <div className='navbar h-32 w-full bg-slate-950 flex justify-between p-12 text-white'>
            <div className='logo'>
                Nome
            </div>

            <div className="buttons flex gap-4 justify-between">
                <Button>Botão 1</Button>
                <Button>Botão 2</Button>
                <Button>Botão 3</Button>
            </div>
        </div>
    )
}

export default NavBar;