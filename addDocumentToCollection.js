/* call firestore instance from the connecToDb file*/
const connectToFireStore = require('./connectToDb.js');
const firestore = connectToFireStore.firestore;


/* Define Collection from your firestore DB */
//const collectionName = 'your collections name';
const collectionName = 'Skincare';

/* Define the name of the document 
*/
const docName = 'test'

/* Append the strings together  with '/' */
const documentToAdd = collectionName + '/' + docName


/* Create the name of the fields for the document*/
const fieldNameOne = "testOne";
const fieldNameTwo = "testTwo";

/* Create the document */
const document = firestore.doc(documentToAdd);

/* Enter data into the document fields */
document.set({
	fieldNameOne: 'Hello',
	fieldNameTwo: 'World!',
}).then(() => {
	console.log('Document has been created with fields:', fieldNameOne, fieldNameTwo);
});



