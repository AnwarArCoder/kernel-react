import React from 'react';
import './statistic.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';


function Statistic() {

    const [statisticList, setStatisticList] = useState([]);

    useEffect(() => {
        axios.get('fakeData/db.json').then((res) => {
            setStatisticList(res.data.static)
        })
    }, [])

    return (
        // :: statistic
        <div className="statistic">
            <div className="container">
                <div className="row">
                    {
                        statisticList.map((item) => {
                            return (
                                <div className="col-sm-6 col-md-6 col-lg-3" key={item.id}>
                                    <div className="statistic-box">
                                        <div className="overlay"></div>
                                        <div className="box-content">
                                            <CountUp className="count" end={item.count} />
                                            <div className="name-count">{item.nameCount}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Statistic