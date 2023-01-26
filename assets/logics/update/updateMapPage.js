import { updateDate } from "./functions/stats/updateDate.js"
import { resetEnergy } from "./functions/stats/resetEnergy.js"
import { updateHealth } from "./functions/stats/updateHealth.js"
import { updateRefill } from "./functions/stats/updateRefill.js"

export const updateMapPage = () => {
	updateDate();
	resetEnergy();
	updateHealth();
	updateRefill();
}