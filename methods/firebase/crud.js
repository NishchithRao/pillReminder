import firebase from 'firebase';
import 'firebase/firestore';

let store
if(firebase.apps.length) {
store = firebase.firestore();
}
else {
    store = '';
}

export const add = async reminder => {
    return await firebase.firestore().collection('reminders')
.add(reminder)
.then(data => data)
.catch(err => {
    console.log(err);
    return false;
});
}


export const remove = async id => {
    return await firebase.firestore().collection('reminders')
.doc(id)
.delete()
.then(() => true)
.catch(err => {
    console.log(err);
    return false;
});
}

export const get = async () => {
    return await firebase.firestore()
    .collection('reminders')
    .get()
};