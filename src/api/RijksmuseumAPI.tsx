import axios from 'axios';
import { ArtPieceType, ArtPieceDetailsType } from '../utils/types';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection';

export const getArtPieces = async (count: number): Promise<ArtPieceType[]> => {
  try {
    // Generate a random page number for fetching random art pieces within limits
    const randomPage = Math.floor(Math.random() * 3333) + 1;

    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&ps=${count}&p=${randomPage}&imgonly=true`,
    );
    if (response.data && response.data.artObjects) {
      return response.data.artObjects;
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.error('Error fetching art pieces:', error);
    return [];
  }
};

export const getArtPieceById = async (
  id: string,
): Promise<ArtPieceDetailsType> => {
  const response = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
  return response.data.artObject;
};
