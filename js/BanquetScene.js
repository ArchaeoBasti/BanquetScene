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

function hideAllHotspotTextboxes() {
  const collection = document.getElementsByClassName('text-box');
  for (let i = 0; i < collection.length; i++) {
      collection[i].style.visibility = "hidden";
  }
}

function toggleTextboxVisibility(textbox_class) {
  const collection = document.getElementsByClassName(textbox_class);
  for (let i = 0; i < collection.length; i++) {
    if (window.getComputedStyle(collection[i]).visibility === "hidden") {
			hideAllHotspotTextboxes();
      collection[i].style.visibility = "visible";
    } else {
      collection[i].style.visibility = "hidden";
    }
  }
}

function ImprintSwitch(on) {
  //if(on === undefined) on = jQuery('#sections').css("visibility")=="visible";

  if(on){
	jQuery('#imprint').css("visibility", "hidden");
	jQuery('#imprint_on').css("visibility", "visible");
	//jQuery('#sections-box').fadeIn().css("display","table");
	//jQuery('#xplane, #yplane, #zplane').css("visibility", "visible");
  }
  else{
	jQuery('#imprint_on').css("visibility", "hidden");
	jQuery('#imprint').css("visibility", "visible");
	//jQuery('#sections-box').css("display","none");
	//jQuery('#sections-box img').css("visibility", "hidden");
	//presenter.setClippingXYZ(0, 0, 0);
  }
}
