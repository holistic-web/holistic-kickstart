import firebase from 'firebase';
import VuexPersistence from 'vuex-persist';

import firebaseConfig from '../../config/firebase';
import accountStore from './modules/AccountStore';
import documentAStore from './modules/DocumentAStore';
import documentBStore from './modules/DocumentBStore';

// Create a persisted state cookie for the authentication module (keeps user's signed in!)
const vuexCookie = new VuexPersistence({
	supportCircular: true,
	modules: [
		'account'
	]
});

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const store = {
	state: {
		firebase,
		db
	},
	modules: {
		account: accountStore,
		documentA: documentAStore,
		documentB: documentBStore
	},
	plugins: [
		vuexCookie.plugin
	]
};

export default store;
