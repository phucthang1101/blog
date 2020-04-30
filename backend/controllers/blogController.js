const Blog = require('../models/blog');
const Category = require('../models/category');
const Tag = require('../models/tag');

// deal with form instead of req.body.data
const formidable = require('formidable');

//generate slug
const slugify = require('slugify');

//like ckeditor
const stripHtml = require('string-strip-html');

//update blog
const _ = require('lodash');

//send mongo error to frontend
const { errorHandler } = require('../helpers/dbErrorHandler');

//file stream
const fs = require('fs');

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  console.log('formidable: ', form);

  //keep original extension in form
  form.keepExtensions = true;

  //keep data as JS object
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not upload',
      });
    }

    const { title, body, categories, tags, showing } = fields;

    if (!title || !title.length) {
      return res.status(400).json({
        error: 'title is required',
      });
    }

    if (!body || !body.length) {
      return res.status(400).json({
        error: 'Content is too short',
      });
    }

    if (!categories || !categories.length === 0) {
      return res.status(400).json({
        error: 'At least 1 category is required',
      });
    }

    if (!tags || !tags.length) {
      return res.status(400).json({
        error: 'At least 1 tag is required',
      });
    }

    let blog = new Blog();
    blog.title = title;
    blog.body = body;
    blog.slug = slugify(title).toLowerCase();
    blog.mtitle = `${title} | ${process.env.APP_NAME}`;
    blog.mdesc = stripHtml(body.substring(0.16));
    blog.postedBy = req.user._id;
    blog.showing = showing;

    //category and tag
    let arrayOfCategories = categories && categories.split(',');
    let arrayOfTags = tags && tags.split(',');
    //handle photo
    if (files.photo) {
      console.log('files.photo: ', files.photo);
      if (files.photo.size > 10000000) {
        return res.status(400).json({
          error: 'Image could not upload',
        });
      }
      blog.photo.data = fs.readFileSync(files.photo.path);
      blog.photo.contentType = files.photo.type;
    }

    blog.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};
