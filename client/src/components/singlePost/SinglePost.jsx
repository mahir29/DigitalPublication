import "./single.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePost">
        <img src="" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">hello
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="inglePostIcon  fas fa-trash-alt"></i>
        </div>
        </h1>
        <div className="singlePostInfo">
        <span className="singlePostAuthor">
            Author:<b>Safak</b>
        </span>
        <span className="singlePostDate">
    1 hour ago
        </span>
      </div>
      <p className="singlePostDesc">hello</p>
    </div>
  );
}
