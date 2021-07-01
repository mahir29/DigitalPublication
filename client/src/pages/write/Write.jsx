import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="" alt=""/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon far fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput"style={display:"none"} />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
       <div className="writeFormGroup">
           <textarea placeholder="Tell Your Story..." type="text"
           className="writeInput writeText"></textarea>
       </div>
      <button className="writeSubmit">Publish</button>
       
      </form>
      

    </div>
  );
}
