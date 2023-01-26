import { updateMovementType } from "./functions/updateMovementType.js"
import { updateMapDetails } from "./functions/updateMapDetails.js"

export const updateDetailsPage = () => {
	var currentCharacterPosition = $('.has-character'),
		currentCharacterPositionSprite = currentCharacterPosition.find('.sprite'),
		updateMovementStatModal = $('#details .movement-type modal-body'),
		updateMovementStatMessage = "No info",
		mapDetailsModal = $('#details .map-details modal-body');

	//INIT UPDATE FUNCTIONS
	updateMovementType(currentCharacterPosition,updateMovementStatModal,updateMovementStatMessage);
	updateMapDetails(currentCharacterPositionSprite,mapDetailsModal);
}