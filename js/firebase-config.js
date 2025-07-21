// Configuração do Firebase v9 compatível
const firebaseConfig = {
  apiKey: "AIzaSyDMFm9ULvpcoy7qIi8-q99jksI7D5GN3i0",
  authDomain: "solucioneja.firebaseapp.com",
  projectId: "solucioneja",
  storageBucket: "solucioneja.firebasestorage.app",
  messagingSenderId: "291871585399",
  appId: "1:291871585399:web:3607c822ac93fc8bbcc272",
  measurementId: "G-DNWGXTS7KT"
};

// Inicialização compatível com Firestore v9 (modo compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
