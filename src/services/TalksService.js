import axios from 'axios';

class TalksService {

  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.VUE_APP_URL_TALKS_API,
    });
  }

  findAllForEdition(editionId, roomId = 'room-1') {
    const params = { editionId, roomId };
    return this.httpClient
      .get('/findAllActiveTalks', { params })
      .then(res => res.data)
      .then(talks => {
        Object.values(talks).forEach(talk => talk.hour = new Date(talk.hour._seconds * 1000));
        return talks;
      });
  }

}

export default new TalksService();
