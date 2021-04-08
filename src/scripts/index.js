import initialData from '../utils/initialData.js';
import Section from '../components/Section.js';
import Form from '../components/Form.js';

const navigationPanelBtnSelector = '.navigation-panel__button'
const navigationPanelSelector = '.navigation-panel';
const informationPanelSelector = '.information-panel';


const newForm = new Form('#navigation-panel-button');
const newSection = new Section({
  items: initialData,
  renderer: (item) => {
    newSection.addItem(newForm.generateForm(item))
  }
}, navigationPanelSelector);

newSection.renderItems();

const state = {
  navigationPanelBtn: document.querySelector('#npb-01'),
  panel: ''
}

function handlePanelBtnClick(evt) {
  evt.target.classList.add('navigation-panel__button_active');
  evt.target.setAttribute('disabled', 'true');
  state.navigationPanelBtn.classList.remove('navigation-panel__button_active')
  state.navigationPanelBtn.removeAttribute('disabled');
  state.navigationPanelBtn = evt.target;
  newSection.removeItem();

  evt.target.id === 'npb-01' ? newSection.addItem('Стартовая страница') : newSection.addItem('Связь с представителем');
  console.log('IS_Attr_CampaignId: ' + document.head.getElementsByTagName('meta')[2].value);
}



document.querySelectorAll(navigationPanelBtnSelector).forEach(btn => {
  btn.addEventListener('click', handlePanelBtnClick);
})