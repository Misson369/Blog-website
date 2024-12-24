// Get the blog ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');

// Blog data
const blogs = {
    1: {
        title: "Importance of Education",
        content: `
            Education is the key to unlocking countless opportunities in life. 
            It empowers individuals to achieve their dreams, improves decision-making, 
            and contributes to societal development. 
            A good education system fosters creativity, critical thinking, and innovation, 
            laying the foundation for a brighter future.
        `,
    },
    2: {
        title: "Mount Everest",
        content: `
            Mount Everest, the highest peak in the world, stands tall at 8,848 meters (29,029 feet). 
            Located in the Himalayas, it symbolizes adventure and resilience. 
            Every year, climbers from around the world attempt to reach its summit, facing 
            extreme weather and challenging terrains. It remains a global icon of natural beauty and human determination.
        `,
    },
};

// Reference to the blog content container
const blogContent = document.getElementById('blog-content');

// Display the blog content dynamically
if (blogId && blogs[blogId]) {
    blogContent.innerHTML = `
        <h2>${blogs[blogId].title}</h2>
        <p>${blogs[blogId].content}</p>
    `;
} else {
    blogContent.innerHTML = `
        <h2>Welcome to My Blog</h2>
        <p>Select a blog from the navigation menu to read!</p>
    `;
}