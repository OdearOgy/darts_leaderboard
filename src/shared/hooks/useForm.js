import { useState } from 'react';

const useForm = (initialValues, callback) => {
	const [values, setValues] = useState(initialValues);
	const handleSubmit = event => {
		event && event.preventDefault();
		callback();
	};
	const handleChange = event => {
		event.persist();
		setValues(values => ({ ...values, [event.target.name]: event.target.value }));
	};
	return {
		handleSubmit,
		handleChange,
		values,
	};
};
export default useForm;
