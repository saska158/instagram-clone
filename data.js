import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.png",
        post: "images/post-vangogh.png",
        comment: "just took a few mushrooms lol",
        likes: 21,
        uuuid: uuidv4()
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.png",
        post: "images/post-courbet.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        uuuid: uuidv4()
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.png",
        post: "images/post-ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        uuuid: uuidv4()
    }
]

