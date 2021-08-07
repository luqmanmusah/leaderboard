const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aQeQLOEMph5dw2BhyuYH/scores/'

export default class Request {
    constructor() {
      this.scoreList = [];
    }
  
    async getScore() {
      const promise = new Promise((myResolve) => {
        request.open('GET', requestURL);
        request.onload = () => {
          if (request.status === 200) {
            myResolve(request.response);
          } else {
            myResolve('Error');
          }
        };
        request.send();
      });
      const list = JSON.parse(await promise);
      this.scoreList = list.result;
      this.scoreList.sort((a, b) => b.score - a.score);
    }
  }
