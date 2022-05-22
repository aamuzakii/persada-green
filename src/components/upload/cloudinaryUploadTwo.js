import CryptoJS from 'crypto-js';
import { CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_SECRET } from '../../../env';

export function useUploadToCloudinary(uri) {

// Thanks to https://gist.github.com/nandorojo/7063a8d15bd3bb235949882f14674985

		let contentType = 'image'

		const API_KEY = CLOUDINARY_API_KEY;
		const SECRET = CLOUDINARY_SECRET;
		const CLOUD_NAME = CLOUDINARY_CLOUD_NAME;

		const timestamp = ((Date.now() / 1000) | 0).toString();
		const apiKey = API_KEY;
		const apiSecret = SECRET;
		const cloud = CLOUD_NAME;
		const hashString = `timestamp=${timestamp}${apiSecret}`;
		const signature = CryptoJS.SHA1(hashString).toString();
		const uploadUrl = `https://api.cloudinary.com/v1_1/${cloud}/${contentType}/upload`;

		let array = uri.split('.');
		let fileEnding = array[array.length - 1].toLowerCase();
		fileEnding = fileEnding || 'jpg';

		const formData = new FormData();

		formData.append('file', {
			uri: uri,
			type: `${contentType}/${fileEnding}`,
			name: `upload.${fileEnding}`,
		});
		formData.append('timestamp', timestamp);
		formData.append('api_key', apiKey);
		formData.append('signature', signature);



    let header = new Headers();
    // header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
			body: formData
    };
    
    return fetch(uploadUrl, requestOptions)
      .then(response => response.json())
      .then(result => {
				console.log(result.secure_url, `~~~~~~`)
				return result.secure_url
      })
      .catch(error => console.error('error', error));
}