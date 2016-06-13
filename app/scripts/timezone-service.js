"use strict";

import moment from 'moment-timezone';

export function init(cities) {

	let container = document.getElementById("timezones");

	cities.map((c) => {

		let currTime = moment().tz(c);

		let h3  = document.createElement('h3');
		h3.innerHTML = c.split('/')[1].replace('_', ' ');
		let time = document.createElement('time');
		time.setAttribute("datetime", currTime.format());
		time.innerHTML = currTime.format('HH:mm');

		container.appendChild(h3);
		container.appendChild(time);

	});
}