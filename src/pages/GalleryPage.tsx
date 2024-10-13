import React, { useCallback, useEffect, useState } from 'react';
import { getArtPieces } from '../api/RijksmuseumAPI';
import ArtPiece from '../components/ArtPiece';
import ShuffleButton from '../components/ShuffleButton';
import { ArtPieceType } from '../utils/types';
import '../styles/GalleryPage.css';
import debounce from 'lodash.debounce';
import Navbar from '../components/NavBar';

const GalleryPage: React.FC = () => {
  const [artPieces, setArtPieces] = useState<ArtPieceType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFetchError = (error: unknown) => {
    console.error('Error fetching art pieces:', error);
    setErrorMessage('Failed to load art pieces. Please try again later.');
  };

  const fetchArtPieces = useCallback(
    debounce(async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);
        const artData = await getArtPieces(3);
        setArtPieces(artData);
      } catch (error) {
        handleFetchError(error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [],
  );

  useEffect(() => {
    fetchArtPieces();
  }, [fetchArtPieces]);

  return (
    <div className="gallery-page">
      <Navbar />
      <h1 className="gallery-page-heading">RIJKSMUSEUM ART GALLERY</h1>

      {/* Display an error message if there is an error fetching the art pieces */}
      {errorMessage && <p className="error">{errorMessage}</p>}

      {/* Display loading message while the art pieces are being fetched*/}
      {isLoading ? (
        <div className="gallery">
          {' '}
          <p>LOADING ART PIECES...</p>
        </div>
      ) : (
        <div className="gallery">
          {artPieces.map((art) => (
            <ArtPiece key={art.objectNumber} art={art} />
          ))}
        </div>
      )}

      {/* Render the ShuffleButton component to allow users to shuffle the art pieces */}
      <ShuffleButton onClick={fetchArtPieces} />
    </div>
  );
};

export default GalleryPage;
