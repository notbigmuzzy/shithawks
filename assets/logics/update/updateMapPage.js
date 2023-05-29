import { carPosition } from "./stats/carPosition.js"
import { boatPosition } from "./stats/boatPosition.js"
import { playerPosition } from "./stats/playerPosition.js"
import { updateDate } from "./stats/updateDate.js"
import { resetEnergy } from "./stats/resetEnergy.js"
import { updateHealth } from "./stats/updateHealth.js"
import { updateRefill } from "./stats/updateRefill.js"
import { updateMovementLog } from "./stats/updateMovementType.js"
import { updateCash } from "./stats/updateCash.js"
import { updateGuns } from "./stats/updateGuns.js"
import { updateDrugs } from "./stats/updateDrugs.js"
import { updateSpace } from "./stats/updateSpace.js"
import { updateBitches } from "./stats/updateBitches.js"
import { updateDrugPrices } from "./stats/updateDrugPrices.js"

export const updateMapPage = () => {
	let currentCharacterPosition = $('.has-character'),
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
	updateDrugPrices();

	//INIT UPDATE FUNCTIONS
	updateMovementLog(currentCharacterPosition,updateMovementStatModal);
}