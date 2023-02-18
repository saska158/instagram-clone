const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.png",
        post: "images/post-vangogh.png",
        comment: "just took a few mushrooms lol",
        likes: 21,
        id: 1
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.png",
        post: "images/post-courbet.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        id: 2
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.png",
        post: "images/post-ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        id: 3
    }
]



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
    const targetPost = posts.filter(post => post.id == postId)[0]
    if(!targetPost.isLiked) { targetPost.likes ++ }
    else { targetPost.likes }
    targetPost.isLiked = true;
   
    
    render()
}


function handleLikeClick(postId) {
    const targetPost = posts.filter(post => post.id == postId)[0]
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
                    <img src="${post.post}" data-id="${post.id}">
                    <i class="fa-solid fa-heart white-heart ${whiteHeartAppearClass}" id="white-heart-${post.id}"></i>
                </div>
                <div class="post-details">
                <i class="fa-regular fa-heart ${likeIconClass}" id="${post.id}" data-heart="${post.id}"></i> 
                <i class="fa-regular fa-comment" data-comment="${post.id}"></i>  
                <i class="fa-regular fa-paper-plane" data-dm="${post.id}"></i>
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


