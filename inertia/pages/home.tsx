import { Head } from "@inertiajs/react";
import Layout from "~/app/layout";

export default function Home(props: { version: number }) {
	console.log("hello world");
	return (
		<Layout>
			<Head title="Homepage" />
			<div className="container">
				<div className="title">AdonisJS {props.version} x Inertia x React</div>

				<span>
					Learn more about AdonisJS and Inertia.js by visiting the{" "}
					<a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
				</span>
			</div>
		</Layout>
	);
}
