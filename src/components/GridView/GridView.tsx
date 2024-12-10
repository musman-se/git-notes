// Internal Dependencies
import GistCard from './GistCard/GistCard'
import * as publicGists from '../../__mock__/publicGists.json'
import { PublicGist } from '../../types'

const GridView = () => {
    const publicGist = publicGists[0]

    return (
        <div className='grid grid-cols-3 gap-4 justify-between'>
            <GistCard gist={publicGist} />
            <GistCard gist={publicGist} />
            <GistCard gist={publicGist} />
            <GistCard gist={publicGist} />
            <GistCard gist={publicGist} />
            <GistCard gist={publicGist} />
        </div>
    )
}

export default GridView