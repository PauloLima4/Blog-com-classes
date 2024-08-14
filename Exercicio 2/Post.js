class Post {
    constructor(author, title, content) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.comments = [];
    }
    // Adição de comentários
    addComment(comment) {
        this.comments.push(comment);
    }
}

module.exports = Post;