import * as Yup from 'yup';
import { currencies } from '../../constants';

const FORM_ERROR = {
	REQUIRED: '${path} is required',
	MAX_TXT: '${path} must be at most ${max} characters',
	MIN_TXT: '${path} must be at least ${min} characters',
	MIN_NUM: 'Must be at least ${min}',
	INVALID_VALUE: 'Invalid value',
};

export const invoiceDefaultValue = {
	companyDetails: {
		name: 'Your Company Name',
		address: '123 Main Street, City, ZIP',
	},
	clientDetails: {
		name: 'Client Name',
		address: '456 Client Road, City, ZIP',
	},
	invoiceDetails: {
		prefix: 'INV-',
		number: '1001',
		currency: currencies[2].value,
		invoiceDate: new Date().toISOString().split('T')[0],
		dueDate: new Date(
			Date.now() + 30 * 24 * 60 * 60 * 1000
		).toISOString().split('T')[0],
	},
	invoiceItems: [],
	otherDetails: {
		paymentInstructions: 'Please make payment via bank transfer to...',
		notes: 'Thank you for your business!',
	},
};

export const invoiceSchema = Yup.object().shape({
	companyDetails: Yup.object().shape({
		name: Yup.string()
			.label('Company name')
			.required(FORM_ERROR.REQUIRED),
		address: Yup.string()
			.label('Company address')
			.required(FORM_ERROR.REQUIRED)
			.max(200, FORM_ERROR.MAX_TXT),
	}),
	clientDetails: Yup.object().shape({
		name: Yup.string()
			.label('Client name')
			.required(FORM_ERROR.REQUIRED),
		address: Yup.string()
			.label('Client address')
			.required(FORM_ERROR.REQUIRED)
			.max(200, FORM_ERROR.MAX_TXT),
	}),
	invoiceDetails: Yup.object().shape({
		prefix: Yup.string()
			.label('Invoice prefix')
			.required(FORM_ERROR.REQUIRED)
			.max(50, FORM_ERROR.MAX_TXT),
		number: Yup.string()
			.label('Invoice number')
			.required(FORM_ERROR.REQUIRED)
			.max(20, FORM_ERROR.MAX_TXT),
		currency: Yup.string()
			.label('Invoice currency')
			.required(FORM_ERROR.REQUIRED),
		invoiceDate: Yup.string()
			.label('Invoice date')
			.required(FORM_ERROR.REQUIRED),
		dueDate: Yup.string()
			.label('Due date')
			.required(FORM_ERROR.REQUIRED),
	}),

	invoiceItems: Yup.array().of(
		Yup.object().shape({
			name: Yup.string()
				.label('Item name')
				.required(FORM_ERROR.REQUIRED),
			description: Yup.string()
				.label('Description')
				.max(100, FORM_ERROR.MAX_TXT),
			quantity: Yup.number()
				.label('Item quantity')
				.required(FORM_ERROR.REQUIRED)
				.min(1, FORM_ERROR.MIN_NUM)
				.typeError(FORM_ERROR.INVALID_VALUE),
			unitPrice: Yup.number()
				.label('Item unit price')
				.required(FORM_ERROR.REQUIRED)
				.min(1, FORM_ERROR.MIN_NUM)
				.typeError(FORM_ERROR.INVALID_VALUE),
		})
	),
	otherDetails: Yup.object().shape({
		paymentInstructions: Yup.string()
			.label('Payment instructions')
			.max(200, FORM_ERROR.MAX_TXT),
		notes: Yup.string()
			.label('Notes')
			.max(200, FORM_ERROR.MAX_TXT),
	}),
});