import { carPosition } from "./functions/stats/carPosition.js"
import { boatPosition } from "./functions/stats/boatPosition.js"
import { playerPosition } from "./functions/stats/playerPosition.js"
import { updateDate } from "./functions/stats/updateDate.js"
import { resetEnergy } from "./functions/stats/resetEnergy.js"
import { updateHealth } from "./functions/stats/updateHealth.js"
import { updateRefill } from "./functions/stats/updateRefill.js"

export const updateMapPage = () => {
	playerPosition();
	carPosition();
	boatPosition();
	updateDate();
	resetEnergy();
	updateHealth();
	updateRefill();
}