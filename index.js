// Wordpress API
const url = "https://fedup.flowerpoweraveroy.one/wp-json/wp/v2/posts?per_page=100"

// Fetch information from Wordpress API
async function getPosts() {
    const response = await fetch(url)
    const posts = await response.json()
    createPosts(posts)
}

// Target element to show posts
const postContainer = document.querySelector(".postsContainer")

// Generate HTML from API
function createPosts(posts) {
    postContainer.innerHTML += `<h1>Fed up posts:</h1>`
    for (let i = 0; i < posts.length; i++) {
        postContainer.innerHTML += `
        <div class="card">
            <img src="${posts[i].jetpack_featured_media_url}" alt="Image of a cupcacke"></img>
            <h2>${posts[i].title.rendered}</h2>
            ${posts[i].content.rendered}
        </div>
        `
    }
}

getPosts()


