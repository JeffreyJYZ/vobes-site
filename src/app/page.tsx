import Link from "next/link";
import {
	LATEST_RELEASE_URL,
	README_URL,
	RELEASES_URL,
	WEBSITE_REPO_URL,
} from "@/lib/consts";
import { IconExternalLink } from "@/ui/components/icon-external-link";
import { CopyBlock } from "@/ui/copy-block";

export default function HomePage() {
	const linkClass =
		"group inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white underline-offset-4 hover:underline transition-colors";
	const linkIconClass =
		"size-3 text-neutral-500 group-hover:text-white transition-colors";

	return (
		<>
			<div className="mb-12">
				<h1 className="mb-2">Vobes</h1>
				<p className="font-light italic text-neutral-400">
					The future of project management in programming
				</p>
			</div>
			<hr className="sep mb-10" />
			<div className="mb-10">
				<p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
					Desktop
				</p>
				<div className="flex flex-col gap-1 items-center">
					<Link href={LATEST_RELEASE_URL}>Latest Release</Link>
				</div>
			</div>
			<div className="mb-10">
				<p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
					CLI
				</p>
				<div className="flex flex-col gap-2 items-center">
					<CopyBlock value="cargo install vobes-cli" />
					<CopyBlock value="cargo install vobes-mcp" />
				</div>
			</div>
			<div>
				<p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
					Links
				</p>
				<div className="flex flex-col gap-1 items-center">
					<Link className={linkClass} href={RELEASES_URL}>
						<span>Releases</span>
						<IconExternalLink className={linkIconClass} />
					</Link>
					<Link className={linkClass} href={README_URL}>
						<span>README</span>
						<IconExternalLink className={linkIconClass} />
					</Link>
					<Link className={linkClass} href={WEBSITE_REPO_URL}>
						<span>Website Repo</span>
						<IconExternalLink className={linkIconClass} />
					</Link>
				</div>
			</div>
		</>
	);
}
