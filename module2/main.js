// Elements Select
const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentList = document.getElementById("commentList");

// Function to Add Comment
addCommentBtn.addEventListener("click", function() {
    const commentText = commentInput.value.trim();
    if (commentText === "") {
        alert("Please write a comment!");
        return;
    }

    // Create Comment Element
    const li = document.createElement("li");
    li.innerHTML = `${commentText} <button class="delete-btn">X</button>`;

    // Append to List
    commentList.appendChild(li);

    // Clear Input
    commentInput.value = "";
});

// Delete Comment Using Event Delegation
commentList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const confirmation = confirm("Are you sure you want to delete this comment?");
        if (confirmation) {
            event.target.parentElement.remove();
        }
    }
});