module.exports = ({ env }) => {
  const sqlite = {
    client: "sqlite",
    connection: {
      filename: ".tmp/data.db",
    },
    useNullAsDefault: true,
  };

  const postgres = {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
  };

  return {
    connection: process.env.NODE_ENV === "development" ? sqlite : postgres,
  };
};
