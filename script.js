// Provided helper
function getImageFromUpload(){
  let image = document.querySelector("#imageUpload").files[0]
  return URL.createObjectURL(image)
}

//so, i recently learned about the DOMContentLoaded listener that ensures the dom has 
//loaded before you try to interact with it with JS -- seems useful, but I didn't use it here
// it just makes sure none of your elements come back null because of the JS loading too fast,
//but JS almost never loads faster than the DOM, so I haven't had it cause an issue before
  const usernameInput = document.getElementById('username')
  const postTextInput = document.getElementById('postText')
  const imageUpload = document.getElementById('imageUpload')
  const imageStyle = document.getElementById('imageStyle')

  const profileName = document.querySelector('.profile-name')
  const postText = document.querySelector('.post-text')
  const previewImage = document.getElementById('previewImage')

  const DEFAULT_TEXT = 'Your post will show here...'
  let lastObjectUrl = null

  // live preview
  usernameInput.addEventListener('input', () => {
    profileName.textContent = usernameInput.value || 'User Name'
  })

  // live text with default fallback
  postTextInput.addEventListener('input', () => {
    const val = postTextInput.value.trim()
    postText.textContent = val ? val : DEFAULT_TEXT
  })

  // image upload and preview
  imageUpload.addEventListener('change', () => {
    if (lastObjectUrl) URL.revokeObjectURL(lastObjectUrl)
    if (!imageUpload.files || !imageUpload.files[0]) return

    const url = getImageFromUpload()
    lastObjectUrl = url
    previewImage.src = url
  })

  // image style selector
  imageStyle.addEventListener('change', () => {
    const style = imageStyle.value
    previewImage.className = `post-image ${style}`
  })

  // rendering
  previewImage.className = `post-image ${imageStyle.value}`
  postText.textContent = DEFAULT_TEXT
