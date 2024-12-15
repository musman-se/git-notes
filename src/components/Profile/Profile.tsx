// Internal Dependencies
import Avatar from '../ListView/Cell/CellAvatar/Avatar'
import Button from '../Button'
import CellBadge from '../ListView/Cell/CellBadge/CellBadge'
import GistCard from '../GridView/GistCard/GistCard'
import Pagination from '../common/Pagination'

import ProfileImage from '../../assets/profile.png'
import * as publicGists from '../../__mock__/publicGists.json'

const Profile = () => {
    const publicGist = publicGists[0]

    return (
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col items-center relative'>
                <Avatar src={ProfileImage} className='min-w-[250px] min-h-[250px]' />
                <p className='my-4 text-[25px] text-darkGray'>John Doe</p>
                <Button size='sm' color='primary' text='View GitHub Profile' />
            </div>

            <div className='w-full'>
                <div className='flex flex-row gap-1 items-center mb-5'>
                    <h2 className='text-[25px] text-darkGray'>All Gists</h2>
                    <CellBadge text='5' className='rounded-full px-3' />
                </div>

                <div className='flex flex-col gap-4'>
                    <GistCard gist={publicGist} className='max-w-full' />
                    <GistCard gist={publicGist} className='max-w-full' />
                </div>
                <Pagination currentPage={1} totalPage={14} />
            </div>
        </div>
    )
}

export default Profile