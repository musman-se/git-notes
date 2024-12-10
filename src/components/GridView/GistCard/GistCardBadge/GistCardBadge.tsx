type GistCardBadgeType = {
    text?: string,
    className?: string,
}

const GistCardBadge = ({ text, className }: GistCardBadgeType) => {
    return (
        <p className={`absolute top-0 right-0 z-10 max-w-max text-xs py-2 px-4 bg-darkGreen text-white rounded-tr-[4px] ${className}`}>
            View <strong>{text}</strong>
        </p>
    )
}

export default GistCardBadge