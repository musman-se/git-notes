// React Dependencies
import { useState } from 'react'

// Internal Dependencies 
import ListView from "../ListView"

import NoteIcon from '../../assets/note.svg?react'
import ListUnorderedIcon from '../../assets/list-unordered.svg?react'
import GistIconWrapper from '../common/GistIconWrapper'
import GridView from '../GridView/GridView'

type PublicGistProps = {
    // ...
}

type LayoutType = 'list' | 'grid'

const PublicGist = ({}: PublicGistProps) => {
    const [layoutType, setLayoutType] = useState<LayoutType>('grid')

    return (
        <>
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl font-normal text-[#3D3D3D]">Public Gists</h1>

                <div className="flex items-center">
                    <GistIconWrapper 
                        Icon={NoteIcon}
                        isSelected={layoutType === 'grid'} 
                        className='rounded-l-md'
                        onClick={() => setLayoutType('grid')}
                    />
                    <GistIconWrapper 
                        Icon={ListUnorderedIcon}
                        isSelected={layoutType === 'list'} 
                        className='rounded-r-md'
                        onClick={() => setLayoutType('list')}
                    />
                </div>
            </div>

            { layoutType === 'list' ? <ListView /> : <GridView /> }
        </>
    )
}

export default PublicGist