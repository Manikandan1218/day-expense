import './InvalidInput.css';

const InvalidInput = (props) =>{
    return(
        <div className="invalid-container">
            <div className="invalid-header">Invalid Message</div>
            <div className="msg-content">
                Invalid input details :( Please give valid input details!!
            </div>
            <div>
            <a className="btnfos btnfos-1" onClick={props.popupHandler}>
                <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                 Close
            </a> 
            </div>
        </div>
    )
}

export default InvalidInput;