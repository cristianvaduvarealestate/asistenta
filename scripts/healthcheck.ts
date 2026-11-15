import http from "http";

const PORT = process.env.PORT || 3010;
const URL = `http://127.0.0.1:${PORT}/api/health`;

console.log(`[Healthcheck] Verificare stare aplicație la ${URL}...`);

const req = http.get(URL, { timeout: 3000 }, (res) => {
  let body = "";
  res.on("data", (chunk) => (body += chunk));
  res.on("end", () => {
    if (res.statusCode === 200) {
      try {
        const data = JSON.parse(body);
        console.log(`✓ Aplicația este activă (status: ${data.status}, uptime: ${data.uptime}s, db: ${data.database})`);
        process.exit(0);
      } catch {
        console.log("✓ Aplicația răspunde cu 200 OK.");
        process.exit(0);
      }
    } else {
      console.error(`✗ Healthcheck eșuat! Cod HTTP: ${res.statusCode}`);
      console.error(body);
      process.exit(1);
    }
  });
});

req.on("error", (err) => {
  console.error(`✗ Conexiunea către server a eșuat: ${err.message}`);
  process.exit(1);
});

req.on("timeout", () => {
  req.destroy();
  console.error("✗ Conexiunea a expirat (timeout > 3000ms)!");
  process.exit(1);
});
