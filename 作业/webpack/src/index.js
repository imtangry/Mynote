import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/header';
import Content from './js/content';

var users = [
    {
        id: 1,
        name: "kat",
        link: "friends",
        descp: "你好啊，你好",
        year: 2018,
        likes: 70
    },
    {
        id: 2,
        name: "Bob",
        link: "brother",
        descp: "帮个忙",
        year: 2017,
        likes: 345
    }
    ,
    {
        id: 3,
        name: "Harry",
        link: "Tom",
        descp: "nice",
        year: 2017,
        likes: 130
    },
    {
        id: 4,
        name: "Lulu",
        link: "what",
        descp: "你肿么了",
        year: 2015,
        likes: 440
    },
    {
        id: 5,
        name: "Moy",
        link: "JoJo",
        descp: "你知道么",
        year: 2016,
        likes: 600
    },
    {
        id: 6,
        name: "Miya",
        link: "none",
        descp: "so sad",
        year: 2017,
        likes: 700
    },
    {
        id: 7,
        name: "Lily",
        link: "sister",
        descp: "Heyyyyyyyy",
        year: 2016,
        likes: 80
    },
    {
        id: 8,
        name: "Tom",
        link: "friends",
        descp: "你好啊，你好啊啊",
        year: 2017,
        likes: 990
    }
];

ReactDOM.render(
    <div>
        <Header/>
    </div>,
    document.getElementById("header")
);
ReactDOM.render(
    <div>
        <Content {...users}/>
    </div>,
    document.getElementById("content")
);


