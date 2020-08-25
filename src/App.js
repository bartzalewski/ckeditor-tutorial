import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [value, setValue] = useState('');
  const handleChange = (e, editor) => setValue(editor.getData());

  return (
    <div className="container mt-4 w-50">
      <CKEditor editor={ClassicEditor} onChange={handleChange} />
      <h4 className="mt-4">Your output</h4>
      <div className="card p-2 mt-4">
        <span>{value}</span>
      </div>
    </div>
  );
}
