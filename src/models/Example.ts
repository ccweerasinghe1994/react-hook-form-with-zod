import { z } from 'zod';

const myShema = z.string();

myShema.parse('hello world'); // 'hello world'
myShema.parse(123); // throws error


