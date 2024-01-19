import './UserCard.css'

const UseCard = (props) => {
    return (
        <div className="card">
            <img src={props.imagen} alt={props.alt} width={100} height={100}></img>
            <p>Nombre y apellidos: <b>{`${props.nombre}`}</b></p>
            <p>Fecha de nacimiento: <b>{`${props.fechanac}`}</b></p>
            <p>Descripción: <b>{`${props.descripcion}`}</b></p>
            <p>Empresa actual: <b>{`${props.empresa}`}</b></p>
        </div>
    )
};

export default UseCard;