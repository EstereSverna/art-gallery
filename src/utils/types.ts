export interface ArtPieceType {
  objectNumber: string;
  title: string;
  webImage: {
    url: string;
  };
}

export interface ArtPieceDetailsType {
  objectNumber: string;
  title: string;
  webImage: {
    url: string;
  };
  label: {
    title: string;
    makerLine: string;
    description: string;
  };
}
