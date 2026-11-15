module.exports = {
  apps: [
    {
      name: "insurance-helpdesk",
      script: "node_modules/next/dist/bin/next",
      args: "start --port 3010",
      instances: 1, // Instanță unică obligatorie pentru integritatea bazei SQLite WAL și rate-limiting
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        PORT: 3010,
      },
      error_file: "logs/pm2-error.log",
      out_file: "logs/pm2-out.log",
      merge_logs: true,
      time: true,
      min_uptime: "10s",
      max_restarts: 10,
      restart_delay: 2000,
    },
  ],
};
