import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            
            <div className="settingWrapper">
           
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">124</span>
                <span className="settingsDeleteTitle">123</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    
                <img src="" alt="" alt=""></img>
                <label htmlFor="fileInput"></label>
                <i className="settingsPPIcon fas fa-user"></i>
                <input type="file" id="fileInput" style={{display:none}}></input>

                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak"/>
                <label>Email</label>
                <input type="email" placeholder="safak@gmail.com"/>
                <label>PasswordPassword</label>
                <input type="Password" />
                <button className="settingsSubmit"><Update></Update></button>

                
</div>
            <Sidebar/>
        </div>
    )
}
