import React, { useEffect, useState }  from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { getShowEpisodes } from "../../api/tmdb-api";

export default function ColorTabs({show , season}) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getShowEpisodes(show.id , season).then((episodes) => {
      setEpisodes(episodes);
      console.log(episodes)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      {episodes?.map((episodes) => (
        <>
         <Tab
            label={episodes.season}
            id={episodes.id}
            ariaControls={"episodes"}
         />
        </>
       ))}
    </Box>
  );
}