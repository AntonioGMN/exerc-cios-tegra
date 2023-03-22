export function handlerInput(obj, setObj, e) {
	setObj({ ...obj, [e.target.name]: e.target.value });
}

export function someInputNotFilled(obj) {
	return Object.values(obj).some((value) => value === "");
}
