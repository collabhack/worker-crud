import { Context } from "./Context"
import { Environment } from "./Context/Environment"

import "./item"
import "./version"

export default {
	async fetch(request: Request, environment: Environment) {
		return await Context.handle(request, environment)
	},
}
