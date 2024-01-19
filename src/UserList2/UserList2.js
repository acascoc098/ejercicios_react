import { useState } from 'react';
import './UserList.css'

const UserList = () => {
    const users = [
        {imagen: "https://pbs.twimg.com/media/DsOV0vBVAAAsyrH?format=jpg&name=small", alt: "Ana",nombre: "Ana Pérez", fechanac: "20-11-2002", descripcion: "Nueva empleada", empresa: "NTT Data"},
        {imagen: "https://www.peoplefirst.blog/wp-content/uploads/2018/03/Delsol_Exterior_web.jpg", alt: "Juan",nombre: "Juan de Dios", fechanac: "28-01-2000", descripcion: "Encargada", empresa: "Software del Sol"},
        {imagen: "https://www.silicon.es/wp-content/uploads/2022/04/NTT-DATA-to-acquire-Acorio-1280x720-1-684x513.jpg", alt: "Paco",nombre: "Paco Mer", fechanac: "20-12-2001", descripcion: "Programadora", empresa: "NTT Data"},
        {imagen: "https://dkp-it.com.br/wp-content/uploads/2019/03/blog-oracle.jpg", alt: "Luis",nombre: "Luis Martínez", fechanac: "03-11-1998", descripcion: "Administrativa", empresa: "Oracle"},
    ];

    const [className, setClassName] = useState(false);
    const getInfoU = () => {
        const list = [];
        for (const user of users) {            
            list.push(<div className="card2">
                        <img src={user.imagen} alt={user.alt} width={100} height={100}></img>
                        <p>Nombre y apellidos: <b>{`${user.nombre}`}</b></p>
                        <p>Fecha de nacimiento: <b>{`${user.fechanac}`}</b></p>
                        <p>Descripción: <b>{`${user.descripcion}`}</b></p>
                        <p>Empresa actual: <b>{`${user.empresa}`}</b></p>
                    </div>)
        }
        return list;
    }

    return (
        <>
            {getInfoU()}

            <button></button>
        </>
    )
}

export default UserList;