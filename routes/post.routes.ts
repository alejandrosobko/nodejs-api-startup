import { PostController } from '../controller/post.controller';
import { validateCreatePost } from '../utils';


export class Routes {
    private routes;
    private postController: PostController;

    constructor() {
        this.postController = new PostController();
    }

    public init(express) {
        this.routes = express.Router();

        this.routes
            .route('/post')
            .post(validateCreatePost, this.postController.create)
    }

    public getRoutes() {
        return this.routes;
    }
}
