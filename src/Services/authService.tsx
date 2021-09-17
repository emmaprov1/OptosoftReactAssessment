import axios from 'axios'
import firebase from './firebaseInitService'
const SERVER_URL = 'http://localhost:3200/'

const authService = {

  createUserAccountApi: (data: any) => {
    return axios.post(SERVER_URL + 'signup', data)
      .then((res: { data: any }) => res.data)
  },

  createUserAccount: (data: { email: string; password: string }) => {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
  },

  createUserDetail: async (data: { [x: string]: any; uid?: any }) => {
    const db = firebase.firestore();
    console.log(data)
    return await db.collection('users').doc(data.uid).set(data);
  },

  loginUser: (data: { email: string; password: string }) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  },

  PasswordReset: (data: { email: string }) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },
  logoutUser: async () => {
    return await firebase.auth().signOut()
  },

  getAuth: (data: { email: string }) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },
  updateUser: async (data: firebase.firestore.UpdateData, uid: any) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },
  updateClientRegistrationGeneral: async (data: firebase.firestore.UpdateData, uid: any) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },
  saveGeneralInfo: async (data: firebase.firestore.UpdateData, uid: any) => {
    const db = firebase.firestore();
    const userObj = await db.collection('users').where('uid', '==', uid).get()
    userObj.forEach(user => {
      return db.collection('users').doc(user.id).update(data);
    })
  },

  loginClient: (data: { email: string; password: string }) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  },
  ClientPasswordReset: (data: { email: string }) => {
    return firebase.auth().sendPasswordResetEmail(data.email)
  },
  getUserDetails: async (uid: string) => {
    const db = firebase.firestore();
    return await db.collection('users').doc(uid).get()
  }
}
export default authService
