import { app } from "./index";
import { logger } from "./common/logger/logger";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}/`);
});
