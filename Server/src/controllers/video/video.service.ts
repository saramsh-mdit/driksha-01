import { IsNull, Not } from 'typeorm';

import { AppDataSource } from '../../data-source';
import { Videos } from '../../entities/videos';
import { Users } from '../../entities/users';
import { VideoInfo } from '../../entities/videoInfo';
import { VideoType, VideoValidator } from '../../utils/validation';
import { SucessResponce, ErrorResponce } from '../../@types/responceTypes';

const VideosSource = AppDataSource.getRepository(Videos);
const VideosInfoSource = AppDataSource.getRepository(VideoInfo);

const UsersSource = AppDataSource.getRepository(Users);

export const getVideos = async () => {
  try {
    const allVideos = await VideosSource.find();
    return {
      message: 'Request Successful',
      data: allVideos,
    } as SucessResponce;
  } catch (err) {
    console.log(err);
    throw {
      message: 'Some Error Occured',
      data: [],
    } as ErrorResponce;
  }
};

export const getLiveVideos = async () => {
  try {
    const allVideos = await VideosSource.find({
      relations: {
        videoInfo: true,
      },
      where: {
        videoInfo: Not(IsNull()),
      },
    });
    return {
      message: 'Request Successful',
      data: allVideos,
    } as SucessResponce;
  } catch (err) {
    console.log(err);
    throw {
      message: 'Some Error Occured',
      data: [],
    } as ErrorResponce;
  }
};

export const addVideo = async (videoData: VideoType) => {
  try {
    const parsedData: VideoType = await VideoValidator.parseAsync(videoData);

    const User = await UsersSource.findOne({
      where: {
        _id: parsedData.userId,
      },
    });

    const newVideo = new Videos();
    newVideo.user = User;
    newVideo.title = parsedData.title;
    newVideo.description = parsedData.description;
    const data = await VideosSource.save(newVideo);

    return {
      message: 'User added successfully',
      data: data,
    } as SucessResponce;
  } catch (err) {
    console.log(err);
    throw {
      message: 'Some Error Occured',
      data: [],
      error: err,
    } as ErrorResponce;
  }
};

export const deleteVideo = async (id: string) => {
  try {
    const video = await VideosSource.findOne({
      where: {
        _id: id,
      },
    });
    const data = await VideosSource.remove(video);

    return {
      message: 'Deleted video successfully',
      data: data,
    } as SucessResponce;
  } catch (err) {
    console.log(err);
    throw {
      message: 'Some Error Occured',
      data: [],
      error: err,
    } as ErrorResponce;
  }
};

export const addVideoInfo = async ({
  fileData,
  videoId,
}: {
  fileData: any;
  videoId: string;
}) => {
  try {
    const video = await VideosSource.findOne({
      where: {
        _id: videoId,
      },
    });

    const newVideo = new VideoInfo();

    newVideo.fieldname = fileData?.fieldname;
    newVideo.originalname = fileData?.originalname;
    newVideo.encoding = fileData?.encoding;
    newVideo.mimetype = fileData?.mimetype;
    newVideo.destination = fileData?.destination;
    newVideo.filename = fileData?.filename;
    newVideo.path = fileData?.path;
    newVideo.size = fileData?.size;

    const savedVideo = await VideosInfoSource.save(newVideo);

    video.videoInfo = savedVideo;
    const data = await VideosSource.save(video);

    return {
      message: 'Video file added successfully',
      data,
    } as SucessResponce;
  } catch (err) {
    console.log(err);
    throw {
      message: 'Some Error Occured',
      data: [],
      error: err,
    } as ErrorResponce;
  }
};
