class State {
  constructor() {


    this._state = typeof IS_Attr_CampaignId === 'undefined' ? {
      activeButton: document.querySelector('#NPB-01'),
      company: "Алые Фиалки",
      lpr: 'Александр',
      status: 'Активный',
      branch: 'Рестораны',
      comment: 'Какой-то комментарий',
      address: 'Москва, Тверская 1',
      lkLink: 'https://lk.drive.ru/125689',
      phone: '+79169851250000',
      jobTitle: 'Ген.директор',
      email: 'alex@vk.com',
      kpDate: '2021-03-25',
      firstCallDate: '2021-03-22',
      price: '15000',
      period: '04.2021',
      login: 'login-125689',
      order: '1-TDYH0000',
      expectedPayDate: '2021-03-29',
      trxSMVP: 'T1235YTYI125000YYTY',
      payDate: '2021-03-30',
      flaytId: 'flayt-14785225'
    } : {
      activeButton: document.querySelector('#NPB-01'),
      company: "Алые Фиалки",
      lpr: 'Александр',
      status: 'Активный',
      branch: 'Рестораны',
      comment: 'Какой-то комментарий',
      address: IS_Attr_COMPANY_NAME.value,
      lkLink: 'https://lk.drive.ru/125689',
      phone: '+79169851250000',
      jobTitle: 'Ген.директор',
      email: 'alex@vk.com',
      kpDate: '2021-03-25',
      firstCallDate: '2021-03-22',
      price: '15000',
      period: '04.2021',
      login: 'login-125689',
      order: '1-TDYH0000',
      expectedPayDate: '2021-03-29',
      trxSMVP: 'T1235YTYI125000YYTY',
      payDate: '2021-03-30',
      flaytId: 'flayt-14785225'
    };
  }

  setItem(name, value) {
    this._state[name] = value;
  }

  getItem(name) {
    return this._state[name];
  }

  getFullState() {
    return this._state;
  }
}

const state = new State();
export default state;