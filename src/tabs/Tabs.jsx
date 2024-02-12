import { useState, useEffect } from "react";
import './style.css';
import Jobs from "./Jobs";
import Btnscontainer from "./Btnscontainer";



const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [getTabs, setGetTabs] = useState([]);
    const [currentItem, setCurrenItem] = useState(0);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();
            setGetTabs(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <section className='jobs-center'>
                <div className='loading'></div>
            </section>
        );
    }
    return (

        <section className="jobs-center">

            <Btnscontainer getTabs={getTabs} currentItem={currentItem} setCurrenItem={setCurrenItem} />
            <Jobs getTabs={getTabs} currentItem={currentItem} />
        </section>
    )
}

export default Tabs;