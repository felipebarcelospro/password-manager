import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../src/lib/prisma'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    const { id } = req.query

    const site = await prisma.site.findUnique({
      where: {
        id: Number(id)
      }
    })
    res.status(200).json(site)
  }

  if (req.method === 'PUT') {
    const { id } = req.query

    const site = await prisma.site.update({
      where: {
        id: Number(id)
      },
      data: req.body
    })
    res.status(200).json(site)
  }

  if (req.method === 'DELETE') {
    const { id } = req.query

    await prisma.site.delete({
      where: {
        id: Number(id)
      }
    })
    res.status(204).json({})
  }
}
