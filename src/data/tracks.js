import axios from "axios"; // Import Axios or another library for making HTTP requests

async function getTracks() {
    try {
        const song=`yeh shaam mastani`
        const response = await axios.get(
            `https://saavn.me/search/songs?query=${song}&page=1&limit=5`
        );

        const datas = response.data;

        // Extract information for each song and store it in a variable named 'tracks'
        const tracks = datas.data.results.map((song) => {
            return {
                title: song.name,
                author: song.primaryArtists,
                src: song.downloadUrl[4].link, // Song link
                thumbnail: song.image[2].link, // Accessing the first image quality
            };
        });

        return tracks;
    } catch (error) {
        // Handle the error
        console.error("Error fetching data:", error);
        return [];
    }
}

export const tracks = await getTracks();
