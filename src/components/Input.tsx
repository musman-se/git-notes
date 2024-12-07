// React Dependencies
import React from 'react'

type InputProps = {
    Icon?: React.ElementType,
    iconClassName?: string,
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ Icon, iconClassName, placeholder, value, onChange }: InputProps) => {
    return (
        <div className='flex relative'>
            { Icon && <Icon className={`absolute top-1/4 left-2 text-white ${iconClassName}`} /> }
            <input 
                className={`p-2.5 rounded-[4px] text-sm border border-white/50 bg-transparent text-white focus:outline-none focus:border-white ${Icon ? 'pl-8' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input