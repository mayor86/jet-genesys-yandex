export default class State {
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
      q1: 'Ответ 1',
      q2: 'Ответ 2',
      q3: 'Ответ 3',
      q4: 'Ответ 4',
      q5: 'Ответ 5',
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
      numberToDial: IS_Attr_numbertodial.value,
      company: IS_Attr_COMPANYNAME.value,
      lpr: IS_Attr_contactname.value,
      status: IS_Attr_contactstate.value,
      branch: IS_Attr_Heading.value,
      comment: IS_Attr_comment.value,
      address: IS_Attr_Address.value,
      lkLink: IS_Attr_Link_to_personal_account.value,
      q1: IS_Attr_Q1.value,
      q2: IS_Attr_Q2.value,
      q3: IS_Attr_Q3.value,
      q4: IS_Attr_Q4.value,
      q5: IS_Attr_Q5.value,
      phone: '',
      jobTitle: '',
      email: '',
      kpDate: '',
      firstCallDate: '',
      price: '',
      period: '',
      login: '',
      order: '',
      expectedPayDate: '',
      trxSMVP: '',
      payDate: '',
      flaytId: ''
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