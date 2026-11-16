import type { ExpressiveCodeConfig, LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig } from "./types/config";
import { LinkPreset } from "./types/config";

// 公开站点信息；部署前替换为你自己的内容。
export const siteConfig: SiteConfig = {
	title: "念奴小筑",
	subtitle: "花开有声 · 念念不忘",
	siteStartedAt: "2026-11-16",
	lang: "zh_CN",
	themeColor: { hue: 330, fixed: false },
	banner: {
		enable: false,
		src: "/images/banner.svg",
		position: "center",
		credit: { enable: false, text: "", url: "" },
	},
	toc: { enable: true, depth: 2 },
	favicon: [{ src: "/images/avatar.webp", sizes: "any" }],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		{ name: "文章总览", url: "/archive/" },
		{ name: "日记", url: "/diary/" },
		{ name: "音乐", url: "/music/" },
		{ name: "友链", url: "/friends/" },
		{ name: "留言板", url: "/guestbook/" },
		LinkPreset.About,
	],
};

// 留空时显示配置提示，不会访问外部留言服务。
export const twikooConfig = { envId: "" };

export const profileConfig: ProfileConfig = {
	avatar: "/images/avatar.webp",
	name: "花念奴",
	bio: "花间记事，念念成诗。",
	links: [
        { name: "邮箱", icon: "fa6-regular:envelope", url: "mailto:2468484854@qq.com" },
    ],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = { theme: "github-dark" };
