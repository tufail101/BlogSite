const container=document.getElementById("container")
fetch("./data/blog.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Logs the actual blog data
    data.blogs.forEach(blog => {
        console.log(blog.content);
        let posts=document.createElement("div")
        posts.innerHTML=`
        <div class='card'>
        <h3>${blog.title}</h3>
        </div>
        `;
        container.appendChild(posts)
    });
  })
  .catch(error => {
    console.error("Error fetching the JSON file:", error);
  });
