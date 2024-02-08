import { useState } from "react"
import './TabMenu.css';

const TabMenu = ({tabs}) => {
    const [activeTab, setTab] = useState(tabs[0].id)

    return (
        <div>
            <div className="titulo">
                {tabs.map(tab => {
                    return (<button key={tab.id} 
                        className={activeTab === tab.id ? 'active' : ''} 
                        onClick={() => setTab(tab.id)}
                    >
                        {tab.titulo}
                    </button>)
                })}
            </div>
            <div className="contenido">
                {tabs.map(tab => {
                    if (tab.id === activeTab) {
                        return <div key={tab.id} dangerouslySetInnerHTML={{__html: tab.contenido}}/>
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default TabMenu;