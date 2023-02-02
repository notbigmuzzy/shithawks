import { carPosition } from "./functions/stats/carPosition.js"
import { boatPosition } from "./functions/stats/boatPosition.js"
import { playerPosition } from "./functions/stats/playerPosition.js"
import { updateDate } from "./functions/stats/updateDate.js"
import { resetEnergy } from "./functions/stats/resetEnergy.js"
import { updateHealth } from "./functions/stats/updateHealth.js"
import { updateRefill } from "./functions/stats/updateRefill.js"
import { updateMovementLog } from "./functions/updateMovementType.js"
import { updateCash } from "./functions/stats/updateCash.js"
import { updateGuns } from "./functions/stats/updateGuns.js"
import { updateDrugs } from "./functions/stats/updateDrugs.js"
import { updateSpace } from "./functions/stats/updateSpace.js"
import { updateBitches } from "./functions/stats/updateBitches.js"

export const updateMapPage = () => {
	var currentCharacterPosition = $('.has-character'),
		currentCharacterPositionSprite = currentCharacterPosition.find('.sprite'),
		updateMovementStatModal = $('.junfo-log modal-body');

	playerPosition();
	carPosition();
	boatPosition();
	updateDate();
	resetEnergy();
	updateHealth();
	updateRefill();
	updateCash();
	updateGuns();
	updateDrugs();
	updateSpace();
	updateBitches();

	//INIT UPDATE FUNCTIONS
	updateMovementLog(currentCharacterPosition,updateMovementStatModal);
}