import Button from './Button';

const Card = () => {
    return (
        <div className="card p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
            <h1 className="text-2xl font-bold text-black-900">Título</h1>
            <p className="text-gray-600">Meu texto muito foda olha que legal ele é maneiro demais</p>
            <Button>Botão</Button>
        </div>
    )
}

export default Card;