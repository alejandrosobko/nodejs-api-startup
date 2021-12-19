import { Response } from 'express';
import { PostServices } from '../services/post.service';

export class PostController {

    private postServices: PostServices;

    constructor() {
        this.postServices = new PostServices();
    }

    public create = async (req: any, res: Response) => {
        const body = req.body;
        try {
            const data = await this.postServices.create(body);
            res.status(200).send(data);
        } catch (error) {
            console.log(error);
            res.status(400).send(error)
        }
    }
}