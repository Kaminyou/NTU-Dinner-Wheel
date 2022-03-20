import axios from 'axios';
import React, { useEffect, useState } from "react";
import BasicMenu from '../components/manu';
import WheelComponent from '../components/wheel';
import configData from "../config.json";

function Wheel() {
    const [loadFlag, setLoadFlag] = useState(true);
    const [listName, setListName] = useState("");
    const [listNameList, setListNameList] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    const [candidateList, setCandidateList] = useState([]);
    const [colorPalette, setcolorPalette] = useState([]);

    const defaultColorPalette = configData.COLOR_PALETTE

    const repeatArray = (array, repeats) => {
        return  Array.from({ length: repeats }, () => array).flat();
    }

    const getRestaurant = () => {
        axios.get(`https://opensheet.vercel.app/${configData.SPREADSHEET_ID}/${configData.SHEET_NAME}`)
        .then((res) => { 
            setRestaurantData(res.data);
            setListName(Object.keys(res.data[0])[0]);
        })
        .catch((error) => { 
            setLoadFlag(false);
            console.error(error);
            }
        )
    }

    // Fisher-Yates shuffle
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
    } 
    
    const getCandidate = () => {
        let candidateTemp = [];
        if (restaurantData.length > 0) {
            setListNameList(Object.keys(restaurantData[0]));
        }
        restaurantData.forEach(element => {
            if (listName in element){
                if (element[listName] !== '') candidateTemp.push(element[listName]);
            }
        });
        shuffle(candidateTemp);
        setCandidateList(candidateTemp);
        let repeats = Math.ceil(candidateTemp.length / defaultColorPalette.length);
        setcolorPalette(repeatArray(defaultColorPalette, repeats));
    }

    const onFinished = (winner) => {
        console.log(winner)
      }

    useEffect(() => {
        getRestaurant();
    }, []);

    useEffect(() => {
        setCandidateList([])
        getCandidate();
    }, [restaurantData, listName]);

    

    return (
        (candidateList.length > 0) ?(
        <div className='wheelwrapper'>
            <BasicMenu restaurantListList={listNameList} setListName={setListName} currentListName={listName}/>
            <WheelComponent
                segments={candidateList}
                segColors={colorPalette}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={200}
                upDuration={configData.UP_DURATION}
                downDuration={configData.DOWN_DURATION}
                fontFamily='Arial'
            />
        </ div>
        ) : (loadFlag ? (<p>Loading ...</p>):(<p>Error!</p>))
    );

}

export default Wheel;