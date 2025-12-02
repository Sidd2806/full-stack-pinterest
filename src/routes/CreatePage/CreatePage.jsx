import React from "react"
import Image from "../../components/image/image";
import './CreatePage.css'
const CreatePage = () => {
  return (
    <div className="CreatePage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            Tip: Upload a high-quality vertical image (recommended 1000×1500px).
            Supported formats: JPG, PNG. Max file size: 20MB.
          </div>
        </div>
        <form action="" className="createForm">
          <div className="createFormItem">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="">Description</label>
            <textarea
            rows={6}
              type="text"
              placeholder="Add a detailed description"
              name="description"
              id="description"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="">Link</label>
            <input
              type="text"
              placeholder="Add a link"
              name="link"
              id="link"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="">Board</label>
              <select name="board" id="board">
                <option>Choose a board</option>
                <option value="1" >Board 1</option>
                <option value="2">Board 2</option>
                <option value="3">Board 3</option>
              </select>
          </div>
          <div className="createFormItem">
              <label htmlFor="tags">Tagged topics</label>
              <input type="text" placeholder="Add tags" name="tags" id="tags" />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
