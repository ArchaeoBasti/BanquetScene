/*
The Banquet Scene - Interactive 3D View
Copyright (c) 2023, Sebastian Hageneuer
All rights reserved.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// This function hides all textboxes at once, when the hotspot button is switched off or when a textbox switch is happening
function hideAllHotspotTextboxes() {
  const collection = document.getElementsByClassName('text-box');
  for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = "none";
  }
}

// This function switches defined textboxes on or off depending on the current state
function TextboxSwitch(textbox_id, on) {
  // Cloned this function from sectiontoolSwitch() of init.js
  if(on === undefined) on = jQuery('#' + textbox_id).css("display")=="none";

  if(on) {
    hideAllHotspotTextboxes()
	  jQuery('#' + textbox_id).fadeIn().css("display","table");
  } else {
    jQuery('#' + textbox_id).css("display","none");
  }
}

// This function switches the inomrint box on or off
function ImprintSwitch(on) {
  // Cloned this function from sectiontoolSwitch() of init.js
  if(on === undefined) on = jQuery('#imprint').css("visibility")=="visible";

  if(on) {
  	jQuery('#imprint').css("visibility", "hidden");
  	jQuery('#imprint_on').css("visibility", "visible");
  	jQuery('#imprint_box').fadeIn().css("display","table");
  } else {
  	jQuery('#imprint_on').css("visibility", "hidden");
  	jQuery('#imprint').css("visibility", "visible");
  	jQuery('#imprint_box').css("display","none");
  }
}

function HighlightOn(model) {
  presenter.toggleInstanceSolidColorByName(model, true);
  //presenter.setInstanceVisibilityByName(model, false, true);
  //presenter.setInstanceVisibilityByName(model + "_Highlight", true, true);
  //presenter.toggleInstanceVisibilityByName(model, true);
  //presenter.toggleInstanceVisibilityByName(model + "_Highlight", true);
}

function HighlightOff(model) {
  presenter.toggleInstanceSolidColorByName(model, true);
  //presenter.setInstanceVisibilityByName(model, true, true);
  //presenter.setInstanceVisibilityByName(model + "_Highlight", false, true);
  //presenter.toggleInstanceVisibilityByName(model, true);
  //presenter.toggleInstanceVisibilityByName(model + "_Highlight", true);
}

function instanceSwitch(on) {
  // Cloned this function from hotspotSwitchh() of init.js
  if(on === undefined) on = jQuery('#hotspot').css("visibility")=="visible";

  if(on){
    jQuery('#hotspot').css("visibility", "hidden");
    jQuery('#hotspot_on').css("visibility", "visible");
  }
  else{
    jQuery('#hotspot_on').css("visibility", "hidden");
    jQuery('#hotspot').css("visibility", "visible");
  }
}
