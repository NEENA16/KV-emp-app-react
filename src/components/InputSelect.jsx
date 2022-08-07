import "../styles/Styles.css";
const InputSelect = ({
    label,options,onChange,className
}) => {
    return (
        <div >
            <label>{label}</label>
            <select name={label} className={className} onChange={(event) =>onChange(event.target.value)}>
                {options.map((item)=>(
                    <option key={item.key}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default InputSelect;