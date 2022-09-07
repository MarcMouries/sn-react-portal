import { createStoreon } from 'storeon'

import theme from "./theme";
import sidebar from './sidebar'

export const store = createStoreon([theme, sidebar]);
