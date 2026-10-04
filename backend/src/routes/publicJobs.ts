import { Router } from "express";

import { getPublicJobs, getPublicJob } from "../controllers/publicJobs";
import { optionalAuth } from "../middleware/verifyAuth";

const router = Router();

/**
 * Public job board — no login required.
 * GET /api/public/jobs
 * GET /api/public/jobs/:id
 *
 * Writes (apply / save) stay on the authenticated /api/candidate/* routes.
 */
router.get("/", optionalAuth, getPublicJobs);
router.get("/:id", optionalAuth, getPublicJob);

export default router;
