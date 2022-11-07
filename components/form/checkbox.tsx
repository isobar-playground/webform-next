export default function Checkbox({name, label, required}) {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" name={name} required={required}/>
                <span className="text-sm">{label}</span>
            </label>
        </div>
    )
}
