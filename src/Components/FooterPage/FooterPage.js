import React from 'react';
import "./FooterPage.css"

const FooterPage = () => {
  return  (
  <div>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
<footer class="hero">
        <div class="container flex">
        <img className='image-footer-logo'    src='https://res.cloudinary.com/dmv2tjzo7/image/upload/v1743407439/sptg6uejtdbcc1ty5aog.png'/>
   
            <div class="container__about">
             <h6>#13-C, Mosque Street, </h6>
                <h6>100 Feet Road, M.G. Nagar, Tharamani, Chennai - 600 113</h6>
            </div>
            <div class="container-pages flex">

                <div class="container__recentpages">
                    <h2>Recient Pages</h2>
                    <ul>
                        <li><a href="https://brayancountries.netlify.app">Countries</a></li>
                        <li><a href="https://portfolio-brayan.netlify.app/">Portfolio</a></li>
                        <li><a href="https://cartagena-cooks.netlify.app/">Cartagena-cooks</a></li>
                        <li><a href="https://work-company.netlify.app/">Work-company</a></li>
                    </ul>
                </div>
                <div class="container__more">
                    <h2>Recient Pages</h2>
                    <ul>
                        <li><a href="https://challenge2-bom.netlify.app/">Challenge2</a></li>
                        <li><a href="https://challenge3-brayanom.netlify.app/">Challenge3</a></li>
                        <li><a href="https://dev4-brayanom.netlify.app/">Challenge4</a></li>
                        <li><a href="https://cv-brayanom.netlify.app/">Curriculum</a></li>
                        <li><a href="https://mentor1-brayanom.netlify.app/">Mentor1</a></li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="line__separete"></div>
        <div class="by flex">
            <p>Copyright © 2022 All Rights Reserved by Alphaingen</p>
            <div class="icons">
                <a href="https://t.co/VBNNTjtw3F" class="icon1 icon--instagram">
                    <i class="ri-instagram-line"></i>
                </a>
                <a href="#" class="icon1 icon--twitter">
                    <i class="ri-twitter-line"></i>
                </a>
                <a href="linkedin.com/in/brayan-ospina-8bb472243" class="icon1 icon--linkedin">
                    <i class="ri-linkedin-line"></i>
                </a>
                <a href="https://github.com/brayanospina2005/final-project" class="icon1 icon--github">
                    <i class="ri-github-line"></i>
                </a>
            </div>
        </div>

    </footer>
 

  </div>

  );
}

export default FooterPage;
