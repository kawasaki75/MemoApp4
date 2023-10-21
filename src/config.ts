import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBod4MyZ8de1CNtgDHhZZVKlgYpb-1z31o',
  authDomain: 'memoapp4-fc7ef.firebaseapp.com',
  projectId: 'memoapp4-fc7ef',
  storageBucket: 'memoapp4-fc7ef.appspot.com',
  messagingSenderId: '201073859196',
  appId: '1:201073859196:web:c21eb6439004a0b2bf87f9'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
