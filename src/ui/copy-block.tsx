"use client";

import { useState } from "react";
import { IconCheck } from "@/ui/components/icon-check";
import { IconCopy } from "@/ui/components/icon-copy";

export function CopyBlock({ value }: { value: string }) {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 1200);
	};

	return (
		<button
			type="button"
			onClick={copy}
			className="group flex items-center gap-3 px-4 py-2 border border-neutral-700 rounded-md sf-mono text-sm hover:border-neutral-500 transition-colors"
		>
			<span>{value}</span>
			<span className="text-neutral-500 group-hover:text-neutral-300">
				{copied ? (
					<IconCheck className="size-4" />
				) : (
					<IconCopy className="size-4" />
				)}
			</span>
		</button>
	);
}
