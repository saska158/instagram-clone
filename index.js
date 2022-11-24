import { posts } from './data.js'

posts.forEach(post => post.isLiked = false)


document.addEventListener('dblclick', function(e)  {
  if(e.target.dataset.id) {
      handleLikeDoubleClick(e.target.dataset.id)
  }
    }
)

document.addEventListener('click', function(e) {
    if(e.target.dataset.heart) {
        handleLikeClick(e.target.dataset.heart)
    }
})


function handleLikeDoubleClick(postId) {
    const targetPost = posts.filter(post => post.uuuid === postId)[0]
    if(!targetPost.isLiked) { targetPost.likes ++ }
    else { targetPost.likes }
    targetPost.isLiked = true;
   
    
    render()
}


function handleLikeClick(postId) {
    const targetPost = posts.filter(post => post.uuuid === postId)[0]
    if(!targetPost.isLiked) { targetPost.likes ++ }
    else { targetPost.likes -- }
    targetPost.isLiked = !targetPost.isLiked;
    

    render()
}


function getPostsHtml() {
    let postsHtml = ``;
    
    posts.forEach(post => {
        let likeIconClass = ''
        let whiteHeartAppearClass = ''
        if(post.isLiked) {
            likeIconClass = 'liked fa-solid heart-pump'
            whiteHeartAppearClass = 'visible'
        }

    
        postsHtml += `
          <section class="post">
                <div class="avatar-info">
                    <img class="avatar-img" src="${post.avatar}">
                    <span>
                        <strong class="avatar-name">${post.name}</strong>
                        <p class="avatar-location">${post.location}</p>
                    </span>
                </div>
                <div class="post-img">
                    <img src="${post.post}" data-id="${post.uuuid}">
                    <i class="fa-solid fa-heart white-heart ${whiteHeartAppearClass}" id="white-heart-${post.uuuid}"></i>
                </div>
                <div class="post-details">
                <i class="fa-regular fa-heart ${likeIconClass}" id="${post.uuuid}" data-heart="${post.uuuid}"></i> 
                <i class="fa-regular fa-comment" data-comment="${post.uuuid}"></i>  
                <i class="fa-regular fa-paper-plane" data-dm="${post.uuuid}"></i>
                    <p class="likes">${post.likes} likes</p>
                </div>
                <div class="post-comments">
                    <strong>${post.username}</strong>
                    <span>${post.comment}</span>
                </div>
            </section>`
    })
   
    
    return postsHtml
}

function render() {
    document.getElementById('feed').innerHTML = getPostsHtml();
}

render();


