// Internal Dependencies
import ProfileImage from '../../../../assets/profile.png'

const GistCardFooter = () => {
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
                    <p className='text-xs text-darkSilver text-nowrap whitespace-nowrap overflow-hidden text-ellipsis max-w-96'>
                        This is the new text that has been added in here and this is some more text that is being added in 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default GistCardFooter;