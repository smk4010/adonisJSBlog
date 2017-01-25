'use strict'

const Post = use('App/Model/Post')

const Validator = use('Validator')

class PostController {

  * index (request, response) {
    const posts = yield Post.query().orderBy('id', 'desc').fetch()
    yield response.sendView('home', { posts: posts.toJSON() })
  }

  * create (request, response) {
      yield response.sendView('createPost')
  }

  * store (request, response) {
    const postData = request.only('title', 'content')

    const rules = {
      title: 'required',
      content: 'required'
    }

    const validation = yield Validator.validate(postData, rules)

    if (validation.fails()) {
      yield request
          .withOnly('title', 'content')
          .andWith({ errors: validation.messages() })
          .flash()
      response.redirect('back')
      return
    }

    yield Post.create(postData)
    response.redirect('/')
  }

  * show (request, response) {
    const post = yield Post.find(request.param('id'))
    yield response.sendView('showPost', { post: post.toJSON() })
  }

  * delete (request, response) {
    const post = yield Post.find(request.param('id'));
    yield post.delete();
    response.redirect('/');
}

}

module.exports = PostController
