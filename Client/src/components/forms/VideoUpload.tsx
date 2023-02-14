import React from "react";
import { Button, FileButton, Group, Text } from "@mantine/core";

const VideoUpload = ({ videoId }: { videoId: string }) => {
  const [file, setFile] = React.useState<File | null>(null);

  const uploadHandler = () => {
    if (file && videoId) {
      const data = new FormData();
      data.append("videoId", videoId);
      data.append("video", file!);
      console.log(data)
    }
  };
  return (
    <>
      <Group position="center">
        <FileButton onChange={setFile} accept="video/mp4,video/mkv,video/webm">
          {(props) => <Button {...props}>Select Video</Button>}
        </FileButton>
      </Group>
      {file && (
        <Text size="sm" align="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
      <Button onClick={uploadHandler}>Upload</Button>
    </>
  );
};

export default VideoUpload;
