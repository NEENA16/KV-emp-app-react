import "../styles/Styles.css";
const InputField = ({label,onChange,defaultvalue,placeholder,id,className,type,name})=> {
    return (
        <div>
            <label>{label}</label>
            <input 
                className={className}
                type={type}
                value={defaultvalue} 
                onChange={(event) =>onChange(event.target.value)} 
                placeholder={placeholder}
                id={id}
                name={name}
                />  
        </div>
    )
}

export default InputField;