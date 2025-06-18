import {useEffect, useState} from "react";
import {getChannelAPI} from "@/apis/article";

function useChannel(){
    const [channelList,setChannelList] = useState([])
    const getChannelList = async()=>{
        const res = await getChannelAPI();
        console.log(res.data.channels)
        setChannelList(res.data.channels)
    }
    useEffect(() => {
        getChannelList()
    }, []);
    return {
        channelList
    }
}

export {useChannel}