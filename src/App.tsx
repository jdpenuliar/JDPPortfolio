/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from './logo.svg';
import './App.css';
import './materialize_content/css/materialize.css';
import './materialize_content/css/style.css';
import python001 from './python001.png'


function App() {
  return (
    <>
      {/* nav */}
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo teal-text">JD Penuliar was here</a>
          <ul className="right hide-on-med-and-down">
            <li><a target="_blank" href="https://www.linkedin.com/in/jdpenuliar" className="teal-text fa fa-linkedin fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
            <li><a target="_blank" href="https://github.com/jdpenuliar?tab=repositories" className="teal-text fa fa-github fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
            <li><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jaydz.penuliar@gmail.com" className="teal-text fa fa-envelope-square fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a target="_blank" href="https://www.linkedin.com/in/jdpenuliar" className="teal-text fa fa-linkedin fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
            <li><a target="_blank" href="https://github.com/jdpenuliar?tab=repositories" className="teal-text fa fa-github fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
            <li><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jaydz.penuliar@gmail.com" className="teal-text fa fa-envelope-square fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <img src={python001} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </>
  );
  // return (
  //   <>
  // {/* nav */ }
  //     <nav className="white" role="navigation">
  //       <div className="nav-wrapper container">
  //         <a id="logo-container" href="#" className="brand-logo teal-text">JD Penuliar was here</a>
  //         <ul className="right hide-on-med-and-down">
  //           <li><a target="_blank" href="https://www.linkedin.com/in/jdpenuliar" className="teal-text fa fa-linkedin fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
  //           <li><a target="_blank" href="https://github.com/jdpenuliar?tab=repositories" className="teal-text fa fa-github fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
  //           <li><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jaydz.penuliar@gmail.com" className="teal-text fa fa-envelope-square fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
  //         </ul>

  //         <ul id="nav-mobile" className="side-nav">
  //           <li><a target="_blank" href="https://www.linkedin.com/in/jdpenuliar" className="teal-text fa fa-linkedin fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
  //           <li><a target="_blank" href="https://github.com/jdpenuliar?tab=repositories" className="teal-text fa fa-github fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
  //           <li><a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jaydz.penuliar@gmail.com" className="teal-text fa fa-envelope-square fa-2x waves-effect waves-light" aria-hidden="true"></a></li>
  //         </ul>
  //         <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
  //       </div>
  //     </nav>
  //     {/* index banner */}
  //     <div id="index-banner" className="parallax-container">
  //       <div className="section no-pad-bot">
  //         <div className="container">
  //           <br />
  //           <h1 className="header center light">
  //             <i className="fa fa-code" aria-hidden="true" />
  //             Full Stack Web and Mobile
  //             <i className="fa fa-mobile" aria-hidden="true" />
  //             <br />
  //             <i className="fa fa-database" aria-hidden="true" />
  //             Developer
  //             <i className="fa fa-database" aria-hidden="true" />
  //           </h1>
  //           <div className="row center">
  //             <h5 className="header col s12 light">Want an app done? Lets work together and make your dream into reality</h5>
  //           </div>
  //           <div className="row center">
  //             <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=jaydz.penuliar@gmail.com" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Currently in a great team at Facebook!</a>
  //           </div>
  //           <br />
  //         </div>
  //       </div>
  //       <div className="parallax">
  //         <img src={python001} className="App-logo" alt="logo" />
  //       </div>
  //     </div>
  //     {/* container001 */}
  //     <div className="container">
  //       <div className="section">
  //         <div className="row">
  //           <div className="col s12 m4">
  //             <div className="icon-block">
  //               <h4 className="center bold teal-text"><i className="teal-text fa fa-code" aria-hidden="true"></i>Languages<i className="teal-text fa fa-code" aria-hidden="true"></i></h4>
  //               <p className="center light">HTML 5</p>
  //               <p className="center light">CSS 3</p>
  //               <p className="center light">Javascript</p>
  //               <p className="center light">Python</p>
  //               <p className="center light">Node.js</p>
  //               <p className="center light">Swift</p>
  //               <p className="center light">Objective C</p>
  //             </div>
  //           </div>
  //           <div className="col s12 m4">
  //             <div className="icon-block">
  //               <h4 className="center teal-text"><i className="teal-text fa fa fa-database" aria-hidden="true"></i>Databases<i className="teal-text fa fa fa-database" aria-hidden="true"></i></h4>
  //               <p className="center light">MySQL (SQL Database, Sequelize as ORM)</p>
  //               <p className="center light">MongoDB (NoSQL Database, Mongoose as ORM)</p>
  //             </div>
  //           </div>
  //           <div className="col s12 m4">
  //             <div className="icon-block">
  //               <h4 className="center teal-text"><i className="teal-text fa fa-codepen" aria-hidden="true"></i>Frameworks<i className="teal-text fa fa-codepen" aria-hidden="true"></i></h4>
  //               <p className="center light">React</p>
  //               <p className="center light">React-Native</p>
  //               <p className="center light">Express.js</p>
  //               <p className="center light">Angular.js</p>
  //               <p className="center light">Pylot(in-house framework)</p>
  //               <p className="center light">Django(40%)</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="parallax-container valign-wrapper">
  //         <div className="section no-pad-bot">
  //           <div className="container">

  //             <div className="row center">
  //               <div className="col s12 m4">
  //                 <div className="icon-block">
  //                   <h2 className="center black-text text-darken-2"><i className="material-icons">flash_on</i></h2>
  //                   <h5 className="center black-text text-darken-2">Speedy development</h5>

  //                   <p className="black-text text-darken-2">Speedy and versatile development of projects.</p>
  //                 </div>
  //               </div>

  //               <div className="col s12 m4">
  //                 <div className="icon-block">
  //                   <h2 className="center black-text text-darken-2"><i className="material-icons">group</i></h2>
  //                   <h5 className="center black-text text-darken-2">Team work</h5>

  //                   <p className="black-text text-darken-2">Easy to adapt, work or lead teams to achieve deadlines.</p>
  //                 </div>
  //               </div>

  //               <div className="col s12 m4">
  //                 <div className="icon-block">
  //                   <h2 className="center black-text text-darken-2"><i className="material-icons">settings</i></h2>
  //                   <h5 className="center black-text text-darken-2">User requirements</h5>

  //                   <p className="black-text text-darken-2">Goes above and beyond user requirements and functionalities.</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="parallax"><img src="/images/maxresdefault.jpg" alt="Unsplashed background img 2" /></>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default App;
