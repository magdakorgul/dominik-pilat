import {useEffect, useState} from 'react';
// import axios from 'axios';
import "../../src/App.css";
import LargeGrid from '../components/LargeGrid';

const Paintings = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/paintings/data.json')
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.log('Error fetching the data', err));
    }, []);

    return (
        <div>
            <LargeGrid items={items} basePath="paintings" showPrice={true} />
        </div>
    );
};

export default Paintings;