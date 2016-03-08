var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ag_screen_app');

var Screenplay = require('./models/screenplay');

var ourScreenplay = new Screenplay({
	title:"The Wages of Sin",
	screenwriter:"Peter Forbes",
	tagline: "What did they leave out of the bible? The Vampires!",
	logline:"The greatest sin ever, is the crucifixion of Christ.  Pontius Pilate tried to wash his hands of that sin and is cursed with immortality until atonement.  Pilate’s  sin  let  Christ’s  blood  be  spilled  and  as  in  Revelation  16:6, for they have shed the blood of His saints and prophets and been given blood to drink as they deserve. And so vampires were created.  Now, after two millennia, the Holy Grail, an artery for vampire creation is back and it’s tearing apart New York City.  The only man who can stop it...The worst sinner in history. "
});
ourScreenplay.save(function(err){
  if(err) console.log(err);
  console.log("New script created");
});

var ourScreenplay = new Screenplay({
	title:"Downing",
	screenwriter:"Peter Forbes",
	tagline: "It was just a kiss",
	logline:"Teen John finds he is the only gay guy at a party and being kissed by straight boy Daniel doesn’t help. However it is after best friend Chloe if fucked by Daniel while semi-conscious and John confronts him that the night really heats up. Boy kisses boy, drinking, fucking and regret: Just another teenage party. "
});

ourScreenplay.save(function(err){
  if(err) console.log(err);
  console.log("New script created");
});
