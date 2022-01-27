import React from 'react';
import { PrismaClient } from '.prisma/client';
import safeJsonStringify from 'safe-json-stringify';

const prisma = new PrismaClient();

export async function getServerSideProps() {
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
    return {
        props: { products: JSON.parse(safeJsonStringify(products)) },
    };
}

const Products = ({ products }) => {
    return (
        <div>
            Estes sao os meus produtos:
            <div>Tabela de produtos</div>
            {products && products.map((p) => {
                return <div key={p.id}>{p.name}</div>;
            })}
        </div>
    );
};

export default Products;