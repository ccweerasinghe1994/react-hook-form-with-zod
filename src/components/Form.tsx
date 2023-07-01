import { SubmitHandler, useForm } from 'react-hook-form';
import { UserSchemaWithAddress } from '../models/User';
import type { UserWithAddress } from '../models/User';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export default function Form() {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors }
	} = useForm<UserWithAddress>({
		resolver: zodResolver(UserSchemaWithAddress)
	});

	const onSubmit: SubmitHandler<UserWithAddress> = (data) => {
		console.log(data.name);
		console.log(data);
	};
	console.log(errors);

	return (
		<Box
			sx={{
				backgroundColor: 'primary.dark'
			}}
		>
			<Button
				variant="contained"
				onClick={() => trigger()}
				// className="bg-gray-300 rounded p-2 mb-2 text-xl"
			>
				Display Data Requirement
			</Button>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col max-w-3xl gap-2 mx-auto"
			>
				<label htmlFor="name" className="text-xl text-white">
					Name:
				</label>
				<input
					id="name"
					type="text"
					{...register('name')}
					className="rounded-md text-xl p-2"
					placeholder="John Doe"
				/>
				{errors?.name && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.name?.message}
					</p>
				)}
				<label htmlFor="userName" className="text-xl text-white">
					Username:
				</label>
				<input
					id="userName"
					type="text"
					{...register('username')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.username && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.username?.message}
					</p>
				)}
				<label htmlFor="email" className="text-xl text-white">
					Email:
				</label>
				<input
					id="email"
					type="text"
					{...register('email')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.email && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.email?.message}
					</p>
				)}
				<label htmlFor="phone" className="text-xl text-white">
					Phone:
				</label>
				<input
					id="phone"
					type="text"
					{...register('phone')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.phone && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.phone?.message}
					</p>
				)}
				<label htmlFor="email" className="text-xl text-white">
					Email:
				</label>
				<input
					id="email"
					type="text"
					{...register('email')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.email && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.email?.message}
					</p>
				)}
				<label htmlFor="email" className="text-xl text-white">
					Email:
				</label>
				<input
					id="email"
					type="text"
					{...register('email')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.email && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.email?.message}
					</p>
				)}
				<label htmlFor="email" className="text-xl text-white">
					Email:
				</label>
				<input
					id="email"
					type="text"
					{...register('email')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.email && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.email?.message}
					</p>
				)}
				<label htmlFor="email" className="text-xl text-white">
					Email:
				</label>
				<input
					id="email"
					type="text"
					{...register('email')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.email && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.email?.message}
					</p>
				)}
				<label htmlFor="email" className="text-xl text-white">
					Email:
				</label>
				<input
					id="email"
					type="text"
					{...register('email')}
					className="rounded-md text-xl p-2"
					placeholder="user name"
				/>
				{errors?.email && (
					<p className="bg-yellow-100 text-red-500 italic">
						{errors.email?.message}
					</p>
				)}
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</Box>
	);
}
