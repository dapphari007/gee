import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    const users = await prisma.user.findMany({
      take: limit,
      skip: offset,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        points: true,
        level: true,
        school: {
          select: {
            id: true,
            name: true,
          }
        },
        createdAt: true,
      },
      orderBy: {
        points: 'desc'
      }
    });

    const total = await prisma.user.count();

    return NextResponse.json({
      users,
      total,
      limit,
      offset
    });
  } catch (error) {
    console.error('Users fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}