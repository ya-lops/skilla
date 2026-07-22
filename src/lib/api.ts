// src/lib/api.ts
import type { BrandData } from '@/types/brand';

const API_URL = 'https://api2.skilla.ru/api/site';

export async function getBrandData(): Promise<BrandData> {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: BrandData = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch brand data:', error);
    throw error;
  }
}