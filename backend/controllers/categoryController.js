const Category = require('../models/category');
const Blog = require('../models/blog');
const slugify = require('slugify');
const formidable = require('formidable');
const { errorHandler } = require('../helpers/dbErrorHandler');
const fs = require('fs');
const _ = require('lodash');

exports.create = (req, res) => {
  console.log('create');
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not upload',
      });
    }
    const { name, categoryDesc } = fields;
    let slug = slugify(name).toLowerCase();

    let category = new Category({ name, slug, categoryDesc });

    if (files.photo) {
      if (files.photo.size > 10000000) {
        return res.status(400).json({
          error: 'Image should be less then 1mb in size',
        });
      }

      category.categoryPhoto.data = fs.readFileSync(files.photo.path);
      category.categoryPhoto.contentType = files.photo.type;
    }

    category.save((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
  });
};

exports.list = (req, res) => {
  // console.log('list:');
  Category.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  //console.log('read')

  Category.findOne({ slug }).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    //later will response blog that in same category
    // res.json(category);
    Blog.find({ categories: category, showing: true })
      .populate('categories', '_id name slug')
      .populate('tags', '_id name slug')
      .populate('postedBy', '_id name')
      .select(
        '_id title slug excerpt categories postedBy tags createdAt updatedAt'
      )
      .exec((error, data) => {
        if (error) {
          return res.status(400).json({
            error: errorHandler(error),
          });
        }
        // console.log(listCategories)
        Category.find({}).exec((err, listCategories) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          res.json({
            category: category,
            blogs: data,
            listCategories: listCategories,
          });
        });
      });
  });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  // console.log('remove')
  Category.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    //later will response blog that in same category
    res.json({
      message: 'Category deleted !',
    });
  });
};

exports.photo = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  //console.log('category photo')
  Category.findOne({ slug })
    .select('categoryPhoto')
    .exec((err, category) => {
      if (err || !category) {
        console.log(err);
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.set('Content-Type', category.categoryPhoto.contentType);
      return res.send(category.categoryPhoto.data);
    });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  //console.log('slug update : ',slug)
  Category.findOne({ slug }).exec((err, oldCategory) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: 'Image could not upload',
        });
      }
      let oldSlug = oldCategory.slug;
      oldCategory = _.merge(oldCategory, fields);
      oldCategory.slug = oldSlug;

      // const { name, categoryDesc } = fields;
      // oldCategory.name = name;
      // oldCategory.categoryDesc = categoryDesc;
      //  console.log('oldCategory: ',oldCategory.photo)
      if (files.photo) {
        if (files.photo.size > 10000000) {
          return res.status(400).json({
            error: 'Image should be less then 1mb in size',
          });
        }
        oldCategory.categoryPhoto.data = fs.readFileSync(files.photo.path);
        oldCategory.categoryPhoto.contentType = files.photo.type;
      }

      oldCategory.save((err, result) => {
        if (err) {
          // console.log('err: ',err)
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json(result);
      });
    });
  });
};
