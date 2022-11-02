import * as http from "cloudly-http"
import { router } from "../router"
import { Environment } from "./Environment"

export class Context {
	constructor(public readonly environment: Environment) {}
	async authenticate(request: http.Request): Promise<"admin" | undefined> {
		return this.environment.adminSecret && request.header.authorization == `Basic ${this.environment.adminSecret}`
			? "admin"
			: undefined
	}
	static async handle(request: Request, environment: Environment): Promise<Response> {
		return http.Response.to(await router.handle(http.Request.from(request), new Context(environment)))
	}
}
