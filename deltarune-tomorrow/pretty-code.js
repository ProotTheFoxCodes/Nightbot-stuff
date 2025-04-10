const deltr = "$(countdown June 5 2025 12:00:00 AM Etc/GMT-4)";
if (deltr.includes("month")) {
deltr.slice(0,15) + "of";
} else {
deltr.slice(0,2);
}
)
