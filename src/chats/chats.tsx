import React, { useEffect, useRef, useState } from 'react';
import './chats.css';
import Pusher, { Channel } from 'pusher-js';
import axios from 'axios';
import moment from 'moment';

function Chats() {
    const status = useRef(false)
    const pusher = new Pusher(`${process.env.REACT_APP_PUSHER_KEY}`, {
        cluster: 'ap1'
    });
    const [message, setMessage] = useState("");
    const [currentUser, setCurrentUser]: any = useState("");

    const [chat, setChat]: any = useState([
        {
            receiver: 2,
            sender: 1,
            message: "Hello",
            timestamp: "2022-10-14T22:11:20+0000"
        },
        {
            receiver: 1,
            sender: 2,
            message: "Hi",
            timestamp: "2022-10-14T22:11:20+0000"
        },
    ]);



    const sendMessage = () => {
        let payload = {
            "receiver": 2,
            "sender": 1,
            "message": message,
            "timestamp": Date.now()
        }
        setChat((prevState: any) => [...prevState, payload]);
        setMessage("")
        // axios.post('http://localhost:8000/message', payload);
    }

    useEffect(() => {
        setCurrentUser(JSON.parse(sessionStorage.getItem('user') || "").user_id)
        let channel = pusher.subscribe(updateChannel("2"))
        console.log(channel)

        channel.bind('message', (data: any) => {
            setChat((prevState: any) => {
                return [...prevState, data]
            });
            setMessage("")
            status.current = false
        });
    }, [])

    const updateChannel = (receiver: any) => {
        let currentUser = JSON.parse(sessionStorage.getItem('user') || "").user_id;
        let newChannel = '';
        if (receiver > currentUser) {
            newChannel = receiver + '-' + currentUser;
        } else {
            newChannel = currentUser + '-' + receiver;
        }

        return newChannel;
    }

    const formatDatetime = (datetime: string) => {
        return moment(datetime).format('MMMM Do YYYY, h:mm:ss');
    }

    return (
        <div className='chat_container'>
            {/* sidebar starts  */}
            <div className="sidebar">
                <img src="img/logo.svg" width="50px" height="50px" alt="logo" className="logo" />
                {/* <!-- <i className="fab fa-twitter"></i> --> */}
                <div className="sidebarOption active">
                    <span className="material-icons"> home </span>
                    <h2>Home</h2>
                </div>

                <div className="sidebarOption">
                    <span className="material-icons"> mail_outline </span>
                    <h2>Messages</h2>
                </div>

                <div className="sidebarOption">
                    <span className="material-icons"> perm_identity </span>
                    <h2>Profile</h2>
                </div>

                <div className="sidebarOption">
                    <span className="material-icons"> more_horiz </span>
                    <h2>More</h2>
                </div>
                <button className="sidebar-out">Logout</button>
            </div>
            {/* <!-- sidebar ends --> */}

            {/* <!-- feed starts --> */}
            <div className="feed">
                <div className="feed__header">
                    <h2>Home</h2>
                </div>
                {/* <!-- post starts --> */}
                <div className="post">
                    <div className="container">
                        {/* <!-- chat box --> */}
                        <div className="chat-box">
                            {/* <!-- client --> */}
                            <div className="client">
                                {/* <!-- <img src="./img/logo.png" alt="logo" /> --> */}
                                <div className="client-info">
                                    <h2>Algen</h2>
                                    <p>online</p>
                                </div>
                            </div>
                            {/* <!-- main chat section --> */}
                            <div className="chats">
                                {
                                    chat.map((message: any) => {
                                        return (
                                            <div className={currentUser === message.sender ? "my-chat" : "client-chat"} title={formatDatetime(message.timestamp)}>{message.message}</div>
                                        )

                                    })
                                }
                                {/* <div className="my-chat">Hello!</div>
                                <div className="client-chat">Pakyu</div>
                                <div className="my-chat">Pakyu too !</div>
                                <div className="client-chat">Luh dati kabang tnga?</div>
                                <div className="my-chat">sayo? oo pare matagal  na. Yieee</div> */}
                            </div>
                            {/* <!-- input field section --> */}
                            <div className="chat-input">
                                <input type="text" placeholder="Enter Message" value={message} onChange={(v: any) => setMessage(v.target.value)} />
                                <button className="send-btn" onClick={() => sendMessage()}>
                                    <img src="./img/send.png" alt="send-btn"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- post ends --> */}
            </div>
            {/* <!-- feed ends --> */}
            {/* <!-- widgets starts --> */}
            <div className="widgets">
                <div className="widgets__input">
                    <span className="material-icons widgets__searchIcon"> search </span>
                    <input type="text" placeholder="Search Chats" />
                </div>
                <div className="widgets__widgetContainer">
                    <div className="header">
                        <div className="avatar">
                            <img src="img/avatar.jpg" alt="" />
                        </div>
                        <div className="title">Profile</div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>Matches</li>
                            <li className="active">Messages</li>
                        </ul>
                    </div>
                    <div className="messages">
                        <div className="avatar">
                            <img src="img/avatar.jpg" alt="" />
                        </div>
                        <div className="message">
                            <div className="user">Yuri</div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                        </div>
                    </div>
                    <div className="messages">
                        <div className="avatar">
                            <img src="img/avatar.jpg" alt="" />
                        </div>
                        <div className="message">
                            <div className="user">Neo</div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                        </div>
                    </div>
                    <div className="messages">
                        <div className="avatar">
                            <img src="img/avatar.jpg" alt="" />
                        </div>
                        <div className="message">
                            <div className="user">Berwyn</div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                        </div>
                    </div>
                    <div className="messages">
                        <div className="avatar">
                            <img src="img/avatar.jpg" alt="" />
                        </div>
                        <div className="message">
                            <div className="user">Reymarc</div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                        </div>
                    </div>
                    <div className="messages">
                        <div className="avatar">
                            <img src="img/avatar.jpg" alt="" />
                        </div>
                        <div className="message">
                            <div className="user">Allen</div>
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- widgets ends --> */}
        </div>

    );
}
export default Chats;