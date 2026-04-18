export interface FileManagerInput {
  parentId?: string;
  name: string;
  type?: "folder" | "file";
  mimeType?: string;
  size?: number;
  path?: string;
  url?: string;
  thumbnail?: string;
  isStarred?: boolean;
  isShared?: boolean;
  sharedWith?: string[];
}

export interface ImageLibraryInput {
  name: string;
  url: string;
  thumbnail?: string;
  width?: number;
  height?: number;
  mimeType?: string;
  size?: number;
  category?: string;
  tags?: string[];
}

export interface FileSearchInput {
  query?: string;
  type?: string;
  parentId?: string;
  isDeleted?: boolean;
}

export interface FileMoveInput {
  fileIds: string[];
  targetFolderId: string;
}