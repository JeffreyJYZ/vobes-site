import { CopyBlock } from "@/ui/copy-block";

export default function HomePage() {
	return (
		<>
			<div className="mb-12">
				<h1 className="mb-2">Vobes</h1>
				<p className="font-light italic text-neutral-400">
					The future of project management in programming
				</p>
			</div>
			<hr className="sep mb-10" />
			<div className="flex flex-col gap-1 items-center mb-10">
				<a href="https://github.com/jeffreyjyz/vobes/releases/latest">
					Latest Release
				</a>
				<a href="https://github.com/jeffreyjyz/vobes#readme">Repository README</a>
			</div>
			<div>
				<p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
					CLI
				</p>
				<div className="flex flex-col gap-2 items-center">
					<CopyBlock value="cargo install vobes-cli" />
					<CopyBlock value="cargo install vobes-mcp" />
				</div>
			</div>
		</>
	);
}
