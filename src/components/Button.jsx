
//controlled component
const Button = (props) => {
    const {id,type,label,className, handleClick} = props;   //destructring
    return (
        <button id={id} className={className} type={type} onClick={ () => handleClick()}> {label} </button>
    );
}
export default Button;