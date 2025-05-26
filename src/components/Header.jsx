import {Search, Bell, Plus} from "lucide-react";
import avatar from "../assets/avatar.jpg"

export default function Header(){
    return(
        <header className = "header">
            <div className="header-left">
                <div className="search-bar">
                    <Search size={16} />
                    <input type="text" placeholder="Search" disabled/>
                </div>
                <Bell size={20} className="notification" />
            </div>
            <div className="header-right">
                <div className="user-profile">
                    <img
                        src={avatar}
                        alt="user avatar"
                        className="avatar"
                    />
                </div>
                <button className="add-btn">
                    <Plus size={20} />
                </button>
            </div>
        </header>
    )
}