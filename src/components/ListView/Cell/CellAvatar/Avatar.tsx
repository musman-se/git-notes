type AvatarProps = {
    className?: string,
    src: string
}

const Avatar = ({ className, src }: AvatarProps) => {
    return (
        <div>
            <img src={src} className={`rounded-full ${className}`} alt='avatar' />
        </div>
    )
}

export default Avatar;