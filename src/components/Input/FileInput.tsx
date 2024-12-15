// External] Dependencies
import { Field } from 'formik'
import EditorField from './EditorField'

type FileInputProps = {
    fileName: string,
    contentName: string
}

const FileInput = ({ fileName = '', contentName = '' }: FileInputProps) => {
    return (
        <div className="file-input bg-lightestGray1 border border-lightGray rounded-md my-4">
            <div className='p-2.5'>
                <Field className='border border-gray py-2.5 px-2 rounded-md text-sm w-[250px]' type="text" name={fileName} placeholder='Filename including extension...' />
            </div>
            <div className='pt-4 bg-white border-t border-lightGray'>
                <EditorField name={contentName} className='min-h-[200px] pt-2' />
            </div>
        </div>
    )
}

export default FileInput;