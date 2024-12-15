// React Dependencies
import { useState } from 'react'

// External Dependencies
import Editor from '@monaco-editor/react'

// Internal Dependencies
import { PublicGist } from '../../../types'
import * as gistCode from '../../../__mock__/gistCode.json'
import GistCardFooter from './GistCardFooter/GistCardFooter'
import GistCardBadge from './GistCardBadge/GistCardBadge'

type GistCardProps = {
    className?: string,
    gist?: PublicGist
}

const GistCard = ({ className }: GistCardProps) => {
    const [isMouseOverCard, setIsMouseOverCard] = useState(false)

    const editorDidMount = (editor: any) => {
        setTimeout(function() {
            editor.getAction('editor.action.formatDocument').run();
        }, 300);
    }

    const onMouseEnterHandler = () => {
        setIsMouseOverCard(true)
    }

    const onMouseLeaveHandler = () => {
        setIsMouseOverCard(false)
    }

    return (
        <div className={`gist-card border border-lightGray rounded-md max-w-full ${className}`} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <div className={`relative border rounded-t-md ${isMouseOverCard ? 'border-darkGreen' : 'border-transparent'}`}>
                { isMouseOverCard && <GistCardBadge text='vercel_package.json' /> }
                
                <Editor
                    height={182}
                    width={'100%'}
                    defaultLanguage='json'
                    value={JSON.stringify(gistCode)}
                    onMount={editorDidMount}
                    theme='vs-light'
                    options={{
                        minimap: {
                            enabled: false,
                        },
                        // @ts-ignore
                        renderIndentGuides: false
                    }}
                />
            </div>
            
            <GistCardFooter isMouseOverCard={isMouseOverCard} />
        </div>
    )
}

export default GistCard