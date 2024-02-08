import './AccordionItem.css'

const AccordionItem = ({titulo,children, isOpen, onClick}) => {
    return (
        <div className="item">
            <div className="titulo" onClick={onClick}>
                {titulo}
            </div>
            {isOpen && <div className="body">{children}</div>}
        </div>
    )
}

export default AccordionItem;