// Internal Dependencies
import Avatar from "./Avatar";

const CellAvatar = () => {
    return (
        <div className="flex items-center gap-2">
            <Avatar src='https://avatars.githubusercontent.com/u/93484781?v=4' className="w-8 h-8" />
            <p className="text-sm">John Doe</p>
        </div>
    )
}

export default CellAvatar;