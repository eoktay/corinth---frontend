import React, { useState } from 'react';
import './imagePicker.css';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const ImagePicker = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleImageChange = (e) => {
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
			console.log(setSelectedFiles)
		}
	};

	const renderPhotos = (source) => {

		return source.map((photo) => {
			console.log(photo)
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="imagePicker">
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
				<label htmlFor="file" className="label">
						<i className="material-icons">
					<AddPhotoAlternateIcon  style={{ fontSize: 30 }}/>
							Add Photo
						</i>
					</label>
						
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
		</div>
	);
};

export default ImagePicker;