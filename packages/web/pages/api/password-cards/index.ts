import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../src/lib/prisma'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    const { search } = req.query

    const sites = await prisma.site.findMany({
      where: {
        name: search && {
          contains: search as string
        }
      }
    })
    res.status(200).json(sites)
  }

  if (req.method === 'POST') {
    const requiredFields = ['name', 'url', 'username', 'password']
    const missingFields = requiredFields.filter(field => !(field in req.body))

    if (missingFields.length > 0) {
      res.status(400).json({
        error: `Missing fields: ${missingFields.join(', ')}`
      })
      return
    }

    const site = await prisma.site.create({
      data: req.body
    })
    res.status(201).json(site)
  }
}
