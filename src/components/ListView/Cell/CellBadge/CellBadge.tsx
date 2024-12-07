type CellBadgeType = {
    text?: string,
    className?: string,
    value?: string
}

const CellBadge = ({ text, className, ...props }: CellBadgeType) => {
    return (
        <p className={`max-w-max text-xs font-bold py-2 px-4 bg-[#003B44] text-white rounded-2xl ${className}`}>
            {text || props.value}
        </p>
    )
}

export default CellBadge