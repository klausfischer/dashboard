"use strict";

import * as tzs from './timezone-service';
import * as megamath from './megamath';

// Widget Timezones
tzs.init([
	"Europe/Vienna",
	"America/New_York",
	"Asia/Shanghai"]);

// Widget Megamath
document.getElementById("btnQuad").addEventListener('click', () => {
	let x = document.getElementById("megamath__inputval").value;
	document.getElementById("megamath__result").innerHTML = megamath.cube(x);

});