// // src/DocumentViewer.js
// import React from 'react';
// import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
// import '@cyntler/react-doc-viewer/dist/index.css';

// const DocumentViewer = ({ documents }) => {
//   return (
//     <div style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}>
//       <DocViewer documents={documents} pluginRenderers={DocViewerRenderers} />
//     </div>
//   );
// };

// export default DocumentViewer;


//----------------------------------local files-------------------------------------------------------------




// src/DocumentViewer.js

// import React, { useEffect, useRef, useState } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// const DocumentViewer = ({ documents }) => {
//   const viewer = useRef(null);
//   const [currentDoc, setCurrentDoc] = useState(null);

//   useEffect(() => {
//     if (currentDoc && currentDoc.isLocal) {
//       WebViewer(
//         {
//           path: '/webviewer/lib',
//           initialDoc: currentDoc.uri,
//         },
//         viewer.current,
//       ).then((instance) => {
//         const { documentViewer } = instance.Core;
//         // you can now call WebViewer APIs here...
//       });
//     }
//   }, [currentDoc]);

//   const handleFileClick = (doc) => {
//     setCurrentDoc(doc);
//   };

//   return (
//     <div className="DocumentViewer">
//       <div className="header">Document Viewer</div>
//       <div className="file-list">
//         <ul>
//           {documents.map((doc, index) => (
//             <li key={index} onClick={() => handleFileClick(doc)}>
//               {doc.fileName}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="viewer">
//         {currentDoc && currentDoc.isLocal ? (
//           <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
//         ) : (
//           <DocViewer 
//             documents={currentDoc ? [currentDoc] : []} 
//             pluginRenderers={DocViewerRenderers} 
//             style={{ height: 1000 }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentViewer;


//------------------------------------all local files are not working --------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------


import React from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import '@cyntler/react-doc-viewer/dist/index.css';

const DocumentViewer = ({ documents }) => {
  return (
    <div style={{ width: '100%', height: '600px', border: '1px solid #ccc' }}>
      <DocViewer documents={documents} pluginRenderers={DocViewerRenderers} />
    </div>
  );
};

export default DocumentViewer;



