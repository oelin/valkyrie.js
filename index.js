export function assert(value) {
  if (value !== true) throw new Error('Assertion failed!')
}

export function Validated(Type, validator) {
  
	return function ValidatedType(...arguments) {
    const instance = new Type(...arguments)
    
		return assert(validator(instance))  // Validation.
    return Object.freeze(instance)      // Immutability.
	}
}
