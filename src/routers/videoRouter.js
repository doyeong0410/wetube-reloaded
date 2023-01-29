import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoControllers";
import { protectorMiddleware, videoUpload } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-a9-f]{24})", watch);
videoRouter
  .route("/:id([0-a9-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-a9-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
videoRouter
  .route("/upload")
  .get(getUpload)
  .all(protectorMiddleware)
  .post(videoUpload.fields([{ name: "video" }, { name: "thumb" }]), postUpload);

export default videoRouter;
