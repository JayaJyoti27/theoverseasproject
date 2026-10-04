import { Request, Response } from "express";

import * as CandidateService from "../services/candidates";

/*
|--------------------------------------------------------------------------
| Public job board
|--------------------------------------------------------------------------
| Anyone can browse. If the request carries a valid candidate session
| (attached by optionalAuth as req.candidateId), applied/saved flags are
| included; otherwise the caller is treated as a guest.
|--------------------------------------------------------------------------
*/

export async function getPublicJobs(req: Request, res: Response) {
  try {
    const data = await CandidateService.getCandidateJobs(req.candidateId, {
      page: Number(req.query.page) || 1,
      limit: Math.min(Number(req.query.limit) || 20, 100),
      country: req.query.country as string,
      category: req.query.category as string,
      search: req.query.search as string,
    });

    res.json({ success: true, ...data });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function getPublicJob(req: Request, res: Response) {
  try {
    const data = await CandidateService.getCandidateJob(req.candidateId, String(req.params.id));

    res.json({ success: true, data });
  } catch (err: any) {
    res.status(404).json({ success: false, message: err.message });
  }
}
