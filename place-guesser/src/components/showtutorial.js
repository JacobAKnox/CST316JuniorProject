import './popup.css'
export default function Popup(props) {

    return(props.trigger) ? (
        <div className = "popup">
            <div className = "popup-inner">
                {props.children}
            </div>
        </div>
    ): "";
}
