import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

const RouteApiProducts = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        console.log('FIZ UM GET');
        const products = await prisma.product.findMany({
            include: {
                productInventory: {
                    include: {
                        orderDetail: {
                            include: {
                                user: true,
                            },
                        },
                    },
                },
            },
        });
        res.status(200).json({ products });
    }
    if (req.method === 'POST') {
        console.log('FIZ UM GET');
        const productCreated = await prisma.product.create({
            data: {
                name: 'Monitored',
                image:'foto monitor'
            },
        });
        res.status(200).json({ product: productCreated });
    }
};

export default RouteApiProducts;