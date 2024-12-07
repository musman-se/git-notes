// Intenral Dependencies
import Input from "./Input"
import emumbaLogo from '../assets/emumba.svg'
import Button from "./Button";

const Navbar = () => {
    return (
        <div className='bg-[#003B44] flex items-center justify-between py-5 px-8'>
            <div>
                <img src={emumbaLogo} alt='Emumba logo' />
            </div>
            <div className="flex items-center gap-8">
                <Input placeholder="Search gists..." value="" onChange={() => {}} />
                <Button text='Login' size="sm" color="white" />
            </div>
        </div>
    )
}

export default Navbar;