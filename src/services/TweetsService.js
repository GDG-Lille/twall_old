import firebase from 'firebase/app';

class TweetsService {

  constructor() {
    this.db = firebase.firestore();
    this.collection = this.db.collection('tweets');
  }

  findAllForEdition(editionId) {
    return this.collection
      .where('edition', '==', editionId)
      .orderBy('createdAt', 'desc');
  }

  findAllFromTwitter(editionId, criteria) {
    return firebase.functions()
      .httpsCallable('findAllTweetsFromTwitter')({ editionId, criteria });
  }

}

export default new TweetsService();
