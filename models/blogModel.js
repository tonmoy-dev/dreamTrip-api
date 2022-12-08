const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const TagSchema =  Schema({ any: Array });
const CommentSchema =  Schema({ any: Array });

const blogSchema = Schema({
    /* _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: '',
    }, */
    blog_id: Number,
    author: {
      name: String,
      profile_img: String,
      username: String
    },
    title: String,
    sub_title: String,
    description: String,
    images: {
      thumbnail: String,
      alt: String,
    },
    published_at: String,
    reading_time: String,
    tag_list: TagSchema,
    reaction_counts: [
      {
        category: String,
        count: Number
      },
      {
        category: String,
        count: Number
      },
      {
        category: String,
        count: Number,
        comments: CommentSchema
      }
    ]
});

/*blogSchema.path('thumbnail_url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL');*/


module.exports = model('Blog', blogSchema);
