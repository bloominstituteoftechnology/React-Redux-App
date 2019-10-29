import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

const TitleForm = ({ errors, touched, status }) => {
  const [songLyrics, setSongLyrics] = useState ([])

useEffect(() => {
    if (status) {
        setSongLyrics([ ...songLyrics, status ])
    }
  }, [status])
  

     return (
      <Form>
      {touched.artist && errors.artist && <p className='error'>{errors.artist}</p>}
      <Field type="text" name="artist" placeholder="Artist" />

         {touched.title && errors.title && <p className='error'>{errors.title}</p>}
      <Field type="text" name="title" placeholder="Song Title" />

      <Field component="textarea" name="lyrics" placeholder="Lyrics" />

      <button type="submit">Submit</button>

      {songLyrics.map(songLyric => (
           <div>Species: {songLyric.title}</div>
         ))}

      </Form>
  )
}

export default withFormik({
    mapPropsToValues: (values) => {
    
      return {
      
        artist: values.artist || '',
        title: values.title || '',
        lyrics: values.lyrics || ''
    }
}, 
validationSchema: yup.object().shape({
    artist: yup.string().required('Artist is required'),
    title: yup.string().required('Title is required'),
    lyrics: yup.string()

}),
handleSubmit: (values, { setStatus }) => {
  axios.post("", values)
  .then((response) => {
    setStatus(response.data)
  })
  .catch((error) => {
    console.log('Error:', error)
  })
 }
})(TitleForm);