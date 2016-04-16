var fortunes = [
	"Conquer your fears, or your fears will conquer you",
	"Rivers need springs",
	"Whenever possible, keep it simple",
	"You will have a pleasant surprise",
	"Do not fear what you dont know"
];

exports.getFortune = function() {
	return fortunes[Math.floor(Math.random() * fortunes.length)];
}
