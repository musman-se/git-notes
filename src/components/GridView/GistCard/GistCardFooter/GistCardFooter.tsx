// Internal Dependencies
import ProfileImage from '../../../../assets/profile.png'
import CellAction from '../../../ListView/Cell/CellAction/CellAction'

type GistCardFooterProps = {
    isMouseOverCard?: boolean
}

const GistCardFooter = ({ isMouseOverCard }: GistCardFooterProps)  => {
    return (
        <div className='relative flex items-start p-2 overflow-hidden'>
            <img src={ProfileImage} className='w-10 h-10 rounded-full mr-2' alt='profile' />

            <div className='relative'>
                <div className='flex items-center'>
                    <p className='text-darkGreen'>John Doe</p>
                    <p className='ml-1 text-darkGray'>/</p>
                    <strong className='block ml-1 text-darkGreen text-ellipsis overflow-hidden whitespace-nowrap max-w-96'>
                        Lorem ipsum dolor sit amet
                    </strong>
                </div>

                <div className='mt-1'>
                    <p className='text-xs text-darkSilver'>Created 7 hours ago</p>
                    <p className='text-xs text-darkSilver text-nowrap whitespace-nowrap overflow-hidden text-ellipsis w-40'>
                        This is the new text that has been added in here and this is some more text that is being added in 
                    </p>
                </div>
            </div>

            { isMouseOverCard && <CellAction className='rounded-br-md absolute right-0 top-0 bg-gradient-to-r from-white/90 via-white to-white justify-center items-center w-[111px] h-full' />}
        </div>
    )
}

export default GistCardFooter;