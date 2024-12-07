// React Dependencies
import React from 'react'

type InputProps = {
    icon?: string, // svg, png, etc
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ icon, placeholder, value, onChange }: InputProps) => {
    return (
        <div className='flex'>
            {icon && <img src={icon} className="logo" alt="Vite logo" />}
            <input 
                className='p-2.5 rounded-[4px] text-sm border border-white/50 bg-transparent text-white focus:outline-none focus:border-white'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input