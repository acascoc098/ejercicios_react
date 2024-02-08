import { useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionGroup = ({items}) => {
    const [open, setOpen] = useState(null)

    const toggleItem = (id) => {
        setOpen(open === id ? null : id)
    }

    return(
        <div>
            {items.map(item =>(
                <AccordionItem key={item.id}
                    titulo={item.titulo}
                    isOpen={open === item.id}
                    onClick={() => toggleItem(item.id)}
                >
                    {item.contenido}
                </AccordionItem>
            ))}
        </div>
    )
}

export default AccordionGroup;