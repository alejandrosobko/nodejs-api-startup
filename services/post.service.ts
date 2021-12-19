const Post = require('../model/post.model');

export class PostServices {

    public create = async (body) => {
        const newPost = Post({
            content: body.content,
            date: new Date()
        })
        await newPost.save()

        return newPost;
    }

}