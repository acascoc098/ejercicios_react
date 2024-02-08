import './ProgressBar.css'

const ProgressBar = ({value,max}) => {
    const progreso = (value / max) * 100

    const progressBarStyle = {
        width: `${progreso}%`,
    };

    return (
        <div className="barra">
            <div className="barra-rellena" style={progressBarStyle}>{progreso.toFixed(0)}%</div>
        </div>
    )

}

export default ProgressBar;