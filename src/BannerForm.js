import React, { useState } from "react";
import { SketchPicker } from "react-color";
import CopyToClipboard from "react-copy-to-clipboard";


const BannerForm = () => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    fontColor: "#000000",
    fontSize: "",
    text: "",
  });

  const [previewCode, setPreviewCode] = useState("");

  const generatePreviewCode = () => {
    const { imageUrl, fontColor, fontSize, text } = formData;
    const code = `<div class="preview" style="background-image: url(${imageUrl}); background-size: cover; background-position: center center; height: 300px; display: flex; justify-content: center; align-items: center;"><h1 style="color: ${fontColor}; font-size: ${fontSize}px;">${text}</h1></div>`;
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
    const { imageUrl, fontColor, fontSize, text } = formData;
    setCodeSnippet(
      `<div style="background-image: url(${imageUrl}); background-size: cover; background-position: center center; height: 300px; display: flex; justify-content: center; align-items: center;"><h1 style="color: ${fontColor}; font-size: ${fontSize}px;">${text}</h1></div>`
    );
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="container my-4">
  <div className="form-group">
    <label htmlFor="imageUrl">Background Image URL:</label>
    <input
      type="text"
      name="imageUrl"
      value={formData.imageUrl}
      onChange={handleChange}
      className="form-control"
      id="imageUrl"
    />
  </div>
  <div className="form-group">
    <label htmlFor="fontColor">Font Color:</label>
    <SketchPicker
      color={formData.fontColor}
      onChangeComplete={handleColorChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="fontSize">Font Size:</label>
    <input
      type="text"
      name="fontSize"
      value={formData.fontSize}
      onChange={handleChange}
      className="form-control"
      id="fontSize"
    />
  </div>
  <div className="form-group">
    <label htmlFor="text">Text:</label>
    <input
      type="text"
      name="text"
      value={formData.text}
      onChange={handleChange}
      className="form-control"
      id="text"
    />
  </div>
  <button type="submit" className="btn btn-primary mb-3">
    Generate Code
  </button>
</form>

      <br />
      {codeSnippet && (
        <div className="row">
  <div className="col-md-6">
    <h4>Preview:</h4>
    <div dangerouslySetInnerHTML={{ __html: previewCode }}></div>
  </div>
  <div className="col-md-6">
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
      <button type="button" className="btn btn-primary">
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
