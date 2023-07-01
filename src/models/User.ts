import z from 'zod';

export const BasicUserSchema = z.object({
	name: z
		.string()
		.trim()
		.min(3, { message: 'Name must be at least 3 characters long' }),
	username: z
		.string()
		.trim()
		.toLowerCase()
		.min(4, { message: 'Username must be at least 4 characters long' }),
	email: z.string().email().trim().toLowerCase(),
	phone: z
		.string()
		.min(10, { message: 'Phone number must be at least 10 characters long' }),
	website: z
		.string()
		.trim()
		.toLowerCase()
		.min(5, { message: 'Website must be at least 5 characters long' })
		.refine((value) => value.indexOf('.') !== -1, {
			message: 'Website must be a valid URL'
		})
		.optional(),
	company: z.object({
		name: z
			.string()
			.trim()
			.min(5, { message: 'Company name must be at least 5 characters long' }),
		catchPhrase: z.string().optional()
	})
});

const AddressSchema = z.object({
	street: z
		.string()
		.trim()
		.min(5, { message: 'Street must be at least 5 characters long' }),
	suite: z.string().trim().optional(),
	city: z
		.string()
		.trim()
		.min(2, { message: 'City must be at least 2 characters long' }),
	zipcode: z
		.string()
		.regex(/^\d{5}(?:[-\s]\d{4})?$/, {
			message: 'must be 5 digit zip. optional 4 digit extension allowed'
		})
		.optional()
});

const UserAddressSchemaWithGeo = AddressSchema.extend({
	geo: z.object({
		lat: z.string(),
		lng: z.string()
	})
});

const HasIdSchema = z.object({
	id: z.number().int().positive()
});

export const UserSchemaWithAddress = BasicUserSchema.extend({
	address: AddressSchema
}).merge(HasIdSchema);

export const UserSchemaWithGeo = BasicUserSchema.extend({
	address: UserAddressSchemaWithGeo
}).merge(HasIdSchema);

export type UserWithAddress = z.infer<typeof UserSchemaWithAddress>;

export type UserWithGeo = z.infer<typeof UserSchemaWithGeo>;
