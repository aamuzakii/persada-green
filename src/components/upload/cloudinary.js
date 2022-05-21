const cloudinaryUpload = (photo) => {
  const data = new FormData()
  data.append('file', photo)
  data.append('upload_preset', 'ogcodes')
  data.append("cloud_name", "ogcodes")
  fetch("https://api.cloudinary.com/v1_1/ogcodes/upload", {
    method: "post",
    body: data
  })
  .then(res => res.json())
  .then(data => {
      setPhoto(data.secure_url)
    })
    .catch(err => {
      Alert.alert("An Error Occured While Uploading")
      console.log(err)
    })
}