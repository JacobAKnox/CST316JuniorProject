import './popup.css'

export default function popupWindow(props){
    return(props.trigger) ? (
        <div classname = "popup">
            <button className="close-window">
                X
            </button>
            {props.children}
        </div>
    ): "";
}