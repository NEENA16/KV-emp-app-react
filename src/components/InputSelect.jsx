import "../styles/Styles.css";
const InputSelect = ({
    label,options
}) => {
    return (
        <div >
            <label>{label}</label>
            <select name={label}>
                {options.map((item)=>(
                    <option key={item.key}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default InputSelect;