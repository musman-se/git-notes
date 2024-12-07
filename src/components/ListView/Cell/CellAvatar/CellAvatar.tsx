// Internal Dependencies
import Avatar from "./Avatar";

const CellAvatar = () => {
    return (
        <div className="flex items-center gap-2">
            <Avatar src='https://avatars.githubusercontent.com/u/93484781?v=4' />
            <p className="text-sm">John Doe</p>
        </div>
    )
}

export default CellAvatar;