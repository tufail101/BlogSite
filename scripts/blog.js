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
        <div class="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden mx-3 my-3">
        <img class="w-full h-48 object-cover" src="${blog.image}" alt="Card Image">
        <div class="p-5">
            <h2 class="text-xl font-bold text-gray-800">${blog.title}</h2>
            <p class="text-gray-600 mt-2">${blog.content}</p>
            <button class="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Read More
            </button>
        </div>
    </div>
        `;
        container.appendChild(posts)
    });
  })
  .catch(error => {
    console.error("Error fetching the JSON file:", error);
  });
