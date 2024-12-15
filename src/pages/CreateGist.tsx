// External Dependencies
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik'
import Button from '../components/Button'
import FileInput from '../components/Input/FileInput';

type FormValues = {
    description: string;
    files: {
        filename: string;
        content: string;
    }[];
};

const initialValues: FormValues = {
    description: '',
    files: [{
        filename: '',
        content: ''
    }]
}

const validateHandler = (values: FormValues) => {
    const errors: Partial<FormValues> = {}

    if (!values.description) {
        errors.description = 'Required'
    }

    return errors
}

const onSubmitHandler = (values, { isSubmitting }) => {
    console.log(values)
    isSubmitting(false)
}

const CreateGist = () => {
    return (
        <div className="flex items-start">
            <div className="flex justify-between items-center mb-10 w-1/4">
                <h1 className="text-2xl font-normal text-[#3D3D3D]">Create Gist</h1>
            </div>  

            <div className='w-full mt-10'>
                <Formik
                    initialValues={initialValues}
                    validate={validateHandler}
                    onSubmit={onSubmitHandler}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field className='text-sm border border-gray py-2.5 px-2 rounded-md w-full' type="text" name="description" placeholder='Gist Description' />
                            <ErrorMessage name="description" component="div" />

                            <FieldArray name='files'>
                                {({ push, remove, form, ...fieldArrayProps }) => {
                                    const { values } = form;
                                    const { files } = values;
                                    
                                    return (
                                        <div>
                                            { files.map((file, index) => (
                                                <FileInput key={index} fileName={`files[${index}].filename`} contentName={`files[${index}].content`} />
                                            )) }
                                        </div>
                                    )
                                }}
                            </FieldArray>
                            
                            <div className='flex justify-between'>
                                <Button size='sm' color='secondary' text='Add file'  />
                                <Button type='submit' size='sm' color='primary' text='Create Gist'  />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default CreateGist;