import React, { useState } from "react";
import { SketchPicker } from "react-color";
import CopyToClipboard from "react-copy-to-clipboard";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    imageUrl: "https://via.placeholder.com/1200x400",
    fontColor: "#FFFFFF",
    fontSize: "30",
    fontSize2: "20",
    text: "Create. Curate. Connect.",
    text2: "This is a sub-headline",
    alignment: "center",
    box1img: "https://via.placeholder.com/64",
    box1headline: "Headline",
    box1text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tempus mi. Morbi vitae eros felis. Etiam velvulputate sapien. Nulla facilisi.",
    box2img: "https://via.placeholder.com/64",
    box2headline: "Headline",
    box2text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id tempus mi. Morbi vitae eros felis. Etiam velvulputate sapien. Nulla facilisi.",
  });

  const [previewCode, setPreviewCode] = useState("");

  const handleAlignmentChange = (e) => {
    setFormData({
      ...formData,
      alignment: e.target.value,
    });
  };

  const generatePreviewCode = () => {
    const { imageUrl, fontColor, fontSize, fontSize2, text, text2,  box1img, box1headline, box1text, box2img, box2headline, box2text, alignment} = formData;
    const code = `<div style="background-image: url(${imageUrl}); background-size: cover; background-position: center center; height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: ${alignment};">
    <div style="padding:2em;"><h1 style="color: ${fontColor}; font-size: ${fontSize}px;">${text}</h1>
    <p style="color: ${fontColor}; font-size: ${fontSize2}px;">${text2}</p></div>
    </div>
    <div style="display: flex; flex-direction: row; justify-content: space-around; align-items: flex-start; gap: 1em; padding: 1em 0;">
    <div>
    <div class="media">
    <div class="media-left">
      <img src="${box1img}" class"media-object">
      </div>
      <div class="media-body">
        <h5 class="mt-0">${box1headline}</h5>
        <p>${box1text}</p>
      </div>
    </div>
  </div>
  <div>
    <div class="media">
    <div class="media-left">
    <img src="${box2img}" class"media-object">
      </div>
      <div class="media-body">
        <h5 class="mt-0">${box2headline}</h5>
        <p>${box2text}</p>
      </div>
    </div>
  </div>
</div>`
    setPreviewCode(code);
  };  

  const [codeSnippet, setCodeSnippet] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleColorChange = (color) => {
    setFormData({ ...formData, fontColor: color.hex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePreviewCode();
    const { imageUrl, fontColor, fontSize, fontSize2, text, text2,  box1img, box1headline, box1text, box2img, box2headline, box2text } = formData;
    setCodeSnippet(
      `<div style="background-image: url(${imageUrl}); background-size: cover; background-position: center center; height: 300px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1 style="color: ${fontColor}; font-size: ${fontSize}px;">${text}</h1>
    <p style="color: ${fontColor}; font-size: ${fontSize2}px;">${text2}</p>
    </div>
    <div class="row mt-4">
  <div class="col-md-6">
    <div class="media">
    <div class="media-left">
      <img src="${box1img}" class"media-object">
      </div>
      <div class="media-body">
        <h5 class="mt-0">${box1headline}</h5>
        <p>${box1text}</p>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="media">
    <div class="media-left">
    <img src="${box2img}" class"media-object">
      </div>
      <div class="media-body">
        <h5 class="mt-0">${box2headline}</h5>
        <p>${box2text}</p>
      </div>
    </div>
  </div>
</div>`
    );
  };
  

  return (
    <div class="container my-4">
      <form onSubmit={handleSubmit} className="row">
      <h3>Banner Styles</h3>
  <div className="col-md-6">
  <div className="form-group mb-4">
    <label htmlFor="imageUrl">Banner Background Image URL:</label>
    <input
      type="text"
      name="imageUrl"
      defaultValue="My default value"
      value={formData.imageUrl}
      onChange={handleChange}
      className="form-control"
      id="imageUrl"
    />
  </div>
  <div className="form-group mb-4">
    <label htmlFor="fontColor">Banner Font Color:</label>
    <SketchPicker
      color={formData.fontColor}
      onChangeComplete={handleColorChange}
    />
  </div>
  </div>
  <div className="col-md-6">
  <div className="form-group mb-4">
  <label htmlFor="alignment">Content Alignment:</label>
    <select value={formData.alignment} onChange={handleAlignmentChange} className="form-control" id="alignment">
      <option value="flex-start">Left</option>
      <option value="center">Center</option>
      <option value="flex-end">Right</option>
    </select>
  </div>
  <div className="form-group mb-4">
    <label htmlFor="fontSize">Banner Headline Font Size:</label>
    <input
      type="number"
      name="fontSize"
      value={formData.fontSize}
      onChange={handleChange}
      className="form-control"
      id="fontSize"
    />
  </div>
  <div className="form-group mb-4">
    <label htmlFor="fontSize">Banner Sub-Headline Font Size:</label>
    <input
      type="number"
      name="fontSize2"
      value={formData.fontSize2}
      onChange={handleChange}
      className="form-control"
      id="fontSize2"
    />
  </div>
  <div className="form-group mb-4">
    <label htmlFor="text">Banner Headline:</label>
    <input
      type="text"
      name="text"
      value={formData.text}
      onChange={handleChange}
      className="form-control"
      id="text"
    />
  </div>
  <div className="form-group mb-4">
    <label htmlFor="text">Banner Sub-headline:</label>
    <input
      type="text"
      name="text2"
      value={formData.text2}
      onChange={handleChange}
      className="form-control"
      id="text2"
    />
  </div>
  </div>
  <hr />
  <h3>Box Styles</h3>
  <div className="col-md-6">
  <div className="form-group mb-4">
    <label htmlFor="text">Box 1 Image:</label>
    <input
      type="text"
      name="box1img"
      value={formData.box1img}
      onChange={handleChange}
      className="form-control"
      id="box1img"
    />
  </div>  
  <div className="form-group mb-4">
    <label htmlFor="text">Box 1 Headline:</label>
    <input
      type="text"
      name="box1headline"
      value={formData.box1headline}
      onChange={handleChange}
      className="form-control"
      id="box1headline"
    />
  </div> 
  <div className="form-group mb-4">
    <label htmlFor="text">Box 1 Text:</label>
    <input
      type="text"
      name="box1text"
      value={formData.box1text}
      onChange={handleChange}
      className="form-control"
      id="box1text"
    />
  </div> 
  </div>
  <div className="col-md-6">
  <div className="form-group mb-4">
    <label htmlFor="text">Box 2 Image:</label>
    <input
      type="text"
      name="box2img"
      value={formData.box2img}
      onChange={handleChange}
      className="form-control"
      id="box2img"
    />
  </div>  
  <div className="form-group mb-4">
    <label htmlFor="text">Box 2 Headline:</label>
    <input
      type="text"
      name="box2headline"
      value={formData.box2headline}
      onChange={handleChange}
      className="form-control"
      id="box2headline"
    />
  </div> 
  <div className="form-group mb-4">
    <label htmlFor="text">Box 2 Text:</label>
    <input
      type="text"
      name="box2text"
      value={formData.box2text}
      onChange={handleChange}
      className="form-control"
      id="box2text"
    />
  </div> 
  <button type="submit" className="btn btn-primary mb-4">
    Generate Code
  </button>
  </div>
</form>

      <br />
      {codeSnippet && (
        <div className="row">
  <div className="col-md-12">
    <h4>Preview:</h4>
    <div dangerouslySetInnerHTML={{ __html: previewCode }}></div>
  </div>
  <hr className="my-4" />
  <div className="col-md-12">
    <h4>Code Snippet:</h4>
    <div className="form-group">
      <textarea
        className="form-control"
        id="codeSnippet"
        value={codeSnippet}
        readOnly
      />
    </div>
    <CopyToClipboard text={codeSnippet}>
      <button type="button" className="btn btn-primary my-4">
        Copy Code
      </button>
    </CopyToClipboard>
  </div>
</div>
)}
    </div>
  );
};

export default BannerForm;
