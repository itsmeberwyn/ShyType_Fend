import React from 'react';
// import logo from './logo.svg';
import logos from './logo.svg';
import './Home.css';


function Home() {
  return (
    <div className='Container'>
        {/* SideBar Starts */}
        <div className="sidebar">
            <img src="./public/logo.svg" width="50px" height="50px" alt="logo" className="logo"/>
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
        {/* SideBar Ends */}

        {/* Feed Starts */}
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>     
            <div className="post">
                <div className="card">
                    <div className="user">
                        <img className="user" src="img/algen.jpg" alt=""/>
                    <div className="profile">
                        <div className="name">Algen <span>22</span></div>
                        <div className="local">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Bhox eksdeee mapagmahal U_U</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="no">
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="star">
                        <i className="fas fa-star fa"></i>
                    </div>
                    <div className="heart">
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
        {/* Feed Ends */}
        {/* Widgets starts */}
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








    </div>
  );
}

export default Home;
