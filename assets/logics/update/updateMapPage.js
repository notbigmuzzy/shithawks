import { updateDate } from "./functions/updateDate.js"
import { resetEnergy } from "./functions/stats/resetEnergy.js"
import { updateHealth } from "./functions/stats/updateHealth.js"

export const updateMapPage = () => {
	updateDate();
	resetEnergy();
	updateHealth();
}