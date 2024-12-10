// React Dependencies
import React from 'react'

// Internal Dependencies
import GistCard from './GistCard/GistCard'
import * as publicGists from '../../__mock__/publicGists.json'
import { PublicGist } from '../../types'

const GridView = () => {
    const publicGist = publicGists[0]

    return (
        <div> 
            <p className=''>Grid View</p>
            <GistCard gist={publicGist} />
        </div>
    )
}

export default GridView