/* What Are Web APIs?

API stands for Application Programming Interface — a set of rules and protocols that allow software applications to communicate and exchange data. Web APIs are specifically designed for web applications and are not part of JavaScript itself. They fall into two main categories: browser APIs and third-party APIs.

Browser APIs expose data from the browser that you can access and manipulate using JavaScript. They provide functionality for manipulating website structure, handling events, working with storage, and communicating with the network.

The DOM API is a core browser API used to manipulate HTML elements, their styles, and attributes. It's a fundamental concept in web development — you'll use it to dynamically change page content and structure.

Other notable browser APIs include the Storage API (for storing data locally on the user's device) and APIs for handling user interactions, getting browser info (like location), and working with video/audio elements. Browser APIs come built into the browser, making them powerful tools for building web applications.

Third-party APIs are not built into the browser by default — you must retrieve their code and typically follow detailed documentation. Examples include the Google Maps API, weather APIs, social media APIs, payment APIs, data APIs, and translation APIs.

Web APIs are essential for building modern, dynamic web applications that interact with various services and data sources. */


/* DOM Node Relationships in the DOM Tree

The root of the DOM tree is the html element — the top-level container for all content in an HTML document. All other nodes are descendants of this root node.

Parent nodes are elements that contain other elements. Child nodes are elements contained within another element. In the example, the body element is the parent of the p element, while p is a child of body.

Sibling nodes are elements that share the same parent. For example, two li elements under the same ul are siblings, and the h1 and p elements are siblings because they share the same body parent.

Descendant nodes are elements contained within another element, either directly or indirectly. An element is a descendant if it can be reached by going downwards through the DOM tree from its ancestor. For example, li elements are descendants of body.

Ancestor nodes are elements higher up in the DOM tree hierarchy than another element. For example, body is an ancestor of the li elements.

Understanding these relationships is essential for manipulating and navigating the DOM tree with JavaScript. 

*/

//How Do You Add and Remove Nodes from the DOM with appendChild() and removeChild()?
//let parentNode;
//parentNode.appendChild(newnode);

