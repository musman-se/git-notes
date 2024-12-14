// Internal Dependencies
import Button from "../Button";

const Dropdown = () => {
    return (
        <div className="shadow-custom rounded-md p-2.5 w-40">
            <p className="text-[11px] text-darkGray">Signed in as</p>
            <p className="text-sm text-darkGreen font-bold">John Doe</p>
            <hr className="my-2.5 text-lightGray" />
            
            <div className="flex flex-col gap-2.5 items-start">
                <Button className='px-0 py-0' text="Your gists" size="sm" color="plain" />
                <Button className='px-0 py-0' text="Starred gists" size="sm" color="plain" />
                <Button className='px-0 py-0' text="Your GitHub profile" size="sm" color="plain" />
            </div>
            <hr className="my-2.5 text-lightGray" />

            <div className="flex flex-col gap-2.5 items-start">
                <Button className='px-0 py-0' text="Help" size="sm" color="plain" />
                <Button className='px-0 py-0' text="Sign out" size="sm" color="plain" />
            </div>
        </div>
    )
}

export default Dropdown;