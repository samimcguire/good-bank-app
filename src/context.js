import { createContext } from "react";

export const UserContext = createContext(null);

const Card = () => {
    const classes = () => {
        const bg = bg.color ? ' bg-' + bgcolor : ' ';
        const txt = txtcolor ? ' text-' + txtcolor: ' text-white';
        return 'card mb-3' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth:"18rem"}}>
            <div className="card-header">
                {header}
            </div>
            <div className="card-body">
                {title && (<h5 className="card=title">{title}</h5>)}
                {text && (<h5 className="card=title">{text}</h5>)}
                {body}
                {status && (<div id='createStatus'>{status}</div>)}
            </div>
        </div>
    );
}