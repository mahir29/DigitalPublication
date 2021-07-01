import Header from '../../components/header/Header';
import Posts from "../../components/posts/Posts";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
    return (
        <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}