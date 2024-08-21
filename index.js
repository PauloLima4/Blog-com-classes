const Author = require('./Author');
const Comment = require('./Comment');
const Post = require('./Post');

// Exemplo de uso:
// Nome do Autor
const author = new Author('João');

// Conteúdo do Post
const post = author.createPost('Meu primeiro post', 'Este é o conteúdo do meu primeiro post.');

// Novos comentários
const comment1 = new Comment('Ótimo post!');
const comment2 = new Comment('Muito interessante.');

// Adicionando comentários
post.addComment(comment1);
post.addComment(comment2);

// Visualização de tudo
console.log(`Autor: ${post.author.name}`);
console.log(`Título: ${post.title}`);
console.log(`Conteúdo: ${post.content}`);
console.log('Comentários:');
post.comments.forEach(comment => {
    console.log(`- ${comment.content}`);
});
