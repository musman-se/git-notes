// Intenral Dependencies
import Input from "./Input"
import Button from "./Button";

import emumbaLogo from '../assets/emumba.svg'
import magnifyLogo from '../assets/magnify.svg'

const Navbar = () => {
    return (
        <div className='
            bg-[#003B44] flex flex-col gap-3 flex-start p-3 
            md:flex-row md:items-center md:gap-0 justify-between md:py-5 md:px-8
        '>
            <div>
                <img src={emumbaLogo} alt='Emumba logo' />
            </div>
            <div className="flex justify-between items-center gap-8 md:justify-start">
                <Input icon={magnifyLogo} placeholder="Search gists..." value="" onChange={() => {}} />
                <Button text='Login' size="sm" color="white" />
            </div>
        </div>
    )
}

export default Navbar;