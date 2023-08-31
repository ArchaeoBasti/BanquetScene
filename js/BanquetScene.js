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

function hideAllHotspotButtonsExcept(except) {
  const buttons = ["king", "queen", "teumman", "fauna", "flora"];
  if(except) {
    const index = buttons.indexOf(except);
    const x = buttons.splice(index, 1);
  }

  for (const instance of buttons) {
    jQuery('#' + instance + '_on').css("visibility", "hidden");
    jQuery('#' + instance).css("visibility", "visible");
  }
}

function toggleInstanceMenu(on) {
  // Cloned this function from sectiontoolSwitch() of init.js
  if(on === undefined) on = jQuery('#clickinstances').css("visibility")=="visible";

  if(on) {
	  jQuery('.InstanceMenu').css("visibility","visible");
  } else {
    jQuery('.InstanceMenu').css("visibility","hidden");
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

// This function switches the imprint box on or off
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

// This function switches the different buttons on or off
function InstancesSwitch(instance, on) {
  // Cloned this function from hotspotSwitchh() of init.js
  if(on === undefined) on = jQuery('#' + instance).css("visibility")=="visible";

  if(on){
    jQuery('#' + instance).css("visibility", "hidden");
    jQuery('#' + instance + '_on').css("visibility", "visible");
    hideAllHotspotButtonsExcept(instance);
    switch(instance) {
       case 'king' : presenter.animateToTrackballPosition([2.58, 2.05, 0.31, 0.1, -0.06, 0.52]); break;
       case 'queen' : presenter.animateToTrackballPosition([14.72, 4.69, 0.13, 0, 0, 0.52]); break;
       case 'teumman' : presenter.animateToTrackballPosition([16.1, 15.0, -0.55, 0.2, 0.14, 0.5]); break;
       case 'fauna' : presenter.animateToTrackballPosition([1.43, 7.1, -0.4, 0.2, 0, 0.5]); break;
       case 'flora' : presenter.animateToTrackballPosition([-15.18, -7.12, -0.27, 0, 0, 0.88]); break;
    }
  }
  else{
    jQuery('#' + instance + '_on').css("visibility", "hidden");
    jQuery('#' + instance).css("visibility", "visible");
    hideAllHotspotButtonsExcept();
  }
}



//----- NOT NEEDED ANYMORE
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
