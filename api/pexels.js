import axios from "axios";
// Ct0WuphsVveEGS4dy0X9rgIEshNQCM3SSp7oPgDza7dzEMMumwOl9yj2

export const getImages = async (searchTerm = 'programming')=> 
    await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`,{
        headers:{
            Authorization: 'Ct0WuphsVveEGS4dy0X9rgIEshNQCM3SSp7oPgDza7dzEMMumwOl9yj2'
        }
    });