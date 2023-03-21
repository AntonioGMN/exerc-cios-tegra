export function handlerInput(obj, setObj, e) {
	setObj({ ...obj, [e.target.name]: e.target.value });
}
