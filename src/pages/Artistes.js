import React from 'react';
import axios from 'axios';
import { URL_PERSON, URL_IMG, IMG_SIZE_LARGE, API_KEY } from '../config';


const Artistes = (props) => {
    console.log(props)
    const id = props.match.params.id;
    const fetchActors = async () =>{
        const data = await axios.get()
    }
    return (
        <div>
            {
                id
            }
        </div>
    );
};

export default Artistes;