import React from "react";

export default function ContactCard() {
	return (
		<form>
			<h3>Contact Me</h3>
			<input type="text" placeholder="Name" />
			<br></br>
			<input type="text" placeholder="Email" />
			<br></br>
			<input type="text" placeholder="Message Here" />
			<br></br>
			<button>Submit</button>
		</form>
	);
}
