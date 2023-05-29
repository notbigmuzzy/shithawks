/*IMPORT FUNCTIONS*/
import { startMeUp } from './assets/logics/saving/startMeUp.js';
import { loadSaveFiles } from './assets/logics/saving/loadSaveFiles.js';
import { keyboardControls } from './assets/logics/interaction/keyboardControls.js';
import { tabChange } from './assets/logics/interaction/tabChange.js';
import { mapOverviewTabs } from './assets/logics/interaction/tabChange.js';
import { nextDayOnClick } from './assets/logics/interaction/mouseControls.js'

/*EXECUTE FUNCTIONS*/
startMeUp();
keyboardControls();
tabChange();
nextDayOnClick();
loadSaveFiles();
mapOverviewTabs();