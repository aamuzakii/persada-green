import CryptoJS from 'crypto-js';
import { CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_SECRET } from '../../../env';

// Thanks to https://gist.github.com/nandorojo/7063a8d15bd3bb235949882f14674985

// make sure you fill these out:
const API_KEY = CLOUDINARY_API_KEY;
const SECRET = CLOUDINARY_SECRET;
const CLOUD_NAME = CLOUDINARY_CLOUD_NAME;

export function useUploadToCloudinary(uri) {
	// const [isUploading, setIsUploading] = useState(true);
	// const [hasErrored, setError] = useState(false);
	// const [response, setResponse] = useState(null);
	// const [progress, setProgress] = useState(0);
	// const [uploadedUrl, setUploadedUrl] = useState('');
	let isUploading
	let hasErrored
	let response
	let progress
	let uploadedUrl

	const mulai = ( uri, contentType	) => {
		contentType = 'image'
		try {
			if (!uri) {
				throw new Error('missing URI to upload...😔');
			} else if (!contentType) {
				throw new Error('missing contentType to upload...📸📹');
			}
			const timestamp = ((Date.now() / 1000) | 0).toString();
			const apiKey = API_KEY;
			const apiSecret = SECRET;
			const cloud = CLOUD_NAME;
			const hashString = `timestamp=${timestamp}${apiSecret}`;
			const signature = CryptoJS.SHA1(hashString).toString();
			const uploadUrl = `https://api.cloudinary.com/v1_1/${cloud}/${contentType}/upload`;

			const xhr = new XMLHttpRequest();
			xhr.open('POST', uploadUrl);
			xhr.onload = () => {
				const res = JSON.parse(xhr.response);
				// if (callback) callback(res);
				response = res;
				uploadedUrl = res.secure_url
				console.log(res)
			};
			xhr.onerror = e => {
				console.log(e, '🚨 story upload failed, never properly sent to cloudinary');
			};
			xhr.ontimeout = e => {
				console.warn(e, '⏰ cloudinary upload timed out');
			};

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
			xhr.send(formData);
			if (xhr.upload) {
				xhr.upload.onprogress = ({ total, loaded }) => {
					// setProgress(loaded / total);
				};
			}
		} catch (e) {
			console.error('upload to cloudinary hook error', e);
		}
	};

	mulai (uri, 'image')

	return uploadedUrl
}