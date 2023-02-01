/*IMPORT FUNCTIONS*/
import { startMeUp } from './assets/logics/saving/startMeUp.js';
import { loadSaveFiles } from './assets/logics/saving/loadSaveFiles.js';
import { keyboardControls } from './assets/logics/keyboardControls.js';
import { tabChange } from './assets/logics/tabChange.js';
import { mapOverviewTabs } from './assets/logics/tabChange.js';
import { nextDayOnClick } from './assets/logics/nextDayOnClick.js'

/*EXECUTE FUNCTIONS*/
startMeUp();
keyboardControls();
tabChange();
nextDayOnClick();
loadSaveFiles();
mapOverviewTabs();