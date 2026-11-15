import { processDueJobs } from "../src/lib/jobs";

processDueJobs(50).then((result) => console.log(JSON.stringify(result))).catch((error) => { console.error("Job processing failed"); console.error(error instanceof Error ? error.message : error); process.exit(1); });
