import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtPieceById } from '../api/RijksmuseumAPI';
import { ArtPieceDetailsType } from '../utils/types';
import '../styles/ArtDetailPage.css';
import Navbar from '../components/NavBar';

const ArtDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artPiece, setArtPiece] = useState<ArtPieceDetailsType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageSize, setImageSize] = useState(50);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageSize(Number(event.target.value));
  };

  const handleFetchError = (error: unknown) => {
    console.error('Error fetching art pieces:', error);
    setErrorMessage('Failed to load art pieces. Please try again later.');
  };

  useEffect(() => {
    const fetchArtPiece = async () => {
      if (!id) {
        setErrorMessage('No art piece ID found');
        return;
      }

      try {
        setIsLoading(true);
        const artData = await getArtPieceById(id);
        setArtPiece(artData);
      } catch (error) {
        handleFetchError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtPiece();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (errorMessage) return <div>{errorMessage}</div>;
  if (!artPiece) return <div>No art piece found.</div>;

  return (
    <div>
      <Navbar />
      <div className="art-detail">
        <img
          src={artPiece.webImage.url}
          alt={artPiece.label.title}
          style={{ width: `${imageSize}%` }}
        />
        <input
          type="range"
          min="10"
          max="200"
          value={imageSize}
          onChange={handleSizeChange}
        />
        <h2>{artPiece.title}</h2>
        <h3>{artPiece.label.makerLine}</h3>
        <p>{artPiece.label.description || 'No description available.'}</p>

        <Link to="/">BACK TO GALLERY</Link>
      </div>
    </div>
  );
};

export default ArtDetailPage;
