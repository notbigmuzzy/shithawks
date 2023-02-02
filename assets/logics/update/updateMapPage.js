import { carPosition } from "./functions/stats/carPosition.js"
import { boatPosition } from "./functions/stats/boatPosition.js"
import { playerPosition } from "./functions/stats/playerPosition.js"
import { updateDate } from "./functions/stats/updateDate.js"
import { resetEnergy } from "./functions/stats/resetEnergy.js"
import { updateHealth } from "./functions/stats/updateHealth.js"
import { updateRefill } from "./functions/stats/updateRefill.js"
import { updateMovementLog } from "./functions/updateMovementType.js"

export const updateMapPage = () => {
	var currentCharacterPosition = $('.has-character'),
		currentCharacterPositionSprite = currentCharacterPosition.find('.sprite'),
		updateMovementStatModal = $('.junfo-log modal-body'),
		updateMovementStatMessage = "No info";

	playerPosition();
	carPosition();
	boatPosition();
	updateDate();
	resetEnergy();
	updateHealth();
	updateRefill();

	//INIT UPDATE FUNCTIONS
	updateMovementLog(currentCharacterPosition,updateMovementStatModal,updateMovementStatMessage);
}