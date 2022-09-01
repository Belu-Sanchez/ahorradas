// TODO: Add SDKs for Firebase products that you want to use

// import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxqn9YEMzMrLQFXKjwuyw9YlaV6QZqPKQ",
  authDomain: "ahorradas-ae76b.firebaseapp.com",
  projectId: "ahorradas-ae76b",
  storageBucket: "ahorradas-ae76b.appspot.com",
  messagingSenderId: "732381135884",
  appId: "1:732381135884:web:a25333f7472f4966e95a29"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

const saveOperacion = (operaciones) => {

   db.collection("operaciones").add({
     operaciones
    })
    .then((docRef) => {
      mensajeOk();
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      mensajeError();
        // console.error("Error adding document: ", error);
    });
}



const mensajeOk = () => {
  Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
)
}


const mensajeError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
saveOperacion(operaciones)

