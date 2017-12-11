import { CLOUDINARY_UPLOAD_PATH, PRESET_NAME } from '../constants/globalConstants';

export function uploadImage(image) {
	return new Promise((resolve, reject) => {
        let formData = new FormData();

        formData.append("upload_preset", PRESET_NAME);
        formData.append("file", image);

        fetch(CLOUDINARY_UPLOAD_PATH, {
            method: 'post',
            body: formData
        })
            .then(response => response.json())
            .then(answer => {
                resolve(answer.url);
            })
            .catch(error => {
                reject(error.toString());
            })
	});
}