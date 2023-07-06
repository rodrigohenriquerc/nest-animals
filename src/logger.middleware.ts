import { Request, Response, NextFunction } from 'express';

export function logger(_req: Request, _res: Response, next: NextFunction) {
  console.log('Request...');
  next();
}
