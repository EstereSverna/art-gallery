import React from 'react';
import { ArtPieceType } from '../utils/types';

interface ArtPieceProps {
  art: ArtPieceType | null;
  error?: string;
}

const generateArtUrl = (objectNumber: string) => `/art/${objectNumber}`;

const ArtPiece: React.FC<ArtPieceProps> = ({ art, error }) => {
  if (error) {
    return <div className="art-piece">Error: {error}</div>;
  }

  if (!art) {
    return <div className="art-piece">Loading...</div>;
  }

  if (!art.webImage) {
    return <div className="art-piece">Image not available</div>;
  }

  const artUrl = generateArtUrl(art.objectNumber);

  return (
    <div className="art-piece">
      <a href={artUrl}>
        <img src={art.webImage.url} alt={art.title} />
      </a>
    </div>
  );
};

export default ArtPiece;
