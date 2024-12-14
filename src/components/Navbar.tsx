// React Dependencies
import { useRef, useState, useEffect } from 'react'

// Intenral Dependencies
import Input from "./Input"
import Button from "./Button";

import EmumbaLogo from '../assets/emumba.svg?react'
import MagnifyLogo from '../assets/magnify.svg?react'
import ProfileLogo from '../assets/profile.png'

import Avatar from "./ListView/Cell/CellAvatar/Avatar";
import Dropdown from "./common/Dropdown";

const Navbar = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isAuthenticated = false;

    const [showDropdown, setShowDropdown] = useState(false);

    const showDropdownHandler = () => {
        setShowDropdown(true)
    }

    const hideDropdownHandler = () => {
        setShowDropdown(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                hideDropdownHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <div className='
            bg-[#003B44] flex flex-col gap-3 flex-start p-3 
            md:flex-row md:items-center md:gap-0 justify-between md:py-5 md:px-8
        '>
            <div>
                <EmumbaLogo className="text-white" />
            </div>
            <div className="flex justify-between items-center gap-8 md:justify-start">
                <Input Icon={MagnifyLogo} placeholder="Search gists..." value="" onChange={() => {}} />

                <>
                    { isAuthenticated ? (
                        <div className="relative">
                            <Avatar className='cursor-pointer' src={ProfileLogo} onClick={showDropdownHandler} />
                            { showDropdown && (
                                <div ref={dropdownRef}>
                                    <Dropdown className="absolute top-11 right-0" />
                                </div>
                            ) }
                        </div>
                    ) : <Button text='Login' size="sm" color="white" />}
                </>
            </div>
        </div>
    )
}

export default Navbar;