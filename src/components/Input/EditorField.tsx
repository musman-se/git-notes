// External Dependencies
import { useField, useFormikContext } from 'formik';
import Editor from '@monaco-editor/react';

type EditorFieldProps = {
    name: string;
    className?: string;
    height?: string | number;
    width?: string | number;
    language?: string;
    theme?: string;
};

const EditorField = ({ name, className, height = 200, width = '100%', language = 'text', theme = 'vs-light' }: EditorFieldProps) => {
    const [field, , helpers] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleEditorChange = (value: string | undefined) => {
        setFieldValue(name, value);
    };

    return (
        <Editor
            className={className}
            height={height}
            width={width}
            defaultLanguage={language}
            theme={theme}
            value={field.value}
            onChange={handleEditorChange}
            options={{
                minimap: {
                    enabled: false,
                },
                // @ts-ignore
                renderIndentGuides: false
            }}
        />
    );
};

export default EditorField;