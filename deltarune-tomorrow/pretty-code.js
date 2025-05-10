() => { 
    const deltr = "$(countdown June 5 2025 0:00:00 AM Etc/GMT+9)";
    if ((parseInt(deltr.charAt(0)) <= 3) || (!deltr.includes("day"))) {
        return deltr; 
    } else if(deltr.includes("month")) {
        return deltr.slice(0, 15) + " of tomorrows"; 
    } else if ((deltr.charAt(0) == "7") && deltr.includes("day")) {
        return "https://www.youtube.com/shorts/lF8nYw8EGgI"; 
    } else { 
        return deltr.slice(0, 2) + " tomorrows"; 
    }
}
