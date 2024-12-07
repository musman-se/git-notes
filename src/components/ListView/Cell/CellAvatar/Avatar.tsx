type AvatarProps = {
    src: string
}

const Avatar = ({ src }: AvatarProps) => {
    return (
        <div>
            <img src={src} className="w-8 h-8 rounded-full" alt='avatar' />
        </div>
    )
}

export default Avatar;