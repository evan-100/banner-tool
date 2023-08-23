import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import CopyToClipboard from "react-copy-to-clipboard";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    imageUrl:
      "https://www.litmos.com/wp-content/uploads/2022/12/hero-banner-optim.jpg",
    fontColor: "#FFFFFF",
    fontColor2: "#FFFFFF",
    fontColor3: "#8333ff",
    fontSize: "45",
    fontSize2: "30",
    text: "Create. Curate. Connect.",
    text2: "eLearning Made Easy.",
    imageUrlBanner:
      "https://www.litmos.com/wp-content/uploads/2022/12/cta-banner-optim.png",
    box1img: "fa-users",
    box1headline: "New Employee Training",
    box1text:
      "Tune in to instructor led workshops. If you can't make it live, check the recordings!",
    box2img: "fa-book",
    box2headline: "Winners circle",
    box2text:
      "Achievements and leaderboard. See who's at the top of the leaderboard.",
  });

  const [previewCode, setPreviewCode] = useState("");

  const handleAlignmentChange = (e) => {
    setFormData({
      ...formData,
      alignment: e.target.value,
    });
  };

  const generatePreviewCode = () => {
    const {
      imageUrl,
      fontColor,
      fontColor2,
      fontColor3,
      fontSize,
      fontSize2,
      text,
      text2,
      box1img,
      box1headline,
      box1text,
      box2img,
      box2headline,
      box2text,
      imageUrlBanner,
    } = formData;
    const code = `<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
  
    .banner {
      position: relative;
      background-image: url('${imageUrl}');
      background-size: cover;
      background-position: center;
      height: 400px;
    }
  
    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  
    .banner-content {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 20px;
    }
  
    .banner-image {
      max-height: 200px;
      max-width: 200px;
      margin-right: 20px;
    }
  
    .banner-text h1,
    .banner-text p {
      font-family: 'Poppins', sans-serif;
      color: ${fontColor};
      margin: 0;
      text-shadow: 2px 4px 3px rgba(0, 0, 0, .3);
    }
  
    .banner-text h1 {
      font-size: ${fontSize}px;
    }
  
    .banner-text p {
      font-size: ${fontSize2}px;
    }
  
    .banner-boxes {
      display: flex;
      justify-content: center;
      gap: 1em;
      padding: 1em 0;
      background: white;
    }
  
    .banner-boxes>div {
      background: ${fontColor3};
      padding: 2em;
      width: 100%;
    }
  
    .banner-boxes div i {
      color: ${fontColor2};
      padding-right: 0.5em;
    }
  
    .banner-boxes div h3,
    .banner-boxes div p {
      color: ${fontColor2};
      margin: 0.3em;
    }
  
    .banner-boxes div .btn-sm {
      background:${fontColor2};
      color: ${fontColor3};
      border: none;
    }
  
    /* Mobile devices */
    @media (max-width: 767px) {
      .banner {
        height: 250px;
      }
  
      .banner-text h1 {
        font-size: 30px;
      }
  
      .banner-text p {
        font-size: 14px;
      }
  
      .banner,
      .banner-boxes {
        flex-wrap: wrap;
      }
    }
  </style>
  
  <div class="banner">
    <div class="banner-overlay"></div>
    <div class="banner-content">
      <img src="${imageUrlBanner}" alt="Your image description"
        class="banner-image img-responsive hidden-sm hidden-xs">
      <div class="banner-text">
        <h1>${text}</h1>
        <p>${text2}</p>
      </div>
    </div>
  </div>
  
  <div class="banner-boxes">
    <div>
      <!-- BANNER BOX 1 ICON -->
      <i class='fas ${box1img} fa-5x pull-left'></i>
      <div>
        <!-- BANNER BOX 1 HEADER -->
        <h3>${box1headline}</h3>
        <!-- BANNER BOX 1 SUBHEADER -->
        <p>${box1text}</p>
        <!-- BANNER BOX 1 BUTTON -->
        <a class="btn btn-sm btn-secondary" href="/courses/event/LearnerSession">Learn More</a>
      </div>
    </div>
    <div>
      <!-- BANNER BOX 2 ICON -->
      <i class='fas ${box2img} fa-5x pull-left'></i>
      <div>
        <!-- BANNER BOX 2 SUBHEADER -->
        <h3>${box2headline}</h3>
        <!-- BANNER BOX 2 HEADER -->
        <p>${box2text}</p>
        <!-- BANNER BOX 2 BUTTON -->
        <a class="btn btn-sm btn-secondary" href="/achievements">Learn More</a>
      </div>
    </div>
  </div>`;
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
    const {
      imageUrl,
      fontColor,
      fontColor2,
      fontColor3,
      fontSize,
      fontSize2,
      text,
      text2,
      box1img,
      box1headline,
      box1text,
      box2img,
      box2headline,
      box2text,
      imageUrlBanner,
    } = formData;
    setCodeSnippet(
      `<style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
    
      .banner {
        position: relative;
        background-image: url('${imageUrl}');
        background-size: cover;
        background-position: center;
        height: 400px;
      }
    
      .banner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
      }
    
      .banner-content {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 20px;
      }
    
      .banner-image {
        max-height: 200px;
        max-width: 200px;
        margin-right: 20px;
      }
    
      .banner-text h1,
      .banner-text p {
        font-family: 'Poppins', sans-serif;
        color: ${fontColor};
        margin: 0;
        text-shadow: 2px 4px 3px rgba(0, 0, 0, .3);
      }
    
      .banner-text h1 {
        font-size: ${fontSize}px;
      }
    
      .banner-text p {
        font-size: ${fontSize2}px;
      }
    
      .banner-boxes {
        display: flex;
        justify-content: center;
        gap: 1em;
        padding: 1em 0;
        background: white;
      }
    
      .banner-boxes>div {
        background: ${fontColor3};
        padding: 2em;
        width: 100%;
      }
    
      .banner-boxes div i {
        color: ${fontColor2};
        padding-right: 0.5em;
      }
    
      .banner-boxes div h3,
      .banner-boxes div p {
        color: ${fontColor2};
        margin: 0.3em;
      }
    
      .banner-boxes div .btn-sm {
        background:${fontColor2};
        color: ${fontColor3};
        border: none;
      }
    
      /* Mobile devices */
      @media (max-width: 767px) {
        .banner {
          height: 250px;
        }
    
        .banner-text h1 {
          font-size: 30px;
        }
    
        .banner-text p {
          font-size: 14px;
        }
    
        .banner,
        .banner-boxes {
          flex-wrap: wrap;
        }
      }
    </style>
    
    <div class="banner">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <img src="${imageUrlBanner}" alt="Your image description"
          class="banner-image img-responsive hidden-sm hidden-xs">
        <div class="banner-text">
          <h1>${text}</h1>
          <p>${text2}</p>
        </div>
      </div>
    </div>
    
    <div class="banner-boxes">
      <div>
        <!-- BANNER BOX 1 ICON -->
        <i class="fas ${box1img} fa-5x pull-left"></i>
        <div>
          <!-- BANNER BOX 1 HEADER -->
          <h3>${box1headline}</h3>
          <!-- BANNER BOX 1 SUBHEADER -->
          <p>${box1text}</p>
          <!-- BANNER BOX 1 BUTTON -->
          <a class="btn btn-sm btn-secondary" href="/courses/event/LearnerSession">Learn More</a>
        </div>
      </div>
      <div>
        <!-- BANNER BOX 2 ICON -->
        <i class="fas ${box2img} fa-5x pull-left"></i>
        <div>
          <!-- BANNER BOX 2 SUBHEADER -->
          <h3>${box2headline}</h3>
          <!-- BANNER BOX 2 HEADER -->
          <p>${box2text}</p>
          <!-- BANNER BOX 2 BUTTON -->
          <a class="btn btn-sm btn-secondary" href="/achievements">Learn More</a>
        </div>
      </div>
    </div>`
    );
  };

  return (
    <div className="container my-4">
      <h1 className="display-1">Banner Tool</h1>
      <hr />
      <form onSubmit={handleSubmit} className="row">
        <h3>Banner Styles</h3>
        <div className="col-md-4">
          <div className="mb-4">
            <label htmlFor="imageUrl">Banner Background Image URL:</label>
            <input
              type="text"
              name="imageUrl"
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
            <label htmlFor="imageUrlBanner">Banner Image URL:</label>
            <input
              type="text"
              name="imageUrlBanner"
              value={formData.imageUrlBanner}
              onChange={handleChange}
              className="form-control"
              id="imageUrlBanner"
            />
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
            <div id="emailHelp" className="form-text">
              Icon choices at{" "}
              <a target="blank" href="https://fontawesome.com/v5/search">
                FontAwesome
              </a>
            </div>
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
            <div id="emailHelp" className="form-text">
              Icon choices at{" "}
              <a target="blank" href="https://fontawesome.com/v5/search">
                FontAwesome
              </a>
            </div>
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
        <div className="col-md-12 text-center">
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
            <h4>Banner HTML:</h4>
            <div className="form-text">
              Copy & Paste the code into the banner HTML section of your demo
            </div>
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
