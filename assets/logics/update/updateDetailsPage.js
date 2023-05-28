import { updateMovementType } from "./functions/updateMovementType.js"
import { updateMapDetails } from "./functions/updateMapDetails.js"

export const updateDetailsPage = () => {
	let currentCharacterPosition = $('.has-character'),
		currentCharacterPositionSprite = currentCharacterPosition.find('.sprite'),
		updateMovementStatModal = $('#details .movement-type modal-body'),
		mapDetailsModal = $('#details .map-details modal-body');

	//INIT UPDATE FUNCTIONS
	updateMovementType(currentCharacterPosition,updateMovementStatModal);
	updateMapDetails(currentCharacterPositionSprite,mapDetailsModal);
}