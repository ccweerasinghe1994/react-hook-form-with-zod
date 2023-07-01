import { z } from 'zod';
import { UserSchemaWithGeo } from '../models/User';

const UserArray = z.array(UserSchemaWithGeo);

type UserArrayT = z.infer<typeof UserArray>;

export default async function fetchUsers(): Promise<UserArrayT | undefined> {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		if (!response.ok) return undefined;

		const users: UserArrayT = await response.json();
		const parseData = UserArray.parse(users);
		console.log(parseData);

		return parseData;
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error(error);
		}
	}
}
