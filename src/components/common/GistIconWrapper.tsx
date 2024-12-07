import React from "react"

type GistIconWrapperType = {
    Icon: React.ElementType,
    isSelected?: boolean,
    className?: string,
    onClick: () => void
}

const GistIconWrapper = ({ Icon, isSelected, className, onClick }: GistIconWrapperType) => {
    return (
        <div 
            className={`py-2 px-3 border border-[#E3E3E3] cursor-pointer ${isSelected ? 'bg-[#E3E3E3]' : ''} ${className}`}
            onClick={onClick}
        >
            {Icon && <Icon className={isSelected ? 'text-[#003B44]' : 'text-[#B7B7B7]'} />}
        </div>
    )
}

export default GistIconWrapper