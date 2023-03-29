import React, { useState } from "react";
import { SketchPicker,TwitterPicker } from "react-color";
import CopyToClipboard from "react-copy-to-clipboard";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    imageUrl: "https://www.litmos.com/wp-content/uploads/2022/12/hero-banner-optim.jpg",
    fontColor: "#FFFFFF",
    fontColor2: "#FFFFFF",
    fontColor3: "#8333ff",
    fontSize: "45",
    fontSize2: "30",
    text: "Create. Curate. Connect.",
    text2: "eLearning Made Easy.",
    alignment: "left",
    box1img: "fa-users",
    box1headline: "New Employee Training",
    box1text: "Tune in to instructor led workshops. If you can't make it live, check the recordings!",
    box2img: "fa-book",
    box2headline: "Winners circle",
    box2text: "Achievements and leaderboard",
  });

  const [previewCode, setPreviewCode] = useState("");

  const handleAlignmentChange = (e) => {
    setFormData({
      ...formData,
      alignment: e.target.value,
    });
  };

  const generatePreviewCode = () => {
    const { imageUrl, fontColor, fontColor2, fontColor3, fontSize, fontSize2, text, text2,  box1img, box1headline, box1text, box2img, box2headline, box2text, alignment} = formData;
    const code = `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;700&display=swap" rel="stylesheet"><div class="banner" style="background-image: url(${imageUrl}); background-size: cover; background-position: center center; height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: ${alignment}; flex-wrap: wrap;">
    <div style="padding:2em;display:flex;">
    <img style="height:100px;padding-right:1em;" src="https://www.litmos.com/wp-content/uploads/2022/12/cta-banner-optim.png">    
    <div style="display:flex;flex-direction:column">
    <h1 style="color: ${fontColor}; font-size: ${fontSize}px; font-family: 'Public Sans', sans-serif; font-weight:700;margin:0;">${text}</h1>
    <p style="color: ${fontColor}; font-size: ${fontSize2}px; font-family: 'Public Sans', sans-serif; font-weight:300;margin:0;">${text2}</p></div>
    </div>
    </div>
    <div class="boxes" style="display: flex; background:white; gap:1em; margin:1em 0;">
    <div style="width:50%;padding: 2em; background-color:${fontColor3};">
    <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-start; color:${fontColor2};">
    <div style="padding-right:1em">
      <i style="color:${fontColor2};" class="fa fa-5x ${box1img}"></i>
      </div>
      <div>
        <h4 style="color:${fontColor2}; font-family: 'Public Sans', sans-serif; font-weight:700;" class="mt-0">${box1headline}</h5>
        <p style="color:${fontColor2}; font-family: 'Public Sans', sans-serif; font-weight:300;margin:0;">${box1text}</p>
      </div>
    </div>
  </div>
  <div style="width:50%; padding: 2em; background-color:${fontColor3};">
  <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-start; color:${fontColor2};">
  <div style="padding-right:1em">
    <i style="color:${fontColor2};" class="fa fa-5x ${box2img}"></i>
      </div>
      <div>
        <h4 class="mt-0" style="color:${fontColor2};font-family: 'Public Sans', sans-serif; font-weight:700;">${box2headline}</h5>
        <p style="color:${fontColor2};font-family: 'Public Sans', sans-serif; font-weight:300;margin:0;">${box2text}</p>
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

  const handleColorChange2 = (color) => {
    setFormData({ ...formData, fontColor2: color.hex });
  };
  const handleColorChange3 = (color) => {
    setFormData({ ...formData, fontColor3: color.hex });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    generatePreviewCode();
    const {imageUrl, fontColor, fontColor2, fontColor3, fontSize, fontSize2, text, text2,  box1img, box1headline, box1text, box2img, box2headline, box2text, alignment} = formData;
    setCodeSnippet(
      `<link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;700&display=swap" rel="stylesheet"><div class="banner" style="background-image: url(${imageUrl}); background-size: cover; background-position: center center; height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: ${alignment}; flex-wrap: wrap;">
      <div style="padding:4em;display:flex;">
      <img style="height:100px;" src="https://www.litmos.com/wp-content/uploads/2022/12/cta-banner-optim.png">    
      <div style="display:flex;flex-direction:column">
      <h1 style="color: ${fontColor}; font-size: ${fontSize}px; font-family: 'Public Sans', sans-serif; font-weight:700;margin:0;">${text}</h1>
      <p style="color: ${fontColor}; font-size: ${fontSize2}px; font-family: 'Public Sans', sans-serif; font-weight:300;margin:0;">${text2}</p></div>
      </div>
      </div>
      <div class="boxes" style="display: flex; background:white; gap:1em; margin:1em 0;">
      <div style="width:50%;padding: 2em; background-color:${fontColor3};">
      <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-start; color:${fontColor2};">
      <div style="padding-right:1em">
        <i style="color:${fontColor2};" class="fa fa-5x ${box1img}"></i>
        </div>
        <div>
          <h4 style="color:${fontColor2}; font-family: 'Public Sans', sans-serif; font-weight:700;" class="mt-0">${box1headline}</h5>
          <p style="color:${fontColor2}; font-family: 'Public Sans', sans-serif; font-weight:300;margin:0;">${box1text}</p>
        </div>
      </div>
    </div>
    <div style="width:50%; padding: 2em; background-color:${fontColor3};">
    <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-start; color:${fontColor2};">
    <div style="padding-right:1em">
      <i style="color:${fontColor2};" class="fa fa-5x ${box2img}"></i>
        </div>
        <div>
          <h4 class="mt-0" style="color:${fontColor2};font-family: 'Public Sans', sans-serif; font-weight:700;">${box2headline}</h5>
          <p style="color:${fontColor2};font-family: 'Public Sans', sans-serif; font-weight:300;margin:0;">${box2text}</p>
        </div>
      </div>
    </div>
  </div>`
    );
  };
  

  return (
    <div className="container my-4">
      <h1 class="display-1">Banner Tool</h1>
      <hr />
      <form onSubmit={handleSubmit} className="row">
      <h3>Banner Styles</h3>
  <div className="col-md-4">
  <div className="mb-4">
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
  <div className="mb-4">
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
  <div className="mb-4">
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
  <div className="col-md-4">
  <div className="mb-4">
  <label htmlFor="alignment">Content Alignment:</label>
    <select value={formData.alignment} onChange={handleAlignmentChange} className="form-control" id="alignment">
      <option value="flex-start">Left</option>
      <option value="center">Center</option>
      <option value="flex-end">Right</option>
    </select>
  </div>
  <div className="mb-4">
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
  <div className="mb-4">
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
  </div>
  <div className="col-md-4">  
  <div className="mb-4">
    <label htmlFor="fontColor">Banner Font Color:</label>
    <TwitterPicker
      color={formData.fontColor}
      onChangeComplete={handleColorChange}
    />
  </div>
  </div>
  <hr />
  <h3>Box Styles</h3>
  <div className="col-md-4">
  <div className="mb-4">
    <label htmlFor="text">Box 1 Icon:</label>
    <input
      type="text"
      name="box1img"
      value={formData.box1img}
      onChange={handleChange}
      className="form-control"
      id="box1img"
    />
    <div id="emailHelp" class="form-text">Icon choices at <a target="blank" href="https://fontawesome.com/v5/search">FontAwesome</a></div>
  </div>  
  <div className="mb-4">
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
  <div className="mb-4">
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
  <button type="submit" className="btn btn-primary mb-4">
    Generate Code
  </button>
  </div>
  <div className="col-md-4">
  <div className="mb-4">
    <label htmlFor="text">Box 2 Icon:</label>
    <input
      type="text"
      name="box2img"
      value={formData.box2img}
      onChange={handleChange}
      className="form-control"
      id="box2img"
    />
     <div id="emailHelp" class="form-text">Icon choices at <a target="blank" href="https://fontawesome.com/v5/search">FontAwesome</a></div>
  </div>  
  <div className="mb-4">
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
  <div className="mb-4">
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
  </div>
  <div className="col-md-4">
  <div className="mb-4">
    <label htmlFor="fontColor2">Box Font Color:</label>
    <TwitterPicker
      color={formData.fontColor2}
      onChangeComplete={handleColorChange2}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="fontColor3">Box Background Color:</label>
    <TwitterPicker
      color={formData.fontColor3}
      onChangeComplete={handleColorChange3}
    />
  </div>
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
