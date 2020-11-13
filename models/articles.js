const mongoose = require('mongoose');

const Article = require('../models/articles.js');


const scheduleSchema = new Schema({
    sunday: {
      type: String,
      min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  monday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  tuesday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  wednesday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  thursday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  friday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
  saturday: {
    type: String,
    min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
    weeknumber: {
      type: Number,
      min: [0, 'Quantity can\'t be less than 0. This ain\'t no charity!']
  },
  iframe: {
      type: String,
      min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
  },
    description: String,
    img: String,
    price: {
      type: Number,
      min: [0, 'Quantity can\'t be less than 0. This ain\'t no charity!']
    },
    qty: {
      type: Number,
      min: [0, 'Price can\'t be less than 0. No capatalist joyrides here!']
    },
    
  })
//...
//...farther down the page
router.post('/', (req, res)=>{
	Article.create(req.body, (err, createdArticle)=>{
		res.redirect('/articles');
	});
});


const articleSchema = mongoose.Schema({
	title:String,
	body:String
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;