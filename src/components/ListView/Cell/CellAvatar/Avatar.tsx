type AvatarProps = {
    className?: string,
    src: string,
    onClick?: () => void
}

const Avatar = ({ className, src, onClick }: AvatarProps) => {
    return (
        <div onClick={onClick}>
            <img src={src} className={`rounded-full ${className}`} alt='avatar' />
        </div>
    )
}

export default Avatar;