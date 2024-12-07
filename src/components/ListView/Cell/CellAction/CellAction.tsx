// Internal Dependencies
import ForkIcon from "../../../../assets/repo-forked.svg?react";
import StarIcon from "../../../../assets/star.svg?react";

const CellAction = () => {
    const onForkIconClickHandler = () => {
        // ...
    }

    const onStarIconClickHandler = () => {
        // ...
    }

    return (
        <div className="flex gap-4">
            <ForkIcon className="text-[#003B44] cursor-pointer" onClick={onForkIconClickHandler} />
            <StarIcon className="text-[#003B44] cursor-pointer" onClick={onStarIconClickHandler} />
        </div>
    )
}

export default CellAction;