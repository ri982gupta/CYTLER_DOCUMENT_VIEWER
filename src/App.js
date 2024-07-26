//-------------------------------------------------for ppt and excel--------------------------------------------------------

// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [files, setFiles] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     const storedFiles = localStorage.getItem('files');
//     if (!storedFiles) {
//       const initialFiles = [
//         { name: 'uses-of-internet.pptx', type: 'ppt' },
//         { name: 'MBA-Business-Environment-PPT.pptx', type: 'ppt' },
//       ];
//       localStorage.setItem('files', JSON.stringify(initialFiles));
//       setFiles(initialFiles);
//     } else {
//       setFiles(JSON.parse(storedFiles));
//     }
//   }, []);

//   const handleFileClick = (file) => {
//     setSelectedFile(file);
//   };

//   const handleBackClick = () => {
//     setSelectedFile(null);
//   };

//   return (
//     <div>
//       {!selectedFile ? (
//         <div>
//           <h1>File List</h1>
//           <ul>
//             {files.map((file, index) => (
//               <li key={index}>
//                 <button onClick={() => handleFileClick(file)}>{file.name}</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>
//           <h1>Viewing: {selectedFile.name}</h1>
//           <button onClick={handleBackClick}>Back to File List</button>
//           <iframe
//             src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
//               window.location.origin + '/files/' + selectedFile.name
//             )}`}
//             width="100%"
//             height="600px"
//             frameBorder="0"
//             title="file-viewer"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// EXCEL DATA DISPLAY, PPT NOT DISPLAY




//-----------------------------------------------------------------------------------------------------------------------------



// import React, { useEffect } from 'react';
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import WebViewer from '@pdftron/webviewer';

// function App() {
//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/webviewer/lib', // Path to the WebViewer lib folder
//         initialDoc: './files/sample.pdf', // Initial PDF document to load
//       },
//       document.getElementById('viewer') // DOM element to render the viewer
//     ).then(instance => {
//       // Example: Load and handle demo.docx using WebViewer's document loading API
//       instance.Core.documentViewer.addEventListener('documentLoaded', () => {
//         const doc = instance.Core.documentViewer.getDocument();
//         // Handle your document logic here
//       });

//       // Load sample.pdf initially
//       instance.Core.loadDocument('./files/sample.pdf');
//     });
//   }, []); // Empty dependency array ensures useEffect runs only once


//   const docs = [
//     {
//       uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
//       fileType: "docx",
//       fileName: "demo.docx"
//     },
//     {
//       uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
//       fileType: "xls",
//       fileName: "demo sample.xls"
//     },
//     {
//       uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
//       fileType:"ppt",
//       fileName: "future.ppt"
//     }
//   ];

//   return (
//     <div>
//       <h1>Document Demo</h1>
//       <div id="viewer" style={{ height: '1000px' }}></div>
//       <DocViewer 
//         documents={docs} 
//         pluginRenderers={DocViewerRenderers}
//         style={{ display: 'none' }} // Hide DocViewer initially if not needed
//       />
//     </div>
//   );
// }

// export default App;


// NO OUTPUT



//--------------------------------------------------------LOCAL FILES NOT WORKING-------------------------------------------------------------------

// src/App.js

// import React from 'react';
// import './App.css';
// import DocumentViewer from './DocumentViewer';

// const App = () => {
//   const docs = [
//     {
//       uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
//       fileType: "docx",
//       fileName: "demo.docx"
//     },
//     {
//       uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
//       fileType: "xls",
//       fileName: "demo sample.xls"
//     },
//     {
//       uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
//       fileType: "ppt",
//       fileName: "future.ppt"
//     },
//     {
//       uri: "/files/sample.pdf",
//       fileType: "pdf",
//       fileName: "sample.pdf",
//       isLocal: true
//     },
//     {
//       uri: "/files/demo.docx",
//       fileType: "docx",
//       fileName: "demo.docx",
//       isLocal: true
//     }
//   ];

//   return (
//     <div className="App">
//       <h1>Document Demo</h1>
//       <DocumentViewer documents={docs} />
//     </div>
//   );
// }

// export default App;


// NOT GETTING OUTPUT


//-----------------------------------------------------------------------YT-------------------------------------------------------------

// import React from 'react';
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


// function App() {
//   const docs = [
//     {
//       uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
//       fileType: "docx",
//       fileName: "demo.docx"
//     },
//     {
//       uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
//       fileType: "xls",
//       fileName: "demo sample.xls"
//     },
//     {
//       uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
//       fileType:"ppt",
//       fileName: "future.ppt"
//     },
//     {
//       uri: require("./files/sampleeee.pdf"),
//       fileType: "pdf",
//       fileName: "sampleeee.pdf"
//     },
//     {
//       uri: require("./files/demo.docx"),
//       fileType: "docx",
//       fileName: "demo.docx"
//     }
//   ];

//   return (
//     <div>
//       <h1>Document Demo</h1>
//       <DocViewer 
//         documents={docs} 
//         pluginRenderers={DocViewerRenderers}
//         style={{ height: 1000 }}
//       />
//     </div>
//   );
// }

// export default App;


// REMOTE FILES ARE WORKING , LOCAL FILES NOT OPENING 


//----------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


function App() {
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "demo.docx"
    },
    {
      uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
      fileType: "xls",
      fileName: "demo sample.xls"
    },
    {
      uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType:"ppt",
      fileName: "future.ppt"
    },
    {
      uri: require("./files/sample.pdf"),
      fileType: "pdf",
      fileName: "sampleeee.pdf"
    },
    {
      uri: require("./files/demo.docx"),
      fileType: "docx",
      fileName: "demo.docx"
    }
  ];

  return (
    <div>
      <h1>Document Demo</h1>
      <DocViewer 
        documents={docs} 
        pluginRenderers={DocViewerRenderers}
        style={{ height: 1000 }}
      />
    </div>
  );
}

export default App;





