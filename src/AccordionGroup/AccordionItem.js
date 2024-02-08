import './AccordionItem.css'

const AccordionItem = ({titulo,children, isOpen, onClick}) => {
    return (
        <div className="item">
            <div className="titulo" onClick={onClick}>
                <strong>{titulo}</strong>
            </div>
            {isOpen && <div className="body">{children}</div>}
        </div>
    )
}

export default AccordionItem;