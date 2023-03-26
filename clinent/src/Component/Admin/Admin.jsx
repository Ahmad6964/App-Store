import { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [imageUrl, setImageUrl] = useState(null);

   const imageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const res = await axios.post('/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(res.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
   };
  

  return (
    <div className="max-w-md mx-auto mt-16">
      <form >
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Choose an image to upload:</label>
          <input type="file" name="image" id="image" className="border border-gray-400 p-2 w-full" />
        </div>
        <button onClick={imageUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upload Image
        </button>
      </form>
      {imageUrl && (
        <div className="mt-4">
          <img src={imageUrl} alt="Uploaded Image" className="max-w-full" />
        </div>
      )}
    </div>
  );
};

export default Admin;
