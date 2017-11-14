export const parseValue = (prevValue, nextNumber) => {
	let value = nextNumber

	if (prevValue !== '0') {
		value = `${prevValue}${nextNumber}`
    }

    if (prevValue == 0 && nextNumber == '.') {
       	value = `${prevValue}${nextNumber}`
    }

    if (!prevValue && nextNumber == '.') {
    	value = '0.'
    }

    if (prevValue === '0' && nextNumber == 0) {
    	return prevValue
    }

    if (prevValue.indexOf('.') != -1 && nextNumber == '.') {
        return prevValue
    }

	return value
}
