// React Dependencies
import { useEffect } from 'react'

// External Dependencies
import Editor from '@monaco-editor/react'

// Internal Dependencies
import { PublicGist } from '../../../types'
import * as gistCode from '../../../__mock__/gistCode.json'
import GistCardFooter from './GistCardFooter/GistCardFooter'

type GistCardProps = {
    gist: PublicGist
}

const GistCard = ({ gist }) => {
    const editorDidMount = (editor, monaco) => {
        setTimeout(function() {
            editor.getAction('editor.action.formatDocument').run();
        }, 300);
    }

    return (
        <div className="border border-[#EFEFEF] rounded-md">
            <Editor
                height={182}
                width={'100%'}
                defaultLanguage='json'
                value={JSON.stringify(gistCode)}
                onMount={editorDidMount}
                theme='vs-dark'
                options={{
                    minimap: {
                        enabled: false
                    },
                    // readOnly: true,
                }}
            />

            <GistCardFooter />
        </div>
    )
}

export default GistCard