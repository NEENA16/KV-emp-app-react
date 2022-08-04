
//controlled component
const Button = (props) => {
    const {id,type,label, handleClick} = props;   //destructring
    return (
        <button id={id} type={type} onClick={ () => handleClick()}> {label} </button>
    );
}
export default Button;