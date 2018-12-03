var app = require("express")();

var posts = [
	{
		id: 1,
		author: "john",
		title: "test",
		body: "first test"
	},
	{
		id: 2,
		author: "test2",
		title: "test2title",
		body: "test2body"
	},
	{
		id: 3,
		author: "test3",
		title: "test3title",
		body: "test3body"
	}
];

app.set("view engine", "ejs");

app.get('/', function(req, res) {
	res.render('home', {posts: posts})
})

app.get('/post/:id', function(req, res) {
	var post = posts.filter(function(post) {
		return post.id == req.params.id
	})


	res.render('post', {
		author: post.author,
		title: post.title,
		body: post.body
	})
})

app.listen(8080)

console.log("listening on port 8080");

