import { Router } from "express";
import * as controllers from "../controllers/posts.js";

const router = Router();

router.get("/posts", controllers.getPosts);
router.get("/posts/:id", controllers.getPost);
router.post("/posts", controllers.createPost);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);

export default router;

/* adding those routes, to router
posts, does get, etc.
forming router OBJECT and exporting that, with all of the routes (and corresponding controllers)

*/
