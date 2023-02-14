import { Router } from 'express';

import logger from '../../utils/logger/index';
import { addVideo, addVideoInfo, deleteVideo, getLiveVideos, getVideos } from './video.service';
import uploadMiddleware from '../../middleware/uploadMiddleware';

const VideoController = Router();
VideoController.get('/', async (_, res) => {
  try {
    const data = await getVideos();
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);
  }
});

VideoController.get('/live', async (_, res) => {
  try {
    const data = await getLiveVideos();
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);
  }
});

VideoController.post('/', async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    const data = await addVideo({ userId, title, description });
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);
  }
});

// VideoController.get('/:name', async (req, res) => {
//   try {
//     const { name } = req.params;

//     const data = await getUser(name);
//     res.status(200).send(data);
//   } catch (err) {
//     logger.error(err);
//     res.sendStatus(404);
//   }
// });
VideoController.delete('/', async (req, res) => {
  try {
    const { id } = req.body;
    const data = await deleteVideo(id);
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);
  }
});

// Video File Upload
VideoController.post("/upload", uploadMiddleware.single("video"), async (req, res) => {
  try {
    const fileData = {...req.file};
    const videoId = req.body?.videoId;
    const result = await addVideoInfo({fileData, videoId});
    res.send(result);
  }
  catch (err) {
    res.status(400).send(err)
  }
})

export default VideoController;
