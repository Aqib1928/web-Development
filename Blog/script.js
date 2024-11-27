const blogs = {
    1: {
        title: "Introduction to Web Development",
        content: `
            <p>Web development is the process of creating websites and web applications. It involves using technologies like HTML, CSS, and JavaScript to build visually appealing and functional web pages.</p>
            <p>HTML provides the structure, CSS adds styling, and JavaScript brings interactivity.</p>
        `
    },
    2: {
        title: "Understanding Flexbox",
        content: `
            <p>Flexbox is a CSS layout model that allows you to design responsive and flexible web layouts. It simplifies tasks like centering elements and distributing space.</p>
            <p>Learn properties like 'justify-content', 'align-items', and 'flex-wrap' to master Flexbox.</p>
        `
    }
};

function viewBlog(blogId) {
    const blogDetail = document.getElementById("blog-detail");
    const blogContent = document.getElementById("blog-content");
    const blogList = document.getElementById("blog-list");

    blogList.style.display = "none";
    blogDetail.style.display = "block";

    blogContent.innerHTML = `
        <h2>${blogs[blogId].title}</h2>
        ${blogs[blogId].content}
    `;
}

function backToList() {
    document.getElementById("blog-list").style.display = "block";
    document.getElementById("blog-detail").style.display = "none";
}
